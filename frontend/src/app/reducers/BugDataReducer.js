import {INVALIDATE_BUG_DATA, REQUEST_BUG_DATA,
RECEIVE_BUG_DATA, FETCH_BUG_DATA_ERROR,
POST_BUG_DATA_REQUEST, POST_BUG_DATA_ERROR,
QUERY_BUG_DATA_REQUEST, RECEIVE_FILTERED_BUG_DATA,
FILTERED_RESULTS_NOT_FOUND, QUERY_BUG_DATA_ERROR,
INVALIDATE_RESULTS_NOT_FOUND} from './../actions/BugDataActions'

const initialState = {
  isFetching: false,
  fetched: false,
  filtered: false,
  didInvalidate: false,
  resultsNotFound: false,
  fetchingErr: null,
  postBugDataErr: null,
  queryBugDataErr: null,
  lastUpdated: null,
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

      case POST_BUG_DATA_ERROR:
        return Object.assign({}, state, {
          isFetching: false,
          postBugDataErr: action.message
      })

      case QUERY_BUG_DATA_REQUEST:
        return Object.assign({}, state, {
          didInvalidate: false,
          isFetching: true,
          fetched: false,
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

      case QUERY_BUG_DATA_ERROR:
        return Object.assign({}, state, {
          isFetching: false,
          queryBugDataErr: action.message
      })

      default:
        return state
    }
}

export default bugDataReducer
