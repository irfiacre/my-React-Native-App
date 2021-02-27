import React from 'react';
import { 
      View, 
      StyleSheet,
      Text, 
      ScrollView
} from 'react-native';
import AllSongsContainer from '../views/containers/songs/AllSongs';
import TopSongsContainer from '../views/containers/songs/TopSongs';
import NewSongsContainer from '../views/containers/songs/NewSongs';

export default (props) => {
  
  return (
      <ScrollView style={styles.container} >
      
        <View style={styles.container} >
            <Text style={styles.title}> Top Songs </Text>
            <TopSongsContainer {...props} />
        </ View>
        
        <View style={styles.container} >
            <Text style={styles.title}> New Songs </Text>
            <NewSongsContainer {...props} />
        </ View>
        
        <View style={styles.container} >
            <Text style={styles.title}> All Songs </Text>
            <AllSongsContainer {...props} />
        </ View>
        
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  title:{
    fontSize: 24,
  },
});
