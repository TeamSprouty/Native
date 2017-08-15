import {OBTAINED_EMAIL, AUTHORIZED_USER} from '../constants/ActionTypes';
import fetchAuthedUser from '../api/api';

export function addEmail(userEmail) {
  return {
    type: OBTAINED_EMAIL,
    userEmail
  };
}

export function authUser(user) {
  let { email, password} = user;
  return {
    type: AUTHORIZED_USER,
    user: fetchAuthedUser({email,password})
  }
}

