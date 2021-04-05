import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'dodgerblue',
  },
  
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default (props) => {
  return (
    <View style={style.header}>
      <Text style={style.text}>{props.title}</Text>
    </View>
  );
};
