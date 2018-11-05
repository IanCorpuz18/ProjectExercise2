
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomIcon from '../../assets/components/CustomIcon';

class Signup3 extends Component{
    static navigationOptions = {
        header:null
    };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          When is Your birthday?
        </Text>
        <Text style={{marginLeft:"10%", color:"white"}}>You must be at least 18 years old to use Ting.</Text>
        <Text style={{marginLeft:"10%", color:"white"}}>Other people won't see your birthday.</Text>
        <Text>  </Text>
        <Text> BIRTHDAY </Text>
        <Text>  </Text>
        <CustomIcon name="ios-arrow-dropright" size={30} onPress={() => this.props.navigation.navigate('Front')}/>
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
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color:"white"
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Signup3;