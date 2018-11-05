
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { Header, Left,  DatePicker} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomIcon from '../../assets/components/CustomIcon';

class Signup3 extends Component{
    static navigationOptions = {
        header:null
    };
    constructor(props) {
      super(props);
      this.state = { chosenDate: new Date() };
      this.setDate = this.setDate.bind(this);
    }
    setDate(newDate) {
      this.setState({ chosenDate: newDate });
    }
  render() {
    return (
      <View style={{flex:1, backgroundColor:"#00A795"}}>
      <Header style={{ backgroundColor:"#00A795"}}>
            <Left style={{ marginLeft: "-40%" }}>
                <Icon  name='ios-arrow-back' size={30} color={"white"}  style={{ paddingRight: 50 }}
                    onPress={() => this.props.navigation.goBack()} />
            </Left>
        </Header> 
      <View style={styles.container}>
        <Text style={styles.welcome}>
          When is Your birthday?
        </Text>
        <Text>  </Text>

        <Text style={{marginLeft:"10%", color:"white"}}>You must be at least 18 years old to use Ting.</Text>
        <Text style={{marginLeft:"10%", color:"white"}}>Other people won't see your birthday.</Text>
        <Text>  </Text>
      
        <Text style={{marginLeft:"10%", color:"white"}}> BIRTHDAY </Text>
           <View style={{marginLeft:"8%",borderBottomColor:"white",borderBottomWidth:1,width:"80%"}}>
            <DatePicker
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(1980, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={true}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            textStyle={{ color: "white" }}
            placeHolderTextStyle={{ color: "white" }}
            onDateChange={this.setDate}
            />
            </View>
        <CustomIcon name="ios-arrow-dropright" size={30} onPress={() => this.props.navigation.navigate('Front')}/>
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
    textAlign: 'left',
    marginLeft: "5%",
    color:"white"
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Signup3;