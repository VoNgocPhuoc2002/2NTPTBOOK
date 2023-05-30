import {  Image, Text, TextInput, View,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Styles'
import { useNavigation } from '@react-navigation/native';


const Login = () => {
  const navigation = useNavigation();
  const moveToHome = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.groupInput}>
        <View style={styles.viewInput}>
          <Image style={styles.iconImage} source={require("../../../assets/IconEmail.png")}/>
          <TextInput placeholder='Your Email'/>
        </View>
        <View style={styles.viewInput}>
          <Image style={styles.iconImage} source={require("../../../assets/IconPass.png")}/>
          <TextInput placeholder='Your Email'/>
        </View>
      </View>
      <TouchableOpacity onPress={moveToHome}>
      <View style={styles.groupBTN}>
        <View style={styles.viewBTNLogin}>
          <Text style={styles.textBTN}>LOGIN</Text>
        </View>
        <View style={styles.viewOR}>
          <View style={styles.line}></View>
          <Text>
            Or
          </Text>
          <View style={styles.line}></View>

        </View>
        <View style={styles.viewBTNApple}>
          <Text style={styles.textBTN}>Sign in with Apple</Text>
        </View>
        <View style={styles.viewBTNFacebook}>
          <Text style={styles.textBTN}>FACEBOOK lOGIN</Text>
          <Text>1234545</Text>
        </View>
        <View style={styles.viewBTNSMS}>
          <Text style={styles.textBTN}>SMS LOGIN</Text>
        </View>
        

      </View>
      </TouchableOpacity>
      <View style={styles.viewForgotPass}>
        <Text style={styles.forgotPass}>Forgot your password</Text>
      </View>
    
      
    </View>
  )
}

export default Login
