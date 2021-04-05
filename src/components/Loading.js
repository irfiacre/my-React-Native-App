import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

export default ()=> {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size={50} color="#1976D2" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});