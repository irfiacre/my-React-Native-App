import {
  FETCH_ALL_SONGS_STARTED,
  FETCH_ALL_SONGS_SUCCEEDED,
  FETCH_ALL_SONGS_FAILED,
  FETCH_FEATURED_SONGS_STARTED,
  FETCH_FEATURED_SONGS_SUCCEEDED,
  FETCH_FEATURED_SONGS_FAILED,
} from '../types';

const initialState = {
  loading: false,
  error: false,
  data: { results: [] },
};

export const allSongsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_SONGS_STARTED:
      return { ...state, loading: true, error: false };
    case FETCH_ALL_SONGS_SUCCEEDED:
      return {
        ...initialState,
        data: {
          ...action.payload,
          results: state.data.results.concat(action.payload.results),
        },
      };
    case FETCH_ALL_SONGS_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
        message: action.message,
        data: action.message.includes('Failed connecting to the server')
          ? {
              results:
                state.data.results.length > 0
                  ? state.data.results
                  : [
                      {
                        id: 13365,
                        defaultData: true,
                        name: "Igisobanuro Cy'Urukundo",
                        artistName: 'Kantor',
                        audioUrl:
                          'https://inyarwanda.com/app/webroot/img/202010/audios/137881601883365.mp3',
                        imageUrl:
                          'https://inyarwanda.com/app/webroot/img/202010/artists/1601883742igisobanuro-cyurukundo.jpeg',
                        genre: 'RNB',
                        genreId: 19,
                        otherArtists: [],
                        songTags: [],
                        artistId: 10658,
                        plays: 392,
                      },
                      {
                        id: 13124,
                        name: 'Mbe uwo wifuza',
                        artistName: 'Grace de Jesus',
                        audioUrl:
                          'https://inyarwanda.com/app/webroot/img/201902/audios/69071551257372.mp3',
                        imageUrl:
                          'https://inyarwanda.com/app/webroot/img/201902/artists/1551257372mbe-uwo-wifuza.jpeg',
                        genre: 'Izihimbaza Imana',
                        genreId: 71,
                        otherArtists: [],
                        songTags: [],
                        artistId: 10586,
                        plays: null,
                      },
                      {
                        id: 13362,
                        name: 'Mbakumbuze u Rwanda ',
                        artistName: 'Mugunga Christian',
                        audioUrl:
                          'https://inyarwanda.com/app/webroot/img/202009/audios/705371600779241.mp3',
                        imageUrl:
                          'https://inyarwanda.com/app/webroot/img/202009/artists/1600779241mbakumbuze-u-rwanda.jpeg',
                        genre: 'Gakondo',
                        genreId: 70,
                        otherArtists: [],
                        songTags: [],
                        artistId: 10663,
                        plays: null,
                      },
                      {
                        id: 2795,
                        name: 'Abisi',
                        artistName: 'Naason',
                        audioUrl:
                          'https://inyarwanda.com/app/webroot/img/audios/Abisi.mp3',
                        imageUrl: 'No image URL',
                        genre: 'RNB',
                        genreId: 19,
                        otherArtists: [],
                        songTags: [],
                        artistId: 915,
                        plays: null,
                      },
                    ],
            }
          : {
              results: [],
            },
      };
    default:
      return state;
  }
};

export const featuredSongsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FEATURED_SONGS_STARTED:
      return { ...state, loading: true, error: false };
    case FETCH_FEATURED_SONGS_SUCCEEDED:
      return {
        ...initialState,
        loading:false,
        data: {
          ...action.payload,
          results: state.data.results.concat(action.payload.results),
        },
      };
    case FETCH_FEATURED_SONGS_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
        message: action.message,
        data: action.message.includes('Failed connecting to the server')
          ? {
              results:
                state.data.results.length > 0
                  ? state.data.results
                  : [
                      {
                        id: 13365,
                        defaultData: true,
                        name: "Igisobanuro Cy'Urukundo",
                        artistName: 'Kantor',
                        audioUrl:
                          'https://inyarwanda.com/app/webroot/img/202010/audios/137881601883365.mp3',
                        imageUrl:
                          'https://inyarwanda.com/app/webroot/img/202010/artists/1601883742igisobanuro-cyurukundo.jpeg',
                        genre: 'RNB',
                        genreId: 19,
                        otherArtists: [],
                        songTags: [],
                        artistId: 10658,
                        plays: 392,
                      },
                      {
                        id: 13124,
                        name: 'Mbe uwo wifuza',
                        artistName: 'Grace de Jesus',
                        audioUrl:
                          'https://inyarwanda.com/app/webroot/img/201902/audios/69071551257372.mp3',
                        imageUrl:
                          'https://inyarwanda.com/app/webroot/img/201902/artists/1551257372mbe-uwo-wifuza.jpeg',
                        genre: 'Izihimbaza Imana',
                        genreId: 71,
                        otherArtists: [],
                        songTags: [],
                        artistId: 10586,
                        plays: null,
                      },
                      {
                        id: 13362,
                        name: 'Mbakumbuze u Rwanda ',
                        artistName: 'Mugunga Christian',
                        audioUrl:
                          'https://inyarwanda.com/app/webroot/img/202009/audios/705371600779241.mp3',
                        imageUrl:
                          'https://inyarwanda.com/app/webroot/img/202009/artists/1600779241mbakumbuze-u-rwanda.jpeg',
                        genre: 'Gakondo',
                        genreId: 70,
                        otherArtists: [],
                        songTags: [],
                        artistId: 10663,
                        plays: null,
                      },
                      {
                        id: 2795,
                        name: 'Abisi',
                        artistName: 'Naason',
                        audioUrl:
                          'https://inyarwanda.com/app/webroot/img/audios/Abisi.mp3',
                        imageUrl: 'No image URL',
                        genre: 'RNB',
                        genreId: 19,
                        otherArtists: [],
                        songTags: [],
                        artistId: 915,
                        plays: null,
                      },
                    ],
            }
          : {
              results: [],
            },
      };
    default:
      return state;
  }
};
