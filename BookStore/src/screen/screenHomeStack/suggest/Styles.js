import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Constants } from '../../../Constant'


const Styles = StyleSheet.create({
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
    },
    
   
    
})
export default Styles
