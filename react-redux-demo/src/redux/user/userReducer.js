import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "./userTypes"

const initialState = {
  loading: false,
  data: [],
  error: ''
}

const reducer = (state = initialState, action) => {
  const {type, payload} = action

  switch (type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      }

    case FETCH_USERS_SUCCESS:
      return {
        ...state.
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

    default:
      return state
  }
}