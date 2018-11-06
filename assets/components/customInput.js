import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const CustomInput = props =>   {
  
   
        return (
            <View style={{flexDirection:'column', width:"80%",alignSelf:"center"}}>
             <TextInput {...props} underlineColorAndroid="white"  style={[{color:"white"}, props.valid ? null : style.invalid]}
            
             />
            </View>
        ) 
    }

    const style = StyleSheet.create({
        invalid: {
            backgroundColor:"#f9c0c0",
            borderColor: "red",
        }
    })



export default CustomInput;