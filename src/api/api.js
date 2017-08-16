import request from 'superagent';
import {API_SIGNIN} from './urls';

export default function fetchAuthedUser(credentials) {
    return (
      fetch(API_SIGNIN, {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
      })
      .then(res => {
        return res.json()
        })
      .then(res => res)
      .catch(err => console.log(err))
    );
}