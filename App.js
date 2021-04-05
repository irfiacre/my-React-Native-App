import * as React from 'react';
import {
  DefaultTheme,
  Provider as PaperProvider
} from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
// import BottomNavigation from './src/routes/BottomNavigation';
import Navigation from './src/routes/index';
import configureStore from './src/redux/configureStore';
import {
    StyleSheet,
    StatusBar,
    Platform,
} from 'react-native';

const store = configureStore();

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#fff',
    accent: '#1976D2',
  },
};

const style = StyleSheet.create({
    container : { 
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
});


 const App =()=> {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <Navigation style={style.container} />
      </PaperProvider>
    </StoreProvider>
  );
}

export default App;
