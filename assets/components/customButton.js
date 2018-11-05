import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
const CustomButton = props => (
    <TouchableOpacity onPress={props.onPress}>
        <View style={[styles.button,{backgroundColor: props.color}]}> 
            <Text style={[{color:"white"},props.textColor]}>{props.children}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
      padding: 10,
      margin: 5,
      borderRadius: 20,
      borderWidth: 1,
      borderColor:"white",
      alignItems: 'center',
      width:"90%",
      alignSelf:"center"
    }
})

export default CustomButton;