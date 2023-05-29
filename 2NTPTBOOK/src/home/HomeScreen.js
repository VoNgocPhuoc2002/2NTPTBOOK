import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import styles from './Styles'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
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
    </View>

      
    </View>
  )
}

export default HomeScreen
