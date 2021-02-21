import React from 'react';
import { 
      View, 
      StyleSheet,
      Button,
      Text,
} from 'react-native';
import Header from '../components/Header';
import ListItems from '../components/ListItems';

export default (props) => {
  const {
      items,
      deleteItem,
      navigation
  } = props;
  
  return (
      <View style={styles.container} >
        <Header title='Shopping List' />
        {
            items.length>0?<ListItems 
                items={ items } 
                deleteItem={deleteItem}
            />
            : <Text style={ styles.noItems }> No Shopping Items, Please Add Some </Text>
        }
        <View style={ styles.button }>
            <Button 
                title="Add New Items" 
                onPress={()=> navigation.navigate('AddItem') } 
                color="dodgerblue"
            />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
  fontFamily: "Cochin"
  },
  button: {
      marginLeft:"25%",
      padding: 20,
      width: 200,
      height: 70,
      color: "dodgerblue",
  },
  noItems:{
      fontSize: 16,
      color:"grey",
      marginTop: 20,
      textAlign:'center',
  }
});
