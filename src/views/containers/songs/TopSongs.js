import React, { useEffect,useState } from 'react';
import { 
      View, 
      StyleSheet,
      Text,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ImageListComponent from '../../components/Lists/ImageList';
import { fetchTopSongs } from '../../../redux/songs/index';

export default (props) => {
  const { navigation } = props;
  const topSongsStore = useSelector( store => store.topSongs );
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch( fetchTopSongs({ page: 1, limit:12 }) );
  },[])
  
  const [ songsState, setSongsState ] = useState({
   songs: []
  });
  
  const onImgPress = (song) => console.log(">>>>>", song);
  const onIconPress = (song) => console.log(">>>>>", song);
  
  return (
      <View>
         <ImageListComponent 
            data={ 
              topSongsStore.data.results?topSongsStore.data.results:[]
            }
            onImgPress={ onImgPress }
            onIconPress={ onIconPress }
            
         />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
