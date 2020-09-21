import { CleanUpFilterList } from './common'

export function AddToList(list, item) {
  var updatedList = list;
  if (item !== "") {
    updatedList.push(item.toLowerCase());
  }
  return CleanUpFilterList(updatedList);
}

export function RemoveFromList(list, item) {
  var updatedList = list;
  if (item !== "") {
    var index = updatedList.indexOf(item)
    if (index > -1) {
      updatedList[index] = ""
    }
  }
  return CleanUpFilterList(updatedList);
}