import {OBTAINED_EMAIL} from '../constants/ActionTypes';

export function addEmail(userEmail) {
  return {
    type: OBTAINED_EMAIL,
    userEmail
  };
}