import { typesFavorites } from "../types/types"

const initialState = {
    favMovies:[],
    Moviefav:[]

}

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {

  case typesFavorites.listar:
    return { ...state,
    favMovies: action.payload
    }
    case typesFavorites.registrar:
    return { ...state,
        Moviefav: action.payload
    }
    case typesFavorites.borrar:
        return { ...state,
            favMovies: state.favMovies.filter(moviefav=>moviefav.id !== action.payload)
        }

  default:
    return state
  }
}
