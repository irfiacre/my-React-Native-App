import React from 'react';
import { 
      View, 
      StyleSheet,
} from 'react-native';
import Form from '../components/Form';

import Header from '../components/Header';

export default (props) => {
  const { addItems } = props;  
  
  const onItemSubmit = (data) => addItems(data);
   
  return (
      <View style={styles.container} >
        <Header title='Add New Item' />
        <Form onSubmit={onItemSubmit} {...props} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
      fontFamily: "Roboto"
  },
});
