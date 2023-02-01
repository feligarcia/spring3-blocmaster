import axios from 'axios';
import {types} from '../types/types.js'
const { REACT_APP_NAME_MAPSAPI } = process.env

export const locationAsincrono = () => {
  return(dispatch) => {
    if (navigator.geolocation) { //check if geolocation is available
      navigator.geolocation.getCurrentPosition(function(position){
      axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${REACT_APP_NAME_MAPSAPI}`)
        .then((resp)=>  {console.log('acesso a ubicacion');dispatch(locationSincro(resp.data.results[0].formatted_address))})
    });   
      }
  }
}

export const locationSincro = (place) => {
    return {
      type: types.location,
      payload: place,
    };
  };