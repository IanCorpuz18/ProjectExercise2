
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomButton from '../assets/components/customButton'
 class HomeScreen extends Component{
    static navigationOptions = {
        header:null
    };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
         Welcome to Ting
        </Text>
        
        <CustomButton  color="white" textColor={{color:"#00A795"}} onPress={() => this.props.navigation.navigate('Login')}>Login</CustomButton>
        <Text></Text>
        <CustomButton  color="transparent" onPress={() => this.props.navigation.navigate('Signup1')} >Sign Up</CustomButton>
     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#00A795',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'left',
    margin: 10,
    color:"white"
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
export default HomeScreen;