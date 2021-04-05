import {
  GET_ITEMS,
} from '../types';

// import fetchService from '../../../services/fetchService';

export const getAllItems = (data) => async (dispatch) =>
  await dispatch({
    type: GET_ITEMS,
    payload: data,
  });

