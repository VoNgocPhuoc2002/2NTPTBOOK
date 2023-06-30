import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './Styles'
import { Constants } from '../../../Constant'
import { ScreenContainer } from 'react-native-screens'

const Notification = ({navigation}) => {
  const MoveToLogin = ()=>{
    navigation.navigate("LoginScreen")
  }
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.header}>
    <View style={styles.titleScreen}>
        <Text style={styles.textTitleScreen}>
            Thông báo
          </Text>
        </View>
    </View>
    <View style={styles.body}>
      <View style={{alignItems:"center"}}>
        <Image style={{width:"90%",height:"70%",}} source={require("../../../assets/Notification.jpg")}/>
        <TouchableOpacity style={styles.viewBTN} onPress={MoveToLogin}>
        <View >
          <Text style={styles.btn}>
            Đăng nhập
          </Text>
        </View>
        </TouchableOpacity>
      </View>
    </View>
  </SafeAreaView>
  )
}

export default Notification

