import { UPDATE_LIST, UPDATE_FILTERED_LIST, UPDATE_FETCH_STATUS, UPDATE_FETCH_ERROR, UPDATE_TYPES_LIST, UPDATE_TYPES_CHECKED, UPDATE_WEAKNESSES_LIST, UPDATE_WEAKNESSES_CHECKED, UPDATE_NAMETOCHECK} from '../constants/actions'

export function updateList(payload) {
  return { type: UPDATE_LIST, payload }
}

export function updateFilteredList(payload) {
  return { type: UPDATE_FILTERED_LIST, payload }
}

export function updateFetchStatus(payload) {
  return { type: UPDATE_FETCH_STATUS, payload }
}

export function updateFetchError(payload) {
  return { type: UPDATE_FETCH_ERROR, payload }
}

export function updateTypesList(payload) {
  return { type: UPDATE_TYPES_LIST, payload }
}

export function updateTypesChecked(payload) {
  return { type: UPDATE_TYPES_CHECKED, payload }
}

export function updateWeaknessesList(payload) {
  return { type: UPDATE_WEAKNESSES_LIST, payload }
}

export function updateWeaknessesChecked(payload) {
  return { type: UPDATE_WEAKNESSES_CHECKED, payload }
}

export function updateNameToCheck(payload) {
  return { type: UPDATE_NAMETOCHECK, payload }
}
