function FilterList(inputList, nameFilter) {
  var filteredList = inputList;
  if ((inputList.length > 0) && (nameFilter !== "")) {
    filteredList = [];
    inputList.forEach(pokemon => {
      if (pokemon.name.toLowerCase().indexOf(nameFilter.toLowerCase()) > -1) {
        filteredList.push(pokemon);
      }
    });
  }
  return filteredList;
}

export default FilterList;