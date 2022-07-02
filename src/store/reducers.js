import genres from "../data";
import { getHighestId } from "../helpers";
import * as actionTypes from "./constant";

const INITIAL_STATE = {
  genres_collection: genres,
  selected_genre: [],
  pages: 1,
  selected_subgenre: [],
  temp_subgenre: [],
};

const wizardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SELECT_GENRE:
      const item = state.genres_collection.find((item) => {
        return item.id === action.payload.id;
      });

      const checkIfGenreExist = state.selected_genre.filter(
        (item) => item.id === action.payload.id
      );

      return {
        ...state,
        selected_genre: checkIfGenreExist.length < 1 ? [item] : [],
      };
    case actionTypes.SET_PAGE:
      return {
        ...state,
        pages:
          action.payload.type === "next" && state.pages < 6
            ? state.pages + action.payload.page
            : action.payload.type === "prev" && state.pages > 1
            ? state.pages - action.payload.page
            : state.pages,
      };

    case actionTypes.SELECT_SUBGENRE:
      const itemSub = state?.selected_genre[0]?.subgenres.find((item) => {
        return item.id === action.payload.id;
      });

      const checkIfExisting = state.selected_subgenre.filter(
        (item) => item.id === action.payload.id
      );
      return {
        ...state,
        selected_subgenre: checkIfExisting.length < 1 ? [itemSub] : [],
      };

    case actionTypes.ADD_SUBGENRE:
      const itemToBeAddedInto = state.genres_collection.find((item) => {
        return item.id === action.payload.id;
      });

      let highestId = getHighestId(state.genres_collection);
      let payload = {
        id: highestId + 1,
        ...action.payload.data,
      };

      let newItem = {
        ...itemToBeAddedInto,
        subgenres: [...itemToBeAddedInto.subgenres, payload],
      };

      const newCollection = state.genres_collection.filter(
        (item) => item.id !== action.payload.id
      );

      return {
        ...state,
        genres_collection:
          newCollection.length > 1
            ? [...newCollection, newItem].sort((a, b) => a.id - b.id)
            : genres,
        selected_genre: newItem ? newItem : state.selected_subgenre,
        pages: state.pages + 1,
        selected_subgenre: [],
        temp_subgenre: [payload, {idGenre:action.payload.id}],
      };
    case actionTypes.RESET_ALL:
      return {
        ...state,
        selected_subgenre: [],
        pages: 1,
        selected_genre: [],
        temp_subgenre: [],
      };

    default:
      return state;
  }
};

export default wizardReducer;
