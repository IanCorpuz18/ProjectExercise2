import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

class ShowPass extends Component {
    constructor(props) {
        super(props);
        this.state={
           secureTextEntry:true 
        }
    }

    onShowPress = () => {
        this.setState({
            secureTextEntry: !this.state.secureTextEntry
        })
    }

    render() {
        return (
            <View style={{flexDirection:'row',alignSelf:"center"}}>
             <TextInput {...this.props}
             underlineColorAndroid="white"
             style={{width:"70%",marginLeft:35,color:"white"}}
             secureTextEntry={this.state.secureTextEntry}
             />
             <TouchableOpacity onPress={this.onShowPress} >
             <Text style={{color:'#fff', marginRight:'10%', fontSize:12}}>SHOW</Text>
             </TouchableOpacity>  
            
            </View>
        ) 
    }
}

    



export default ShowPass;