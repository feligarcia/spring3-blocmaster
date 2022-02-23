import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { typesFavorites } from "../types/types";

export const listFavASincrono = (emailuser) => {
  return async (dispatch) => {
    const FavDB = collection(db, "userFavorites");
    const queri = query(FavDB, where("email", "==", emailuser));
    const FavDBPrev = await getDocs(queri);
    const movies = [];
    FavDBPrev.forEach((movie) => {
      movies.push({
        ...movie.data(),
      });
    });

    dispatch(listFavSincronico(movies));
  };
};

export const listFavSincronico = (movies) => {
  return {
    type: typesFavorites.listar,
    payload: movies,
  };
};

export const regisFavASincrono = (movie, emailuser) => {
  return async (dispatch) => {
    const FavDB = collection(db, "userFavorites");
    const queri = query(
      FavDB,
      where("id", "==", movie.id),
      where("email", "==", emailuser)
    );
    const FavDBPrev = await getDocs(queri);
    let existe = false;
    FavDBPrev.forEach((moviefav) => {
      existe = true;
    });
    if (!existe) {
      // console.log(movie)
      const {descripcion,fecha_lanzamiento,id, imagen, rating, titulo, trailer} = movie
      const newMovieFa = {descripcion,fecha_lanzamiento,id, imagen, rating, titulo, trailer, 'email':emailuser}    
      console.log(newMovieFa)  
         addDoc(collection(db, "userFavorites"), newMovieFa)
        .then((resp) => {
          dispatch(regisFavSicrono(newMovieFa));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
};

export const regisFavSicrono = (movie) => {
  return {
    type: typesFavorites.registrar,
    payload: movie.id,
  };
};

export const borrarFavASincro = (id, emailuser) => {
  return async (dispatch) => {
    const FavDB = collection(db, "userFavorites");
    const queri = query(FavDB, where("id", "==", id),where("email", "==", emailuser));

    const FavDBPrev = await getDocs(queri);
    FavDBPrev.forEach((moviefav) => {
      deleteDoc(doc(db, "userFavorites", moviefav.id)).then((res) => {
        dispatch(borrarFavSINcrono(id));
      });
    });
  };
};

export const borrarFavSINcrono = (id) => {
  return {
    type: typesFavorites.borrar,
    payload: id,
  };
};
