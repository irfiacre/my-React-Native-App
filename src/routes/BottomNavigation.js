
import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import SongsScreen from '../screens/SongsScreen';
import AddItemScreen from '../screens/SongDetailsScreen';
import {
  StyleSheet,
  StatusBar,
  Platform,
  ScrollView
} from 'react-native';


const style = StyleSheet.create({
    container:{
      color: "#1976D2",
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    }
});


const MusicRoute = () =>
<ScrollView>
  <SongsScreen /> 
</ScrollView>
;

const ArtistsRoute = () => <AddItemScreen /> ;

const ChartsRoute = () => <Text> Charts </Text>;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'music',
      title: 'Music',
      icon: 'music-box-outline',
      color: "#1976D2",
    },
    {
      key: 'artists',
      title: 'Artists',
      icon: 'account-multiple',
      color: "#1976D2",
    },
    {
      key: 'charts',
      title: 'Charts',
      icon: 'chart-bar',
      color: "#1976D2",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    artists: ArtistsRoute,
    charts: ChartsRoute,  
  });

  return ( 
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      style={ style.container }
      barStyle={{ backgroundColor: '#1976D2' }}
    />
  );
};

export default MyComponent;
