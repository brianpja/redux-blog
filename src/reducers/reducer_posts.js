import _ from 'lodash';
import { FETCH_POSTS } from '../actions/index';
import { ADD_POST } from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      // console.log('posts', action.payload.data);
      const retObj = _.mapKeys(action.payload.data, 'id');
      // console.log('modified', retObj);

      return retObj;

    case ADD_POST:
      console.log(action.payload);
      return action.payload.data;

    default:
      return state;
  }
}
