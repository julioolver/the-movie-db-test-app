import IMovie from "../../types/movie";

class Movie {
  external_id: string | number;
  internal_id?: number;
  provider: string;
  title: string;
  director?: string;
  synopsis: string;
  duration?: number;
  year: string;
  watched: boolean;
  favorite: boolean;
  watch_later: boolean;
  poster_path: string;

  constructor(movie: IMovie) {
    this.external_id = movie.external_id;
    this.provider = "the-movie-db";
    this.title = movie.title;
    this.director = "Teodor";
    this.synopsis = movie.synopsis;
    this.duration = movie.duration;
    this.year = movie.year;
    this.poster_path = movie.poster_path;
    this.watched = movie.watched;
    this.favorite = movie.favorite;
    this.watch_later = movie.watch_later;
  }
}

export default Movie;
