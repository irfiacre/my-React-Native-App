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

const initialState = {
  loading: false,
  error: false,
  data: { results: [] },
};

export const topSongsTodayReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DAY_SONGS_STARTED:
      return { ...state, loading: true, error: false };
    case FETCH_DAY_SONGS_SUCCEEDED:
      return {
        ...initialState,
        data: {
          ...action.payload,
          results: [...state.data.results, ...action.payload.results],
        },
      };
    case FETCH_DAY_SONGS_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
        message: action.message,
        data: action.message.includes('Failed connecting to the server')?{
          results: [
            {
              id: 13112,
             defaultData:true,
 name: "It's Love",
              artistName: 'Marina',
              audioUrl: 'https://inyarwanda.com/app/webroot/img/201902/audios/392201550499553.mp3',     
              imageUrl: 'https://inyarwanda.com/app/webroot/img/201902/artists/1550499553its-love.jpeg',
              genre: 'RNB',
              genreId: 19,
              otherArtists: [],
              songTags: [],
              artistId: 10313,
              plays: 1218
            },
            {
              id: 13360,
              name: 'In Love',
              artistName: 'Belysa Keller ',
              audioUrl: 'https://inyarwanda.com/app/webroot/img/202009/audios/824951600437372.mpeg',
              imageUrl: 'https://inyarwanda.com/app/webroot/img/202009/artists/1600437372in-love.jpeg',
              genre: 'RNB',
              genreId: 19,
              otherArtists: [],
              songTags: [],
              artistId: 10662,
              plays: null
            },
            {
              id: 13343,
              name: 'Forever by Faustin',
              artistName: 'Faustin',
              audioUrl: 'https://inyarwanda.com/app/webroot/img/202001/audios/37151579188128.mp3',
              imageUrl: 'https://inyarwanda.com/app/webroot/img/202001/artists/1579188128forever-by-faustin.jpeg',
              genre: 'RNB',
              genreId: 19,
              otherArtists: [],
              songTags: [],
              artistId: 10639,
              plays: null
            },
            {
              id: 13365,
             defaultData:true,
 name: "Igisobanuro Cy'Urukundo",
              artistName: 'Kantor',
              audioUrl: 'https://inyarwanda.com/app/webroot/img/202010/audios/137881601883365.mp3',
              imageUrl: 'https://inyarwanda.com/app/webroot/img/202010/artists/1601883742igisobanuro-cyurukundo.jpeg',
              genre: 'RNB',
              genreId: 19,
              otherArtists: [],
              songTags: [],
              artistId: 10658,
              plays: 392
            },
            {
              id: 13124,
              name: 'Mbe uwo wifuza',
              artistName: 'Grace de Jesus',
              audioUrl: 'https://inyarwanda.com/app/webroot/img/201902/audios/69071551257372.mp3',
              imageUrl: 'https://inyarwanda.com/app/webroot/img/201902/artists/1551257372mbe-uwo-wifuza.jpeg',
              genre: 'Izihimbaza Imana',
              genreId: 71,
              otherArtists: [],
              songTags: [],
              artistId: 10586,
              plays: null
            },
            {
              id: 13362,
              name: 'Mbakumbuze u Rwanda ',
              artistName: 'Mugunga Christian',
              audioUrl: 'https://inyarwanda.com/app/webroot/img/202009/audios/705371600779241.mp3',
              imageUrl: 'https://inyarwanda.com/app/webroot/img/202009/artists/1600779241mbakumbuze-u-rwanda.jpeg',
              genre: 'Gakondo',
              genreId: 70,
              otherArtists: [],
              songTags: [],
              artistId: 10663,
              plays: null
            },
          ],
        }:{
          results: []
        },
      };
    default:
      return state;
  }
};

