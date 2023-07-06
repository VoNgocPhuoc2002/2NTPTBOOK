import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Constants } from '../../Constant'
import { SafeAreaView } from 'react-native-safe-area-context'

const Notification = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.header}>
    <View style={styles.titleScreen}>
        <Text style={styles.textTitleScreen}>
            Gợi ý dành riêng cho bạn
          </Text>
        </View>
    </View>
    <View style={styles.body}>
      <View style={{alignItems:"center"}}>
        <Image style={{width: 200,height:150,}} source={require("../../assets/IconLogo.jpg")}/>
        <View style={{marginTop:10,alignItems:"center"}}>
          <Text style={{fontSize:18,fontWeight:"600",color:Constants.COLOR.BLACK}}>
            Để xem được gọi ý dành riêng cho bạn.
          </Text>  
          <Text style={{fontSize:18,fontWeight:"600",color:Constants.COLOR.BLACK}}>
            Vui lòng xem ít nhất ba sản phẩm
          </Text>
        </View>
      </View>
    </View>
  </SafeAreaView>
  )
}

export default Notification

const styles = StyleSheet.create({
  container:{
    flex: 1,

},
header:{
    flex:1.5,
 
},
titleScreen:{
    backgroundColor:Constants.COLOR.WHITE,
    width:"100%",
    height:"50%",
    alignItems: "center",
    justifyContent:"center",
},
textTitleScreen:{
    fontSize:20,
    fontWeight:"bold",
    color:Constants.COLOR.DARKRED,
},

body:{
    flex:8.5,
    justifyContent:"center",
},

})