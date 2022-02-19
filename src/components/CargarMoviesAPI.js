import axios from "axios";
import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { db } from "../firebase/firebaseConfig";
import { endpoint, urlpopular } from "../helpers/url";
import { v4 as uuidv4 } from "uuid";

const CargarMoviesAPI = () => {
  const cargarPeliculas = () => {
    axios.get(urlpopular + `&page=4`).then((response) => {
      const Movies = response.data.results;

      console.log(Movies);
      Movies.forEach(async (movie) => {
        let YTBvideo = "";
        await axios
          .get(
            `https://api.themoviedb.org/3/movie/${movie.id}?api_key=f3afe7eac782f9fdc4afe8c90ea75383&append_to_response=videos`
          )
          .then((resp) => {
            const vid = resp.data.videos.results;
            const v = vid.find(
              (e) => e.site === "YouTube" && e.type === "Trailer"
            );
            YTBvideo = `https://www.youtube.com/embed/${v?.key}?controls=0`
          });

        const { title, overview, vote_average, poster_path, release_date } = movie;
        const autoMovie = {
          id: uuidv4(),
          titulo: title,
          descripcion: overview,
          fecha_lanzamiento:release_date,
          rating: vote_average,
          imagen: `https://image.tmdb.org/t/p/w342${poster_path}`,
          trailer:YTBvideo
        };
        addDoc(collection(db, "moviesDB"), autoMovie).then((resp) => {});
        console.log(autoMovie);
      });
    });
  };
  return (
    <button onClick={cargarPeliculas}>
      <h1>Cargar peliculas (sin miedo al exito papa)</h1>
    </button>
  );
};

export default CargarMoviesAPI;
