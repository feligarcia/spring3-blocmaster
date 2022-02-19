import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { typesFavorites } from "../types/types";

export const listFavASincrono = () => {
  return async (dispatch) => {
    const coleccion = await getDocs(collection(db, "userFavorites"));
    const movies = [];
    coleccion.forEach((doc) => {
      movies.push({
        ...doc.data(),
      });
    });
    dispatch(listFavSincronico(movies))
  };
};

export const listFavSincronico = (movies) => {
    return {
      type: typesFavorites.listar,
      payload: movies
    };
  };

export const regisFavASincrono = (movie) => {
  return async (dispatch) => {
    const FavDB = collection(db, "userFavorites")
    const queri = query(FavDB,where('id','==', movie.id))
    const FavDBPrev = await getDocs(queri)
    let existe = false
    FavDBPrev.forEach((moviefav)=>{
      existe = true
    })
    if(!existe){
       addDoc(collection(db, "userFavorites"), movie)
      .then((resp) => {
        dispatch(regisFavSicrono(movie));
      })
      .catch((error) => {
        console.log(error);
      });
    dispatch(regisFavSicrono(movie));
    }

  };
};

export const regisFavSicrono = (movie) => {
  return {
    type: typesFavorites.registrar,
    payload: movie.id,
  };
};

export const borrarFavASincro = (id) => {
    return async (dispatch) => {
      const FavDB = collection(db, "userFavorites")
      const queri = query(FavDB,where('id','==', id))
    
    const FavDBPrev = await getDocs(queri)
    FavDBPrev.forEach((moviefav)=>{
        deleteDoc(doc(db,'userFavorites',moviefav.id))
        .then(res=>{
            dispatch(borrarFavSINcrono(id))
        })
    })

    };
  };
  
  export const borrarFavSINcrono = (id) => {
      return {
        type: typesFavorites.borrar,
        payload: id
      };
    };
  

