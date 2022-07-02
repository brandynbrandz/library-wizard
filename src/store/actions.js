import * as actionTypes from "./constant";


export const addSelectedGenre = (itemID) => {
  return {
    type: actionTypes.SELECT_GENRE,
    payload: {
      id:itemID,
    },
  };
};

export const setPage = (type,count) => {
  return {
    type: actionTypes.SET_PAGE,
    payload: {
     type,
     page: count
    },
  };
};

export const addSelectedSubGenre = (itemID) => {
  return {
    type: actionTypes.SELECT_SUBGENRE,
    payload: {
      id:itemID,
    },
  };
};

export const addSubgenre = (itemID, form) =>{
  return {
    type: actionTypes.ADD_SUBGENRE,
    payload: {
      id:itemID,
      data: form
    },
  };
}

export const resetAll = () =>{
  return {
    type: actionTypes.RESET_ALL,
  };
}

