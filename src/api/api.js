import request from 'superagent';
import {API_SIGNIN} from './urls';

export default function fetchAuthedUser(credentials) {
    return (
        request
        .post('http://localhost:5050/api/auth/signin')
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(credentials))
        .then(res => {
          console.log(JSON.parse(res.text));
          return res.text;
        })
        .catch(error => console.log(error))
        .done() 
    )
}