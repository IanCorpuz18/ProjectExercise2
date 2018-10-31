
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Signup1Screen extends Component{
    static navigationOptions = {
        header:null
    };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Signup
        </Text>
      
        <Icon name="ios-arrow-dropright" size={100}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00A795',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Signup1Screen;