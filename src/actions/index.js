import { UPDATE_LIST, UPDATE_FILTERED_LIST, UPDATE_FETCH_STATUS, UPDATE_FETCH_ERROR} from '../constants/actions'

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
