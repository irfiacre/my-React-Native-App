import { FET_ARTIST_SONGS } from '../types';

const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FET_ARTIST_SONGS:
      return action;
    default:
      return state;
  }
};
