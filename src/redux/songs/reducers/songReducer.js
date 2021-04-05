import {
  FETCH_SONG_STARTED,
  FETCH_SONG_SUCCEEDED,
  FETCH_SONG_FAILED,
} from '../types';

const initialState = {
  loading: false,
  error: false,
  data: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SONG_STARTED:
      return { ...state, loading: true, error: false };
    case FETCH_SONG_SUCCEEDED:
    
      return action.payload;
    case FETCH_SONG_FAILED:
      return action.message.includes('Failed connecting to the server') ?
      {
        ...state,
        loading: false,
        error: true,
        message: action.message,
        id: 13112,
        name: "It's Love",
        artistName: 'Marina',
        audioUrl: 'https://inyarwanda.com/app/webroot/img/201902/audios/392201550499553.mp3',
        imageUrl: 'https://inyarwanda.com/app/webroot/img/201902/artists/1550499553its-love.jpeg',
        otherArtists: [],
        songTags: [],
        artistId: 10313,
        plays: 1218,
        defaultData:true
      }:{
        ...state,
        loading: false,
        error: true,
        message: action.message,
      };
    default:
      return state;
  }
};
