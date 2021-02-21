import React from 'react';
import { FlatList} from 'react-native';
import ListItem from './ListItem';

export default (props) => {
const { items } = props;
  return (
      <FlatList 
        data={items} 
        renderItem={({ item })=>(<ListItem item={ item } />)} 
        keyExtractor={item => item.id}
      />
  );
};
