export function ApplyFilters(pokemons, filterType, filtersToMatch) {
  if (filtersToMatch.length === 0) {
    return pokemons
  } else {
    var passedFilter = [];
    pokemons.forEach(pokemon => {
      if (PokemonListMatch(pokemon, filterType, filtersToMatch)) {
        passedFilter.push(pokemon);
      }
    })
    return passedFilter;
  }
}

function PokemonListMatch(pokemon, filterType, filtersToMatch) {
  var match = true;
  var properties = [pokemon[filterType]].join("").toLowerCase();
  filtersToMatch.forEach(filter => {
    if ((filter.length !== 0) && (!properties.includes(filter))) {
      match = false;
    }
  });
  return match;
}