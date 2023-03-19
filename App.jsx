/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet
} from 'react-native';
import StackNav from './navigation/Stack.Nav';


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
