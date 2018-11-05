
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
import { Header, Left, Right } from 'native-base';
import ShowPass from '../assets/components/showPass';
import CustomIcon from '../assets/components/CustomIcon';
import CustomInput from '../assets/components/customInput';
class LoginScreen extends Component {
    static navigationOptions = {
        header:null
    };
    state={
        email:"",
        pass:""
    }
    
inputEmail=(val) =>{
this.setState({email:val})

}
inputPass=(val) =>{
    this.setState({pass:val})
    
    }
    
    logIn = () =>{
        if(this.state.email==='' && this.state.pass===''){
            alert('Please enter your email and password.')
        }
        else if(this.state.email===''){
            alert('Please enter your email.')
        }
        else if(this.state.pass===''){
          alert('Please enter your password.')
        }
      
        else{
          this.setState({
            email: "",
            pass: ""
          });
          this.props.navigation.navigate('Explore')
      
        }
          
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
                <Text  style={styles.welcome}>
                    Login
        </Text>
        <Text></Text>
                <Text style={{color:"white", marginLeft:"10%"}}>Email </Text>
                <CustomInput style={{color:"white"}}   onChangeText={text => this.inputEmail(text)}
                         value={this.state.email} />
                <Text> </Text>
                <Text style={{color:"white",marginLeft:"10%"}}>Password</Text>
                <ShowPass  onChangeText={text => this.inputPass(text)} 
                value={this.state.pass}/>
                <Text> </Text>
                <CustomIcon onPress={this.logIn}/>

            </View>
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
        // textAlign: 'center',
        margin: 10,
        color: "white",
        marginLeft:"10%"
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default LoginScreen;