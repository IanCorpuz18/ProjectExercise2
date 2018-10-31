
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/homeScreen'
import LoginScreen from './screens/loginScreen'
import Signup1 from './screens/signupScreens/Signup1'
import { createStackNavigator } from 'react-navigation'; 

export default class App extends Component{
  render() {
    return (
     <StackNavi/>
    );
  }
}
const StackNavi = createStackNavigator({
    Front : HomeScreen,
    Login : LoginScreen,
    Signup1 : Signup1

});


