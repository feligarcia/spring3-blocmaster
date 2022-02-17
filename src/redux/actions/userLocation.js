import axios from 'axios';

import {types} from '../types/types.js'




export const locationAsincrono = () => {


  return(dispatch) => {
    if (navigator.geolocation) { //check if geolocation is available
      navigator.geolocation.getCurrentPosition(function(position){
      console.log(position);
      axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyCElbnB9Wl9NGgrUK_BdRXwFlzL6yV9GMs`)
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