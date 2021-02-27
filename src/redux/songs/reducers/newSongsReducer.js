import {
  FETCH_NEW_SONGS_STARTED,
  FETCH_NEW_SONGS_SUCCEEDED,
  FETCH_NEW_SONGS_FAILED,
} from '../types';

const initialState = {
  loading: false,
  error: false,
  data: { results: [] },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEW_SONGS_STARTED:
      return { ...state, loading: true, error: false };
    case FETCH_NEW_SONGS_SUCCEEDED:
      return {
        ...initialState,
        data: {
          ...action.payload,
          results: [...state.data.results, ...action.payload.results],
        },
      };
    case FETCH_NEW_SONGS_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
        message: action.message,
      };
    default:
      return state;
  }
};
