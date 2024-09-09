import Movie from "../domain/entity/Movie";

export const movies: Movie[] = [
  {
    external_id: 1216191,
    title: "Oddity",
    provider: "the-movie-db",
    synopsis:
      "Dani e seu marido Ted estavam reformando uma casa de campo remota, quando ela é assassinada. O único suspeito, um paciente do sanatório, foi inocentado, sendo assassinado pouco tempo depois. Um ano depois, a irmã gêmea e cega de Dani decide voltar ao local e faz uma visita inesperada a Ted e sua nova namorada. Decidida a se vingar por achar que algo foi escondido sobre a morte da irmã, ela leva consigo os itens mais perigosos de uma coleção amaldiçoada.",
    year: "2024-07-19",
    watched: false,
    favorite: false,
    watch_later: false,
    poster_path:
      "https://image.tmdb.org/t/p/w500/uln9Efc2vzDOl0Fue2BPs8l1WO7.jpg",
    director: "Director's Name", // Add the director property
    duration: 120, // Add the duration property
  },
  {
    external_id: 1169366,
    title: "Oddity",
    provider: "the-movie-db",
    synopsis:
      "Awakening within a forest, a man soon realises his existence there maybe indefinite.",
    year: "2022-11-17",
    watched: false,
    favorite: false,
    watch_later: false,
    poster_path: "https://image.tmdb.org/t/p/w500/poster_path.jpg",
    director: "Director's Name", // Add the director property
    duration: 90, // Add the duration property
  },
];
