import { UPDATE_LIST, UPDATE_FILTERED_LIST, UPDATE_FETCH_STATUS, UPDATE_FETCH_ERROR, UPDATE_TYPES_LIST, UPDATE_TYPES_CHECKED, UPDATE_WEAKNESSES_LIST, UPDATE_WEAKNESSES_CHECKED, UPDATE_NAMETOCHECK } from '../constants/actions';

const initialState = {
  url: "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json", // Source from where to fetch Pokemons
  list: [], // Store parsed list after fetching JSON from URL
  filteredList: [], // Applying filters on the content of list
  isLoaded: false, // Indicates whether fetch has been executed (with or without errors)
  error: null, // Indicate whether there was any error while fetching JSON from URL
  types: [], // List of types from all Pokemons
  typesChecked: [], // List of types checked from the types filter list
  weaknesses: [], // List of weaknesses from all Pokemons
  weaknessesChecked: [], // List of weaknesses checked from the weaknesses filter list
  nameToCheck: [] // Name to filter for based on the search textbox input
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
  if (action.type === UPDATE_TYPES_LIST) {
    return Object.assign({}, state, {
      types: action.payload.types
    });
  }
  if (action.type === UPDATE_TYPES_CHECKED) {
    return Object.assign({}, state, {
      typesChecked: action.payload.typesChecked
    });
  }
  if (action.type === UPDATE_WEAKNESSES_LIST) {
    return Object.assign({}, state, {
      weaknesses: action.payload.weaknesses
    });
  }
  if (action.type === UPDATE_WEAKNESSES_CHECKED) {
    return Object.assign({}, state, {
      weaknessesChecked: action.payload.weaknessesChecked
    });
  }
  if (action.type === UPDATE_NAMETOCHECK) {
    return Object.assign({}, state, {
      nameToCheck: action.payload.nameToCheck
    });
  }
  // Should never reach this return...
  return state;
}

export default rootReducer;