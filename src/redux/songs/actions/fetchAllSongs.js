import {
  FETCH_ALL_SONGS_STARTED,
  FETCH_ALL_SONGS_SUCCEEDED,
  FETCH_ALL_SONGS_FAILED,
  FETCH_FEATURED_SONGS_STARTED,
  FETCH_FEATURED_SONGS_SUCCEEDED,
  FETCH_FEATURED_SONGS_FAILED,
} from '../types';
import { getSongsService } from '../../../services/songServices';
import FetchActions from '../../utils/FetchActions';

const fetchAllSongs = ({ page, limit }) => async (dispatch) => {
  dispatch(FetchActions.fetchStarted(FETCH_ALL_SONGS_STARTED));
  const response = await getSongsService(`/songs?page=${page}&limit=${limit}`);
  if (response.error)
    dispatch(
      FetchActions.fetchFailed(FETCH_ALL_SONGS_FAILED, response.message),
    );
  else
    dispatch(FetchActions.fetchSucceeded(FETCH_ALL_SONGS_SUCCEEDED, response));
};

const fetchFeaturedSongs = ({ page, limit }) => async (dispatch) => {
  dispatch(FetchActions.fetchStarted(FETCH_FEATURED_SONGS_STARTED));
  const response = await getSongsService(
    `/songs/featured?page=${page}&limit=${limit}`,
  );
  if (response.error)
    dispatch(
      FetchActions.fetchFailed(FETCH_FEATURED_SONGS_FAILED, response.message),
    );
  else
    dispatch(
      FetchActions.fetchSucceeded(FETCH_FEATURED_SONGS_SUCCEEDED, response),
    );
};

export { fetchAllSongs, fetchFeaturedSongs };
