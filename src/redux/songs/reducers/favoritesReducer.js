import { FETCH_MOST_PLAYED, FETCH_FAVORITE_SONGS } from '../types';

const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOST_PLAYED:
      return action;
    case FETCH_FAVORITE_SONGS:
      return action;
    default:
      return state;
  }
};
