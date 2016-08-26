import {INVALIDATE_BUG_DATA, REQUEST_BUG_DATA,
RECEIVE_BUG_DATA, FETCH_BUG_DATA_ERROR, POST_BUG_DATA_REQUEST,
QUERY_BUG_DATA_REQUEST, QUERY_BUG_DATA_BY_ID_REQUEST,
RECEIVE_FILTERED_BUG_DATA, RECEIVE_BUG_DATA_BY_ID,
FILTERED_RESULTS_NOT_FOUND, DELETE_BUG_DATA_BY_ID_REQUEST,
INVALIDATE_RESULTS_NOT_FOUND, RECEIVE_DELETE_BUG_DATA_BY_ID,
INVALIDATE_BUG_DELETED, INVALIDATE_BUG_UPDATED,
UPDATE_BUG_DATA_REQUEST, RECEIVE_UPDATED_BUG_DATA} from './../actions/BugDataActions'

const initialState = {
  isFetching: false,
  fetched: false,
  filtered: false,
  didInvalidate: false,
  resultsNotFound: false,
  fetchingErr: null,
  lastUpdated: null,
  bugdeleted: false,
  bugupdated: false,
  bugs: []
}

const bugDataReducer = (state = initialState, action) => {

    switch(action.type) {

      case INVALIDATE_BUG_DATA:
        return Object.assign({}, state, {
          didInvalidate: true,
      })

      case INVALIDATE_RESULTS_NOT_FOUND:
        return Object.assign({}, state, {
          resultsNotFound: false
      })

      case INVALIDATE_BUG_DELETED:
        return Object.assign({}, state, {
          bugdeleted: false
      })

      case INVALIDATE_BUG_UPDATED:
        return Object.assign({}, state, {
          bugupdated: false
      })

      case REQUEST_BUG_DATA:
        return Object.assign({}, state, {
          didInvalidate: false,
          isFetching: true,
          fetched: false,
          filtered: false,
      })

      case RECEIVE_BUG_DATA:
        return Object.assign({}, state, {
          isFetching: false,
          fetched: true,
          filtered: false,
          bugs: action.payload,
          lastUpdated: action.receivedAt
      })

      case FETCH_BUG_DATA_ERROR:
        return Object.assign({}, state, {
          isFetching: false,
          fetchingErr: action.message
      })

      case POST_BUG_DATA_REQUEST:
        return Object.assign({}, state, {
          isFetching: true,
          fetched: false,
          filtered: false,
          didInvalidate: false,
          resultsNotFound: false,
          bugs: []
      })

      case QUERY_BUG_DATA_REQUEST:
        return Object.assign({}, state, {
          didInvalidate: false,
          isFetching: true,
          fetched: false,
      })

      case QUERY_BUG_DATA_BY_ID_REQUEST:
        return Object.assign({}, state, {
          isFetching: true,
          fetched: false,
          filtered: false,
          didInvalidate: false,
          resultsNotFound: false,
      })

      case DELETE_BUG_DATA_BY_ID_REQUEST:
        return Object.assign({}, state, {
          isFetching: true,
          fetched: false,
          filtered: false,
      })

      case UPDATE_BUG_DATA_REQUEST:
        return Object.assign({}, state, {
          isFetching: true,
          fetched: false,
          filtered: false,
      })

      case RECEIVE_FILTERED_BUG_DATA:
        return Object.assign({}, state, {
          isFetching: false,
          fetched: true,
          filtered: true,
          bugs: action.payload,
          lastUpdated: action.receivedAt
      })

      case FILTERED_RESULTS_NOT_FOUND:
        return Object.assign({}, state, {
          resultsNotFound: true,
          isFetching: false,
          fetched: true
      })

      case RECEIVE_BUG_DATA_BY_ID:
        return Object.assign({}, state, {
          isFetching: false,
          fetched: true,
          filtered: true,
          bugs: action.payload,
          lastUpdated: action.receivedAt
      })

      case RECEIVE_DELETE_BUG_DATA_BY_ID:
        return Object.assign({}, state, {
          bugdeleted: action.deleted
      })

      case RECEIVE_UPDATED_BUG_DATA:
        return Object.assign({}, state, {
          bugupdated: action.updated
      })

      default:
        return state
    }
}

export default bugDataReducer
