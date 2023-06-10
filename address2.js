import React, {useState, Component}  from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Switch, Button} from 'react-native';
import CreditCard from 'react-native-credit-card';


export default function Address2() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={require('../assets/Back.png')} style={styles.imgBack}></Image>
          </TouchableOpacity>
          <Text style={styles.textheader}>Payment</Text>
        </View>
        <View style={styles.formPayment}>
            <Image source={require('../assets/Card1.png')} style={styles.imgCard}></Image>
            <TouchableOpacity style={styles.addCard}>
                <Text style={styles.textAddCard}>Add new card</Text>
            </TouchableOpacity>
            <View style={styles.cardOwner}>
                <Text style={styles.textInput}>Card Owner</Text>
                <TextInput placeholder='Hemendra Mali' style={styles.input}></TextInput>
            </View>
            <View style={styles.cardNumber}>
                <Text style={styles.textInput}>Card Number</Text>
                <TextInput placeholder='5254 7634 8734 7690' style={styles.input}></TextInput>
            </View>
            <View style={styles.expAndCvv}>
                <View style={styles.exp}>
                    <Text style={styles.textInput}>Exp</Text>
                    <TextInput placeholder='24/24' style={styles.input}></TextInput>
                </View>
                <View style={styles.cvv}>
                    <Text style={styles.textInput}>Cvv</Text>
                    <TextInput placeholder='7763' style={styles.input}></TextInput>
                </View>
            </View>
        </View>
        <View style={styles.primaryCard}>
            <Text style={styles.textCard}>Save card info</Text>
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
      imgCard:{
        width: 300,
        height: 185,
      },
      formPayment:{
        alignItems: 'center',
      },
      addCard:{
        backgroundColor: "#F6F2FF",
        borderRadius: 12,
        width: "80%",
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
      },
      textAddCard:{
        color: "#9775FA",
        fontSize: 16,
      },
      cardOwner:{
        width: "80%",
        marginTop: 10,
      },
      cardNumber:{
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
      expAndCvv:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "space-between",
        width: "80%",
        marginTop: 10,
      },
      exp:{
        width: "48%",
      },
      cvv:{
        width: "48%",
      },
      primaryCard:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
      },
      textCard:{
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
        marginTop: 45,
      },
      text:{
        color: "#fff",
        fontSize: 16,
        fontWeight: "700",
        textAlign: 'center',
      },
});
  