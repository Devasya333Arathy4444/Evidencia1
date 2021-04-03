import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/navegar/Navegador'
import * as Font from 'expo-font';
import {AppLoading} from 'expo'

//Librerias de React.
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';

export default class App extends React.Component {
  state = {
    isFontLoaded:false
  }

//Aqui es para el tipo de letra a utilizar (las fuentes)
  async componentDidMount(){
    await Font.loadAsync({
      'SemiBold' : require('./src/fonts/Montserrat-SemiBold.otf'),
      'Medium' : require('./src/fonts/Montserrat-Medium.otf'),
      'Regular' : require('./src/fonts/Montserrat-Regular.otf')
    });
    this.setState({isFontLoaded:true})
  }

// navegación
  render(){
    return (
      (this.state.isFontLoaded === true) ? (<AppNavigator/>):(AppLoading)
      
    );
  }
 
}

//Estilo de la página
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
