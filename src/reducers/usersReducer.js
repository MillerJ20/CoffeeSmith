import * as types from '../constants/actionTypes';

const defaultState = {
  user: {}
}

const usersReducer = (state = defaultState, action) => {
  let user;

  switch (action.type) {
    case types.LOGIN_USER: {
      user = user.assign(action.payload)
      return {
        ...state,
        user
      }

    }
    default: {
      return state
    }
  }
}

export default usersReducer;