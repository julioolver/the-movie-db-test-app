import http from "@/plugins/axios";
import Movie from "../domain/entity/Movie";
import { ref, reactive, onMounted } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { catchErrors } from "@/handler/errors";

export default function movieController() {
  const movie = reactive(
    new Movie({
      provider: "",
      external_id: "",
      internal_id: 0,
      title: "",
      poster_path: "",
      director: "",
      synopsis: "",
      duration: 0,
      year: "",
      watched: false,
      favorite: false,
      watch_later: false,
    })
  );

  const currentPage = ref(1);
  const totalPages = ref(1);
  const isOpen = ref(false);
  const search = ref("");
  const movies = reactive<Movie[]>([]);
  const userMovies = reactive<Movie[]>([]);
  const selectedMovie = ref<Movie | null>(null);

  const fetchMovies = async (newPage: number) => {
    try {
      currentPage.value = newPage;

      const responseMovies = await http.get("/movies", {
        params: {
          page: newPage,
          query: search.value.trim(),
        },
      });

      const { page } = responseMovies.data;

      movies.splice(0, movies.length);
      movies.push(...responseMovies.data.movies);

      totalPages.value = page.total;
    } catch (error) {
      catchErrors(error);
    }
  };

  const getMovieByUser = async () => {
    try {
      const response = await http.get(`user/movies/`);

      userMovies.splice(0, userMovies.length);

      userMovies.push(...response.data.movies);
    } catch (error) {
      catchErrors(error);
    }
  };

  const changeAction = async (
    movie: Movie,
    attribute: "watched" | "favorite" | "watch_later"
  ) => {
    try {
      movie[attribute] = !movie[attribute];
      movie.external_id = movie.external_id.toString();

      if (movie.internal_id) {
        await http.put(`/movies/${movie.internal_id}/status`, movie);

        toast.success("Status atualizado com sucesso!");

        return;
      }

      const response = await http.post("/movies", movie);

      const foundMovie = movies.find(
        (m) => m.external_id === movie.external_id
      );

      if (foundMovie) {
        foundMovie.internal_id = response.data.movie.id;
      }

      toast.success("Filme adicionado com sucesso!");
    } catch (error) {
      catchErrors(error);
    }
  };

  const openDialog = (movie: any) => {
    selectedMovie.value = { ...movie };
    isOpen.value = true;
  };
  const closeDialog = () => {
    isOpen.value = false;
    selectedMovie.value = null;
  };

  onMounted(async () => {
    await getMovieByUser();
  });

  return {
    movie,
    changeAction,
    fetchMovies,
    movies,
    currentPage,
    totalPages,
    userMovies,
    search,
    openDialog,
    closeDialog,
    isOpen,
    selectedMovie,
  };
}

// Define a tipagem dos retornos para uso em outras partes
export type movieController = ReturnType<typeof movieController>;
