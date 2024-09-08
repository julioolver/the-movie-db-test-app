import IMovie from "../../types/movie";

class Movie {
  title: string;
  "watched": boolean;
  "favorite": boolean;
  "watch_later": boolean;
  poster_path: string;

  constructor(movie: IMovie) {
    this.title = movie.title;
    this.poster_path = movie.poster_path;
    this.watched = movie.watched;
    this.favorite = movie.favorite;
    this.watch_later = movie.watch_later;
  }
}

export default Movie;
