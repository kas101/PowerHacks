import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet
} from 'react-native';
import { enableLatestRenderer } from 'react-native-maps';
import StackNav from './navigation/Stack.Nav';

enableLatestRenderer();


function App() {


  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;
