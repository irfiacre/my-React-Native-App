import {
  topSongsThisWeekReducer,
  topSongsTodayReducer,
  topSongsReducer,
} from './reducers/topSongsReducer';
import {
  fetchTopSongsThisWeek,
  fetchTopSongsToday,
  fetchTopSongs,
} from './actions/fetchTopSongs';
import { fetchAllSongs, fetchFeaturedSongs } from './actions/fetchAllSongs';
import {
  allSongsReducer,
  featuredSongsReducer,
} from './reducers/allSongsReducer';
import newSongsReducer from './reducers/newSongsReducer';
import fetchNewSongs from './actions/fetchNewSongs';
import songReducer from './reducers/songReducer';
import { fetchSong } from './actions/fetchSong';

const songsReducers = {
    topSongsToday: topSongsTodayReducer,
    topSongsThisWeek: topSongsThisWeekReducer,
    allSongs: allSongsReducer,
    newSongs: newSongsReducer,
    topSongs: topSongsReducer,
    songInfo: songReducer,
}


export {
  fetchTopSongsThisWeek,
  fetchTopSongsToday,
  fetchAllSongs,
  fetchNewSongs,
  fetchTopSongs,
  fetchSong,
  fetchFeaturedSongs,
  songsReducers,
};
