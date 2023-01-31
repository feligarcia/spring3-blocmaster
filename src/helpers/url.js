const { REACT_APP_NAME_MOVIEAPI } = process.env
export const endpoint = `https://api.themoviedb.org/3/movie/top_rated?api_key=${REACT_APP_NAME_MOVIEAPI}`
export const urltrailer = `https://api.themoviedb.org/3/movie/now_playing?api_key=${REACT_APP_NAME_MOVIEAPI}&append_to_response=videos`
export const urlpopular = `https://api.themoviedb.org/3/movie/popular?api_key=${REACT_APP_NAME_MOVIEAPI}&language=es-CO&append_to_response=videos`