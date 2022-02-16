import { types } from "../types/types.js";
import {addDoc, collection} from 'firebase/firestore'
import {db} from '../../firebase/firebaseConfig'
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";

export const createUserActionAsincrono = (newUser) => {
  console.log(newUser)
  return(dispatch) =>{
    const auth = getAuth()
    createUserWithEmailAndPassword(auth,newUser.email, newUser.password)
    .then(async ({user}) =>{
      
      await updateProfile(auth.currentUser,{displayName: newUser.name, photoURL:newUser?.image})
      dispatch(createUserActionSincro(newUser))

    })


      // addDoc(collection(db, 'usersDB'), newUser)
      // .then(resp=>{
      //     dispatch(createUserActionSincro(newUser))
      // })
      .catch(error=> console.log(error))
  };
};

export const createUserActionSincro = (user) => {
  return {
    type: types.register,
    payload: user,
  };
};
