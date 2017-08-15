import * as types from '../constants/ActionTypes';

const initialState = {
  first_name: null,
  last_name: null,
  email: null,
  profile_pic: null,
  rating: null
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case types.OBTAINED_EMAIL:
      return Object.assign({}, state, {
        email: action.userEmail,
      });

    default:
      return state;
  }
}