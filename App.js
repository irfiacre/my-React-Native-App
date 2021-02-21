import React, { useState } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from './src/screens/HomeScreen';
import AddItemScreen from './src/screens/AddItemsScreen';
import randomId from './src/helpers/RandomId'

export default function App() {
  const Stack = createStackNavigator();
    const [items, setItems] = useState([]);
    
    const addItems =(data) => setItems(
      items.concat({ 
                id:randomId(),
                text: data.name,
                price: data.price,
      }));
    
    const removeItem = (id) => setItems( items.filter((elt)=> elt.id !== id) );
    
    const homeScreen = (props) => <HomeScreen items = { items } deleteItem={removeItem} { ...props } />
    const addItemScreen = (props) => <AddItemScreen addItems = { addItems } { ...props } />

  return (
       <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' >
          <Stack.Screen name='Home' component={homeScreen} />
          <Stack.Screen name='AddItem' component={addItemScreen} />

        </Stack.Navigator>
       </NavigationContainer>
  );
}
