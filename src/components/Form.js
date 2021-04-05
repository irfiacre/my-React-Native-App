import React, { useState } from 'react';
import { View, Button, StyleSheet, TextInput } from 'react-native';

const style = StyleSheet.create({
    form:{
        padding:15,
    },
    textInput:{
        height: 50,
        borderColor: 'gray',
        borderRadius:5,
        borderWidth:1,
        paddingHorizontal: 10,
        margin:10,
    }
});

export default (props) => {
  const {
    onSubmit,
    defaultValues,
    navigation,
  } = props;
  
  const [formState, setFormState] = useState({
    name:'',
    price:0,
  });
  
  const onChangeName = (text) => setFormState({
    ...formState,
    name: text
  });
  const onChangePrice = (amount) => setFormState({
    ...formState,
    price: amount
  });
  
  const onFormSubmit = () =>{ 
    onSubmit(formState);
    return navigation.navigate('Home');
  } ;
  
  return (
        <View style={style.form}>
          <TextInput
              style={ style.textInput }
              onChangeText={text => onChangeName(text)}
              defaultValue={ defaultValues?defaultValues.name:'' }
              autoFocus
              autoCorrect
              placeholder='Item Name ....'
            />
            
            <TextInput
              style={style.textInput}
              onChangeText={text => onChangePrice(text)}
              defaultValue={ defaultValues?defaultValues.price:'' }
              autoCorrect
              placeholder='Item Price....'
            />
            
             <Button 
                title="Add Item" 
                onPress={onFormSubmit} 
                style={ {
                      paddingTop: 20,
                      paddingLeft: 30,
                      paddingRight: 30,
                      height: 50,
                      width: 100,
                      color: "green",
                  } }
            />
        </View>
  );
};
