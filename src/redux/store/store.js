import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { appReducer } from "../reducers/appReducer";
import {favoritesReducer} from "../reducers/favoritesReducer";
import { userReducer } from "../reducers/userReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  user: userReducer,
  app: appReducer,
  favs: favoritesReducer
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
