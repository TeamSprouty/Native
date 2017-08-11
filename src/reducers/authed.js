import * as types from '../constants/ActionTypes';

const initialState = {
  accessToken: null,
  plants: [],
  user: null,
  likedPlants:[],
};

export default function authed(state = initialState, action) {
  switch (action.type) {
    case types.RECEIVE_ACCESS_TOKEN:
      return Object.assign({}, state, {
        accessToken: action.accessToken,
      });

    case types.RECEIVE_AUTHED_USER:
      return Object.assign({}, state, {
        user: action.user,
      });

    case types.RECEIVE_AUTHED_PLANTS:
      return Object.assign({}, state, {
        plants: action.plants,
      });

    case types.RECEIVE_LIKED_PLANTS:
      return Object.assign({}, state, {
        likedPlants: action.likedPlants,
      });

    default:
      return state;
  }
}
