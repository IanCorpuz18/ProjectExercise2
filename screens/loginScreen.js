
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
TextInput
} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import { Header, Left, Right, Icon } from 'native-base'
class LoginScreen extends Component {
    static navigationOptions = {
        header:null
    };
    state={
        email:'',
        pass:''
    }
inputEmail=(val) =>{
this.setState({name:val})

}
inputPass=(val) =>{
    this.setState({name:val})
    
    }
    render() {
        return (
            <View style={{flex:1, backgroundColor:"#00A795"}}>
            <Header style={{ backgroundColor:"#00A795"}}>
            <Left style={{ marginLeft: "-40%" }}>
                <Icons name='ios-arrow-dropleft' size={40}  style={{ paddingRight: 50 }}
                    onPress={() => this.props.navigation.goBack()} />
            </Left>
        </Header> 
   
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Login
        </Text>
                <Text>Email </Text>
                <TextInput  />
            </View>
            </View>
          
    );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#00A795'
    },
    welcome: {
        fontSize: 20,
        // textAlign: 'center',
        margin: 10,
        color: "black"
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default LoginScreen;