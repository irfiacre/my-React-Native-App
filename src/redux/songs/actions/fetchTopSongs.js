import {
  FETCH_DAY_SONGS_STARTED,
  FETCH_DAY_SONGS_SUCCEEDED,
  FETCH_DAY_SONGS_FAILED,
  FETCH_WEEK_SONGS_STARTED,
  FETCH_WEEK_SONGS_SUCCEEDED,
  FETCH_WEEK_SONGS_FAILED,
  FETCH_TOP_SONGS_STARTED,
  FETCH_TOP_SONGS_SUCCEEDED,
  FETCH_TOP_SONGS_FAILED,
} from '../types';

import { getSongsService } from '../../../services/songServices';
import FetchActions from '../../utils/FetchActions';

export const fetchTopSongsToday =  ({ page, limit }) => async (dispatch) => {
  dispatch(FetchActions.fetchStarted(FETCH_DAY_SONGS_STARTED));
  const response = await getSongsService(
    `/trendings/songs/day?page=${page}&limit=${limit}`,
  );
  if (response.error)
    dispatch(
      FetchActions.fetchFailed(FETCH_DAY_SONGS_FAILED, response.message),
    );
  else dispatch(FetchActions.fetchSucceeded(FETCH_DAY_SONGS_SUCCEEDED, response));
};

export const fetchTopSongsThisWeek =  ({ page, limit }) => async (dispatch) => {
  dispatch(FetchActions.fetchStarted(FETCH_WEEK_SONGS_STARTED));
  const response = await getSongsService(
    `/trendings/songs/week?page=${page}&limit=${limit}`,
  );
  if (response.error)
    dispatch(
      FetchActions.fetchFailed(FETCH_WEEK_SONGS_FAILED, response.message),
    );
  else dispatch(FetchActions.fetchSucceeded(FETCH_WEEK_SONGS_SUCCEEDED, response));
};

export const fetchTopSongs =  ({ page, limit }) => async (dispatch) => {
  dispatch(FetchActions.fetchStarted(FETCH_TOP_SONGS_STARTED));
  const response = await getSongsService(
    `/trendings/songs?page=${page}&limit=${limit}`,
  );
  if (response.error)
    dispatch(
      FetchActions.fetchFailed(FETCH_TOP_SONGS_FAILED, response.message),
    );
  else dispatch(FetchActions.fetchSucceeded(FETCH_TOP_SONGS_SUCCEEDED, response));
};
