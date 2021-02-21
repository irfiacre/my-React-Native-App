import React, { useState } from 'react';
import { 
      View, 
      StyleSheet,
      StatusBar,
      Platform,
      Button,
} from 'react-native';
import Header from '../components/Header';
import ListItems from '../components/ListItems';
import randomId from '../helpers/RandomId'

export default (props) => {
  const { items,navigation }= props;
  return (
      <View style={styles.container} >
        <Header title='Shopping List' />
        <ListItems items={ items } />
        <Button 
            title="Add New Items" 
            onPress={()=> navigation.navigate('AddItem') } 
            style={ {
                  paddingTop: 20,
                  paddingLeft: 30,
                  paddingRight: 30,
                  color: "green",
              } }
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
//   button: {
//       paddingTop: 20,
//       paddingLeft: 30,
//       paddingRight: 30,
//       color: "dodgerblue",
//   }
});
