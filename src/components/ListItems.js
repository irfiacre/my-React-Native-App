import React from 'react';
import { FlatList} from 'react-native';
import ListItem from './ListItem';

export default (props) => {
const { items,deleteItem } = props;

  return (
      <FlatList 
        data={items} 
        renderItem={({ item })=>(<ListItem item={ item } deleteItem={deleteItem} />)} 
        keyExtractor={item => item.id}
      />
  );
};
