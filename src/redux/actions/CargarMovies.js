import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { typesFunction } from "../types/types";



export const LoadMoviesAsincrono =  () => {
  return async (dispatch)=>{
  
        const moviesDB = await getDocs(collection(db, "moviesDB"));
        const movies = [];
        moviesDB.forEach((doc) => {
          movies.push({
            ...doc.data(),
          });
        });
   await dispatch(LoadMoviesSincrono(movies))    
    
      
  };
};

export const LoadMoviesSincrono = (movies) => {
    return {
      type: typesFunction.CargarMovies,
      payload: movies,
    };
  };
