import { keyTMDB } from "../keys"
export const endpoint = `https://api.themoviedb.org/3/movie/top_rated?api_key=${keyTMDB}`
export const urltrailer = `https://api.themoviedb.org/3/movie/now_playing?api_key=${keyTMDB}&append_to_response=videos`
export const urlpopular = `https://api.themoviedb.org/3/movie/popular?api_key=${keyTMDB}&language=es-CO&append_to_response=videos`