import { types } from "../types/types.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { google } from "../../firebase/firebaseConfig";


export const loginGoogle = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, google)
      .then(({ user }) => {
        console.log(user);
        dispatch(loginSincronico(user.uid, user.displayName, user.email));
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const loginEmailPassword = (logUser) => {
  return (dispatch) => {
    const auth = getAuth();
    console.log(logUser);

    signInWithEmailAndPassword(auth, logUser.email, logUser.password)
      .then(({ user }) => {
        dispatch(loginSincronico(user.uid, user.displayName, user.email));
        console.log("Ingreso satisfactorio");
      })
      .catch((e) => {
        console.log("El usuario no existe" + e);
      });
  };
};

export const loginSincronico = (id, displayname, email) => {
  return {
    type: types.login,
    payload: {
      id,
      displayname,
      email,
    },
  };
};

export const logoutAsincrono = () => {
    return(dispatch) => {
       const auth = getAuth();
       signOut(auth)
       .then((user) => {
         dispatch(logoutSincrono())
          console.log('Ha salido satisfactoriamente')

       })
       .catch(error => {
           console.log(error)
       })
    }
}

export const logoutSincrono = () => {
  return {
    type: types.logout,
    payload: {},
  };
};