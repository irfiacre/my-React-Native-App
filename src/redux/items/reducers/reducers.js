import {
  GET_ITEMS,
} from '../types';

const initialState = {
  loading: false,
  data: { results: [] },
  error: null,
};

export const allItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ITEMS}_PENDING`:
      return { ...state, error: null, loading: true };

    case `${GET_ITEMS}_FULFILLED`:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case `${GET_ITEMS}_REJECTED`:
      return {
        ...state,
        loading: false,
        data: null,
        error: `${action.payload}`,
      };
    default:
      return state;
  }
};
