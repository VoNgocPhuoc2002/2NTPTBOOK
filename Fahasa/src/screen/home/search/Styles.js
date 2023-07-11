import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Constants } from '../../../Constant'



const Styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    // header
    header:{
        flex:2
    },
    // body
    body:{
        flex:10,
        backgroundColor:"red",
    },
    groupLeft:{
        backgroundColor:"blue",
        width:"30%",
        alignItems:"center",
        justifyContent:"center"
    },
    groupRight:{
        backgroundColor:"green",
        width:"7`0%",
    },
    viewItem: {
        backgroundColor:"#F4F5F7",
        borderRadius:10,
        flexDirection:"row",
    },
    imageItem:{
        width:80,
        height:80,
    },
    viewItemName:{
      },
      nameItem: {
        fontSize: 16,
        color: 'black',
        fontWeight:"bold",
      },
      viewItemNewPrice:{

      },
      newPriceItem:{
        fontSize:16,
        color:Constants.COLOR.DARKRED,
        fontWeight:"bold",
      },
     
})
export default Styles
