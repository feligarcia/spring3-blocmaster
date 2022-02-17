import {types} from '../types/types.js'
const InitialState = {
    user: [],
    location:[]
}

export const userReducer = (state = InitialState, action) =>{
   switch (action.type) {
       case types.register:
           return {
               user: [action.payload]
           }
           case types.list:
            return {
                // user: [action.payload]
            }
        

           case types.logout:
           return {
               user:[action.payload]
           }
           
           case types.login:
           return {
               ...state, user: [action.payload]
           }

           case types.location:
            return {
                ...state, location: [action.payload]
            }
           
          
       default:
           return state
   }

}