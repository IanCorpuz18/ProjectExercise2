
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    ImageBackground,

} from 'react-native';
import background from '../assets/images/assets/fbg.png'
import Icons from 'react-native-vector-icons/Ionicons';
import { Header, Left, Right } from 'native-base';
import ShowPass from '../assets/components/showPass';
import CustomIcon from '../assets/components/CustomIcon';
import CustomInput from '../assets/components/customInput';
import ImageSlider from 'react-native-image-slider'
class LoginScreen extends Component {
    static navigationOptions = {
        header: null
    };
    state = {
        email: "",
        pass: "",
        cPass:"",
        disable:true,
        access: false,
        // controls:{
        //     email,
        //     password,
        //     confirmPassword
        // }
    }

    inputEmail = (val) => {
        this.setState({ email: val })

    }
    inputPass = (val) => {
        this.setState({ pass: val })

    }
    inputcPass = (val) => {
        this.setState({cPass: val})
    }

    logIn = () => {
        if (this.state.email ==="" && this.state.pass === "" && this.state.cPass === "") {
            this.setState({access: !this.state.access})
            // this.setState({disable: !this.state.disable})

        }
        
        else if (this.state.email === '' && this.state.pass===""){
            alert('Please enter your email & password.')
        }
        else if (this.state.pass === '' && this.state.cPass===""){
            alert('Please enter your password & confirm it.')
        }
        else if (this.state.email === '' && this.state.cPass===""){
            alert('Please enter your email & re-enter password.')
        }
        else if (this.state.email === '') {
            alert('Please enter your email.')
        }
        else if (this.state.pass === '') {
            alert('Please enter your password.')
        }
        else if (this.state.cPass === ""){
            alert('Please re-enter your password.')
        }
        else {
            this.setState({
                email: "",
                pass: "",
                cPass:""
            });
            this.props.navigation.navigate('Explore')

        }

    }
    render() {
        return (
                <ImageBackground source={background} style={{width:"100%",height:"100%"}}>
           
                <Header style={{ backgroundColor: "transparent" }}>
                    <Left style={{ marginLeft: "-40%" }}>
                        <Icons name='ios-arrow-back' size={30} color={"white"} style={{ paddingRight: 50 }}
                            onPress={() => this.props.navigation.goBack()} />
                    </Left>
                </Header>

                <View style={styles.container}>
                    <Text style={styles.welcome}>
                        Login
        </Text>
                    <Text></Text>
                    <Text style={{ color: "white", marginLeft: "10%" }}>Email </Text>
                    <CustomInput style={{ color: "white" }} onChangeText={text => this.inputEmail(text)}
                        value={this.state.email} />
                    <Text> </Text>
                    <Text style={{ color: "white", marginLeft: "10%" }}>Password</Text>
                    <ShowPass onChangeText={text => this.inputPass(text)}
                        value={this.state.pass} />
                    <Text> </Text>
                    <ShowPass onChangeText={text => this.inputcPass(text)}
                        value={this.state.cPass} />
                        <Text></Text>
                    <CustomIcon  accessible={this.access}  onPress={this.logIn} />

                </View>
          
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#00A795',
    },
    welcome: {
        fontSize: 30,
        // textAlign: 'center',
        margin: 10,
        color: "white",
        marginLeft: "10%"
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default LoginScreen;