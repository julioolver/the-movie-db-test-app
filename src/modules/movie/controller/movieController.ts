import http from "@/plugins/axios";
import Movie from "../domain/entity/Movie";
import { movies as mockMovies } from "../consts/mockMovies";
import { ref, reactive, onMounted } from "vue";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

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
  const totalPages = ref(5);
  const search = ref("");
  const movies = reactive<Movie[]>([]);
  const userMovies = reactive<Movie[]>([]);

  const fetchMovies = async (newPage: number) => {
    currentPage.value = newPage;

    movies.push(...mockMovies)

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
  };

  const getMovieByUser = async () => {
    const response = await http.get(`user/movies/`);

    userMovies.splice(0, userMovies.length);

    userMovies.push(...response.data.movies);
  };

  const changeAction = async (
    movie: Movie,
    attribute: "watched" | "favorite" | "watch_later"
  ) => {
   try {
    movie[attribute] = !movie[attribute];
    movie.external_id = movie.external_id.toString();

    if (movie.internal_id) {
      http.put(`/movies/${movie.internal_id}/status`, movie).then(() => {
        console.log("Movie updated");
      });
    } else {
      const response = await http.post("/movies", movie);
      const foundMovie = movies.find(
        (m) => m.external_id === movie.external_id
      );

      if (foundMovie) {
        foundMovie.internal_id = response.data.movie.id;
        console.log(
          "Movie created and internal_id updated:",
          foundMovie.internal_id
        );
      }
    }
    toast.success('Wow so easy!');

   } catch (error) {
    toast.error(error.message);
   }
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
  };
}

// Define a tipagem dos retornos para uso em outras partes
export type movieController = ReturnType<typeof movieController>;
