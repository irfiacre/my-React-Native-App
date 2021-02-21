import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

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

export default ({ item }) => {

  return (
    <TouchableOpacity style={style.listItem}>
        <View style={style.listItemView}>
          <Text style={style.listItemText}>
            { item.text }: {" "}
          <Text style={style.smallText}>{ item.price } Rwf</Text>
          </Text>
        </View>
    </TouchableOpacity>
  );
};
