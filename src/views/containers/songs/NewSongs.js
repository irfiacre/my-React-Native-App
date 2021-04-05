import React, { useEffect,useState } from 'react';
import { 
      View, 
      StyleSheet,
      Text,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewSongs } from '../../../redux/songs/index';
import ImageListComponent from '../../components/Lists/ImageList';

export default (props) => {
  const { navigation } = props;
  
  const [ songsState, setSongsState ] = useState({
   songs: [
    {
      id: 1,
      name: "Name 1",
      image: "https://picsum.photos/600",
      artistName: "artist Name"
    }, 
    {
      id: 2,
      name: "Name 2",
      image: "https://picsum.photos/500",
      artistName: "artist Name"
    },
    {
      id: 3,
      name: "Name 3",
      image: "https://picsum.photos/650",
      artistName: "artist Name"
    }, {
      id: 4,
      name: "Name 3",
      image: "https://picsum.photos/610",
      artistName: "artist Name"
    }]
  });

  const newSongsStore = useSelector( store => store.newSongs );
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch( fetchNewSongs({  page: 1, limit:12 }) );
  },[]);
  
  const onImgPress = (song) => navigation.push("Song", {
      id: song.id
    });
  const onIconPress = (song) => console.log(">>>>>", song);
  
  // console.log(">>>>>>>>>", newSongsStore.data.results);
  
  return (
      <View>
         <ImageListComponent 
            data = {
              newSongsStore.data.results ? newSongsStore.data.results : []
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
