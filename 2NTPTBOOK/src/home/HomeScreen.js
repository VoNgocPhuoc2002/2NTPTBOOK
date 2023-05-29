import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Styles'
import { SafeAreaView } from 'react-native-safe-area-context';
const HomeScreen = ({navigation}) => {
  const move =()=>{
    navigation.navigate("Catelogcreen")
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.groupHeader}>
          <Image source={require("../assets/IconMenu.png")}/>
          <Image source={require("../assets/IconLogo.png")}/>
          <View style={styles.groupRight}>
            <Image source={require("../assets/IconBell.png")}/>
            <View style={styles.viewImage}>
            </View>
           
          </View>
        </View>

      </View>
      <View style={styles.body}>
        <View style={styles.groupTextHello}>
          <View style={styles.viewTextAbove}>
            <Text style={styles.textAbove}>Hello, Tricia</Text>
          </View>
          <View>
            <Text style={styles.textBelow}>What do you want to read today?</Text>
          </View>
        </View>
        <TouchableOpacity onPress={move}>
        <View>
          <Text>Detail moveToScreen</Text>
        </View>
        </TouchableOpacity>
    </View>

      
    </SafeAreaView>
  )
}

export default HomeScreen
