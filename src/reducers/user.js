import * as types from '../constants/ActionTypes';

const initialState = {
  first_name: null,
  last_name: null,
  email: null,
  profile_pic: null,
  rating: null,
  accessToken: null
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case types.OBTAINED_EMAIL:
      return Object.assign({}, state, {
        email: action.userEmail,
      });
    case types.AUTHORIZED_USER:
      return Object.assign({}, state, {
        user: action.user
      });
    default:
      return state;
  }
}