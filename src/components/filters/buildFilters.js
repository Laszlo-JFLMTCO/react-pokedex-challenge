import { CleanUpFilterList } from './common'

export function BuildFilters(pokemons) {
  var weaknesses = [];
  var types = [];
  pokemons.forEach(pokemon => {
    if ((pokemon.weaknesses != null) && (pokemon.weaknesses.length > 0)) {
      weaknesses = AddToList(weaknesses, pokemon.weaknesses)
    }
    if ((pokemon.type != null) && (pokemon.type.length > 0)) {
      types = AddToList(types, pokemon.type)
    }
  });
return {weaknesses, types};
}

function AddToList(list, newItems) {
  var updatedList = list;
  newItems.forEach(item => {
    updatedList.push(item.toLowerCase())
  });
  return CleanUpFilterList(updatedList);
}