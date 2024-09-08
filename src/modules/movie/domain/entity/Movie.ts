import IMovie from "../../types/movie";

class Movie {
  title: string;
  src: string;

  constructor(movie: IMovie) {
    this.title = movie.title;
    this.src = movie.src;
  }
}

export default Movie;
