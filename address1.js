import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Switch, Button} from 'react-native';

export default function Address1() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={require('../assets/Back.png')} style={styles.imgBack}></Image>
          </TouchableOpacity>
          <Text style={styles.textheader}>Address</Text>
        </View>
        <View style={styles.inputForm}>
          <View style={styles.name}>
            <Text style={styles.textInput}>Name</Text>
            <TextInput placeholder='Hemendra Mali' style={styles.input}></TextInput>
          </View>
          <View style={styles.counTryAndCity}>
            <View style={styles.country}>
              <Text style={styles.textInput}>Country</Text>
              <TextInput placeholder='India' style={styles.input}></TextInput>
            </View>
            <View style={styles.city}>
              <Text style={styles.textInput}>City</Text>
              <TextInput placeholder='Bangalore' style={styles.input}></TextInput>
            </View>
          </View>
          <View style={styles.name}>
              <Text style={styles.textInput}>Phone Number</Text>
              <TextInput placeholder='+91-800 301 0108' style={styles.input}></TextInput>
          </View>
          <View style={styles.name}>
              <Text style={styles.textInput}>Address</Text>
              <TextInput placeholder='43, Electronics City Phase 1, Electronic City' style={styles.input}></TextInput>
          </View>
        </View>
        <View style={styles.primaryAddress}>
            <Text style={styles.textAddress}>Save as primary address</Text>
            <Switch
              style={styles.switch}
              trackColor={{false: '#767577', true: '#4BC76D'}}
              thumbColor={isEnabled ? '#fff' : '#fff'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
        </View>
        <View style={styles.viewButton}>
          <TouchableOpacity style={styles.touch}>
            <Text style={styles.text}>Next Step</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    header: {
      marginTop: 25,
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: "80%",
      justifyContent: 'space-between',
    },
    textheader: {
      marginRight: "30%",
      color: '#1D1E20',
      fontSize: 17,
      fontWeight: 'bold',
    },
    imgBack:{
      marginLeft: "30%",
    },
    inputForm: {
      marginTop: "8%",
      alignItems: 'center',
      justifyContent: 'center',
    },
    name:{
      width: "80%",
      marginTop: 10,
    },
    textInput:{
      color: '#1D1E20',
      fontWeight: 500,
      fontSize: 16,
  
    },
    input:{
      padding: 10,
      backgroundColor: '#F5F6FA',
      borderRadius: 10,
      paddingLeft: 15,
      marginTop: 10,
    },
    counTryAndCity:{
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: "space-between",
      width: "80%",
      marginTop: 10,
    },
    country:{
      width: "48%",
    },
    city:{
      width: "48%",
    },
    primaryAddress:{
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 20,
    },
    textAddress:{
      color: "#1D1E20",
      fontSize: 15,
      fontWeight: "500",
      marginLeft: 40,
    },
    switch:{
      marginRight: 40,
    },
    viewButton:{
      justifyContent: "center",
      alignItems: "center",
    },
    touch:{
      backgroundColor: "#43C1BE",
      padding: 15,
      width: 200, 
      height: 55,
      borderRadius: 15,
      marginTop: 90,
    },
    text:{
      color: "#fff",
      fontSize: 16,
      fontWeight: "700",
      textAlign: 'center',
    },
  });
  