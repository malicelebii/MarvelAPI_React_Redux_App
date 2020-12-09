import {
  GET_CHARACTERS,
  GET_ONE_CHARACTER,
  GET_COMICS,
} from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return { ...state, characters: action.payload };
    case GET_ONE_CHARACTER:
      return { ...state, character: action.payload };
    case GET_COMICS:
      return { ...state, comics: action.payload };
    default:
      return state;
  }
}
