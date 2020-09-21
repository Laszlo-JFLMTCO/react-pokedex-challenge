export function CleanUpFilterList(list) {
  list = list.filter(listItem => listItem.length > 0)
  return Array.from(new Set(list)).sort();
}