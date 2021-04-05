import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
      View, 
      StyleSheet,
      Text,
} from 'react-native';
import SongComponent from '../../components/songs/songComponent';
import { fetchSong } from '../../../redux/songs/index';

export default (props) => {
  const { route } = props;

  const songInfoStore = useSelector(store => store.songInfo);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(fetchSong(route.params.id));
  },[])
  
// console.log("========", songInfoStore);

  const onImgPress = (song) => navigation.push("Song", {
    id: song.id
  });
  
  return (
      <View>
        <SongComponent 
              content = {
                songInfoStore ? songInfoStore : {}
              }
              onImgPress={ onImgPress }
           />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
