/*
STATE
state = {
  loading: true // this is a loading flag, will help us with loading spinner displayinig in component
  data: [] // initial data will be empty array
  error: '' // if api call fails, error message will be returned to UI
}

ACTIONS
FETCH_USERS_REQUEST - fetch list of users
FETCH_USERS_SUCCESS - fetched successfully
FETCH_USERS_FAILURE - fetch failed

REDUCERS
case: FETCH_USERS_REQUEST
  loading: true
case: FETCH_USERS_SUCCESS
  loading: false,
  users: data (from API)
case: FETCH_USERS_FAILURE
  loading: false,
  error: error (from API)
*/

const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware

// INITIAL STATE
const initialState = {
  loading: false,
  users: [],
  error: ''
}

// ACTION - CONSTANTS
const FETCH_USERS_REQUESTS = 'FETCH_USERS_REQUESTS'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

// ACTION CREATORS
const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUESTS
  }
}

const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}

// REDUCERS
const reducer = (state = initialState, action) => {
  const { type, payload } = action

  switch(type) {
    case FETCH_USERS_REQUESTS:
      return {
        ...state,
        loading: true
      }

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: payload,
        error: ''
      }

    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: payload
      }
  }
}

// action creator returns a function instead of an action
// this function can now perform side effects, eg. async tasks = api fetching for data
// can also dispatch regular actions which will be handled by the reducer
const fetchUsers = () => {
  return function(dispatch) {
    dispatch(fetchUsersRequest()) // will set loading: true
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      // success: response.data = array of users
      const users = response.data.map(user => user.id)
      dispatch(fetchUsersSuccess(users))
    })
    .catch(error => {
      // failure: error.message = description of error
      dispatch(fetchUsersFailure(error.message))
    })
  }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => {
  console.log(store.getState())
})
store.dispatch(fetchUsers())

/*
- axios // requests to an API endpoint
- redux-thunk // define async action creators, middleware
*/