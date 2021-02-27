import {
  FETCH_SONG_STARTED,
  FETCH_SONG_SUCCEEDED,
  FETCH_SONG_FAILED,
} from '../types';
import { getSongsService } from '../../../services/songServices';
import FetchActions from '../../utils/FetchActions';

const fetchSong = (songId) => async (dispatch) => {
  dispatch(FetchActions.fetchStarted(FETCH_SONG_STARTED));
  const response = await getSongsService(`/songs/${songId}`);
  if (response.error)
    dispatch(
      FetchActions.fetchFailed(FETCH_SONG_FAILED, response.message),
    );
  else
    dispatch(FetchActions.fetchSucceeded(FETCH_SONG_SUCCEEDED, response));
};

export { fetchSong };