export const topSongsThisWeekReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEEK_SONGS_STARTED:
      return { ...state, loading: true, error: false };
    case FETCH_WEEK_SONGS_SUCCEEDED:
      return {
        ...initialState,
        data: {
          ...action.payload,
          results: [...state.data.results, ...action.payload.results],
        },
      };
    case FETCH_WEEK_SONGS_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
        message: action.message,
        data: action.message.includes('Failed connecting to the server') ? {
          results: [
            {
              id: 2795,
              name: 'Abisi',
              artistName: 'Naason',
              audioUrl: 'https://inyarwanda.com/app/webroot/img/audios/Abisi.mp3',
              imageUrl: 'No image URL',
              genre: 'RNB',
              genreId: 19,
              otherArtists: [],
              songTags: [],
              artistId: 915,
              plays: null
            },
            {
              id: 13358,
              name: 'Queens Cypher',
              artistName: 'THE PINK',
              audioUrl: 'https://inyarwanda.com/app/webroot/img/202009/audios/23471599396886.mp3',
              imageUrl: 'https://inyarwanda.com/app/webroot/img/202009/artists/1599396886queens-cypher.jpeg',
              genre: 'Izihimbaza Imana',
              genreId: 71,
              otherArtists: [],
              songTags: [],
              artistId: 10041,
              plays: null
            },
            {
              id: 11338,
              name: 'Wibagirwa vuba',
              artistName: 'Charly&Nina',
              audioUrl: 'https://inyarwanda.com/app/webroot/img/audios/1428924844_charly__nina___wibagirwa_vuba_prod.mp3',
              imageUrl: 'No image URL',
              genre: 'RNB',
              genreId: 19,
              otherArtists: [],
              songTags: [],
              artistId: 2284,
              plays: null
            },
            {
              id: 1798,
              name: 'Ubanza ngukunda',
              artistName: 'Meddy',
              audioUrl: 'https://inyarwanda.com/app/webroot/img/audios/Ubanza ngukunda.mp3',
              imageUrl: 'No image URL',
              genre: 'RNB',
              genreId: 19,
              otherArtists: [],
              songTags: [],
              artistId: 199,
              plays: null
            },
          ],
        }: {
          results: []
        },
      };
    default:
      return state;
  }
};

export const topSongsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOP_SONGS_STARTED:
      return { ...state, loading: true, error: false };
    case FETCH_TOP_SONGS_SUCCEEDED:
      return {
        ...initialState,
        data: {
          ...action.payload,
          results: [...state.data.results, ...action.payload.results],
        },
      };
    case FETCH_TOP_SONGS_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
        message: action.message,
        payload: {
          results: [
            {
              id: 13343,
              name: 'Forever by Faustin',
              artistName: 'Faustin',
              audioUrl: 'https://inyarwanda.com/app/webroot/img/202001/audios/37151579188128.mp3',
              imageUrl: 'https://inyarwanda.com/app/webroot/img/202001/artists/1579188128forever-by-faustin.jpeg',
              genre: 'RNB',
              genreId: 19,
              otherArtists: [],
              songTags: [],
              artistId: 10639,
              plays: null
            },
            {
              id: 13365,
              defaultData:true,
              name: "Igisobanuro Cy'Urukundo",
              artistName: 'Kantor',
              audioUrl: 'https://inyarwanda.com/app/webroot/img/202010/audios/137881601883365.mp3',
              imageUrl: 'https://inyarwanda.com/app/webroot/img/202010/artists/1601883742igisobanuro-cyurukundo.jpeg',
              genre: 'RNB',
              genreId: 19,
              otherArtists: [],
              songTags: [],
              artistId: 10658,
              plays: 392
            },
            {
              id: 13124,
              name: 'Mbe uwo wifuza',
              artistName: 'Grace de Jesus',
              audioUrl: 'https://inyarwanda.com/app/webroot/img/201902/audios/69071551257372.mp3',
              imageUrl: 'https://inyarwanda.com/app/webroot/img/201902/artists/1551257372mbe-uwo-wifuza.jpeg',
              genre: 'Izihimbaza Imana',
              genreId: 71,
              otherArtists: [],
              songTags: [],
              artistId: 10586,
              plays: null
            },
            {
              id: 13362,
              name: 'Mbakumbuze u Rwanda ',
              artistName: 'Mugunga Christian',
              audioUrl: 'https://inyarwanda.com/app/webroot/img/202009/audios/705371600779241.mp3',
              imageUrl: 'https://inyarwanda.com/app/webroot/img/202009/artists/1600779241mbakumbuze-u-rwanda.jpeg',
              genre: 'Gakondo',
              genreId: 70,
              otherArtists: [],
              songTags: [],
              artistId: 10663,
              plays: null
            },
          ],
        },
      };
    default:
      return state;
  }
};
