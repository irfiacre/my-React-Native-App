import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SongsScreen from '../screens/SongsScreen';
import SongDetailsScreen from '../screens/SongDetailsScreen';

export default ()=> {
  const Stack = createStackNavigator();

  return (
       <NavigationContainer>
        <Stack.Navigator initialRouteName='All Songs' >
          <Stack.Screen name='All Songs' component={SongsScreen} />
          <Stack.Screen name='Song' component={SongDetailsScreen} />
        </Stack.Navigator>
       </NavigationContainer>
  );
}
