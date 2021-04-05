import {
  FETCH_NEW_SONGS_STARTED,
  FETCH_NEW_SONGS_SUCCEEDED,
  FETCH_NEW_SONGS_FAILED,
} from '../types';

import { getSongsService } from '../../../services/songServices';
import FetchActions from '../../utils/FetchActions';

export default ({ page, limit }) => async (dispatch) => {
  dispatch(FetchActions.fetchStarted(FETCH_NEW_SONGS_STARTED));
  const response = await getSongsService(
    `/songs/new?page=${page}&limit=${limit}`,
  );
  if (response.error)
    dispatch(
      FetchActions.fetchFailed(FETCH_NEW_SONGS_FAILED, response.message),
    );
  else dispatch(FetchActions.fetchSucceeded(FETCH_NEW_SONGS_SUCCEEDED, response));
};
