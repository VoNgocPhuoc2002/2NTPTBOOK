import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Constants } from '../Constant'



const Styles = StyleSheet.create({
    container:{
        flex: 1,
        marginStart:20,
        marginEnd:20,

    },
    header:{
        flex:1,
     
    },
    groupHeader:{
        flexDirection:"row",
        alignItems: "center",
        justifyContent:"space-between",
    },
    viewHollow:{
        width:25,
    },
    body:{
        flex:9,
    },
    imageCatelog:{
        width:"100%",
        height:150,
    },
    viewCatelog:{
        marginBottom:10,
    
    },
   
    
})
export default Styles
