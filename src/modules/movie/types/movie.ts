export default interface IMovie {
  external_id: string;
  internal_id?: number;
  provider: string;
  title: string;
  director?: string;
  synopsis: string;
  duration?: number;
  year: string;
  poster_path: string;
  watched: boolean;
  favorite: boolean;
  watch_later: boolean;
}
