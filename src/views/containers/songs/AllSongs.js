import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
      View, 
      StyleSheet,
      Text,
} from 'react-native';
import ImageListComponent from '../../components/Lists/ImageList';
import { fetchAllSongs } from '../../../redux/songs/index';

export default (props) => {
  const { navigation } = props;
  const [ songsState, setSongsState ] = useState({
   songs: []
  });

  const allSongsStore = useSelector( store => store.allSongs );
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch( fetchAllSongs({  page: 1, limit:48 }) );
  },[])
  
  const onImgPress = (song) => navigation.push("Song", {
    id: song.id
  });
  const onIconPress = (song) => console.log(">>>>>", song);
  
  return (
      <View>
         <ImageListComponent 
            data = {
              allSongsStore.data.results ? allSongsStore.data.results : []
            }
            onImgPress={ onImgPress }
            onIconPress={ onIconPress }
            wrap
            numberOfColumns={2}
         />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
