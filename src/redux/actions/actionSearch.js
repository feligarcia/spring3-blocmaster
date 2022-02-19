import { typesFunction } from "../types/types";

export const actionSearch = (searchtext) => {
  return {
    type: typesFunction.search,
    payload: searchtext,
  };
};
