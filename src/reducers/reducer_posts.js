import { FETCH_POSTS } from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log('posts', action.payload)

      return action.payload;

    default:
      return state;
  }

}
