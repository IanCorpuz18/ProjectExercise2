import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const CustomInput = props =>   {
  
   
        return (
            <View style={{flexDirection:'column', width:"80%",alignSelf:"center"}}>
             <TextInput {...props} underlineColorAndroid="white"
            
             />
            </View>
        ) 
    }

    



export default CustomInput;