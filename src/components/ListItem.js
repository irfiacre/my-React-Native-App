import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const style = StyleSheet.create({
    listItem:{
        padding:15,
        backgroundColor:'#f8f8f8',
        borderBottomWidth:1,
        borderBottomColor:'#eee',
    },
    listItemView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    listItemText:{
        fontSize: 18,
    },
    smallText: {
      fontSize: 16,
      color:'grey',
    },
});

export default ({ item,deleteItem }) => {

  handleDeleteItem=(item)=>{
    
    Alert.alert("Delete Confirmation", `Do you Want To Delete ${item.text}`, [{
        text: 'Yes',
        onPress: () => deleteItem(item.id),
      },
      {
        text: 'No',
      },
    ])
  }
  
  return (
    <View style={style.listItem}>
        <View style={style.listItemView}>
          <Text style={style.listItemText}>
            { item.text }: {" "}
          <Text style={style.smallText}>{ item.price } Rwf</Text>
          </Text>
          <TouchableOpacity onPress={()=>handleDeleteItem(item)} >
            <MaterialCommunityIcons name="delete" size={24} color="grey" />
          </TouchableOpacity>
          
        </View>
    </View>
  );
};
