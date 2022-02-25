import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { borrarFavASincro, regisFavASincrono } from "../../redux/actions/favActions";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

let initState = {
  Moviefav: [],
};
let store = mockStore(initState);

describe("Validar movie en store", () => {
  beforeEach(() => {
    store = mockStore(initState);
  });
  test("Crear movie en store", async () => {
    const movie = {
      id: "111-222-333-444",
      titulo: "Desmatrix",
      descripcion: "Moriremos y renaceremos entre las llamas",
      fecha_lanzamiento: "2022-07-24",
      imagen: "www.google.com",
      rating: 9.0,
      trailer: "www.otrapruebamas.com",
    };
    const email = "laura@munoz.com";
    await store.dispatch(regisFavASincrono(movie, email));
    const actions = store.getActions();
  });
    test("Borrar movie en store", async () => {
      const id = 1

      await store.dispatch(
        borrarFavASincro({
              type: typesFavorites.borrar,
              payload: id,
            })
      );
      const actions = store.getActions();
    });
});
