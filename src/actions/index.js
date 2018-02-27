import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=brianpja';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export const ADD_POST = 'add_post';

export function addPost(obj, callback) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, obj)
    .then(() => {
      callback();
    })

  return {
    type: ADD_POST,
    payload: request
  };
}
