import { UPDATE_LIST, UPDATE_FILTERED_LIST, UPDATE_FETCH_STATUS, UPDATE_FETCH_ERROR } from '../constants/actions';

const initialState = {
  url: "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json", // Source from where to fetch Pokemons
  list: [], // Store parsed list after fetching JSON from URL
  filteredList: [], // Applying filters on the content of list
  isLoaded: false, // Indicates whether fetch has been executed (with or without errors)
  error: null // Indicate whether there was any error while fetching JSON from URL
};

function rootReducer(state = initialState, action) {
  if (action.type === UPDATE_LIST) {
    return Object.assign({}, state, {
      list: action.payload.list
    });
  }
  if (action.type === UPDATE_FILTERED_LIST) {
    return Object.assign({}, state, {
      filteredList: action.payload.filteredList
    });
  }
  if (action.type === UPDATE_FETCH_STATUS) {
    return Object.assign({}, state, {
      isLoaded: action.payload.fetchStatus
    });
  }
  if (action.type === UPDATE_FETCH_ERROR) {
    return Object.assign({}, state, {
      error: action.payload.fetchError
    });
  }
  // Should never reach this return...
  return state;
}

export default rootReducer;