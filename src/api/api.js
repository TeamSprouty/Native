import request from 'superagent';
import {API_SIGNIN} from './urls';

export default function fetchAuthedUser(credentials) {
    return (
      request
        .post(API_SIGNIN)
        .set('Content-Type','application/json')
        .send(JSON.stringify(credentials))
        .then(res => {
            console.log(res);
            return JSON.parse(res.text);
        })
        .catch(error => console.log(error))
        .done()
    );
}