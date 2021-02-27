import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from '../screens/SongsScreen';
import AddItemScreen from '../screens/AddItemsScreen';

export default ()=> {
  const Stack = createStackNavigator();

  return (
       <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' >
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='AddItem' component={AddItemScreen} />
        </Stack.Navigator>
       </NavigationContainer>
  );
}
