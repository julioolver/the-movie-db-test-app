import http from "@/plugins/axios";
import Movie from "../domain/entity/Movie";
import { ref, reactive, onMounted } from "vue";

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
  const movies = reactive<Movie[]>([]);
  const userMovies = reactive<Movie[]>([]);

  const fetchMovies = async (newPage: number) => {
    currentPage.value = newPage;

    const responseMovies = await http.get("/movies", {
      params: {
        page: newPage,
        query: "dead",
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
  };
}

// Define a tipagem dos retornos para uso em outras partes
export type movieController = ReturnType<typeof movieController>;
