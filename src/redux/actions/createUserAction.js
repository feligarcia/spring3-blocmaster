import { types } from "../types/types.js";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";

export const createUserActionAsincrono = (newUser) => {
 
  return (dispatch) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
      .then(async ({ user }) => {
        await updateProfile(auth.currentUser, {
          displayName: newUser.name,
          photoURL: newUser?.image,
        });
        dispatch(createUserActionSincro(newUser));
      })

      .catch((error) => console.log(error));
  };
};

export const createUserActionSincro = (user) => {
  return {
    type: types.register,
    payload: user,
  };
};
