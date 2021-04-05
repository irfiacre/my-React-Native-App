import React, {useEffect} from 'react';
import { 
      View, 
      StyleSheet,
      Text,
      ScrollView,
      LogBox
} from 'react-native';
import { useSelector } from 'react-redux';
import SongContainer from '../views/containers/songs/songContainer';
import TopSongsContainer from '../views/containers/songs/TopSongs';
import NewSongsContainer from '../views/containers/songs/NewSongs';
import Loading from '../components/Loading';

export default (props) => {
   const songInfoStore = useSelector(store => store.songInfo);
   
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
  
  return (
      <ScrollView style={styles.container} >
       {
      //  songInfoStore.loading ?<Loading /> :
       <View>
          <SongContainer {...props} />       
          <View style={styles.container} >
              <Text style={styles.title}> New Songs You May Like</Text>
              <NewSongsContainer {...props} />
          </ View>
          <View style={styles.container} >
              <Text style={styles.title}>Top Songs</Text>
              <TopSongsContainer {...props} />
          </ View>
        </View>
        }
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  title:{
    fontSize: 24,
    padding: 10,
  },
});
