import React, { useState } from 'react';
import { 
      View, 
      StyleSheet,
      StatusBar,
      Platform,
} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Header from './src/components/Header';
import HomeScreen from './src/screens/HomeScreen';
import AddItemScreen from './src/screens/AddItemsScreen';
import randomId from './src/helpers/RandomId'

export default function App() {
  const Stack = createStackNavigator();
    const [items, setItems] = useState([{
      id: randomId(),
      text: 'Bananas',
      price: 120,
    }, {
      id: randomId(),
      text: 'Oranges',
      price: 130,
    }, {
      id: randomId(),
      text: 'Tomatoes',
      price: 140,
    }, {
      id: randomId(),
      text: 'Pineapples',
      price: 150,
    }, ]);
    
    const addItems =(data) => setItems({ ...items.concat({ 
              id:randomId(),
              text: data.name,
              price: data.price,
    })});
    
    const homeScreen = (props) => <HomeScreen items = { items } { ...props } />
    const addItemScreen = (props) => <AddItemScreen addItems = { addItems } { ...props } />
    
console.log("=========", items);

  return (
       <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' >
          <Stack.Screen name='Home' component={homeScreen} />
          <Stack.Screen name='AddItem' component={addItemScreen} />

        </Stack.Navigator>
       </NavigationContainer>
  );
}
