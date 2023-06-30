import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Constants } from '../../../../../Constant'


const Styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    viewBTNLogin:{
        width: '80%',
        backgroundColor:Constants.COLOR.ORANGE,
        borderRadius:5,
        alignItems: 'center',
        justifyContent: 'center',
        height:45,
        borderRadius:20
    },
    textForgotPass:{
        fontSize:16,
        fontWeight:"bold",
        color:Constants.COLOR.LINEBTN
    },
  
    viewBTNFacebook:{
        width: '80%',
        backgroundColor:Constants.COLOR.FACEBOOK,
        borderRadius:5,
        alignItems: 'center',
        justifyContent: 'center',
        height:45,
        borderRadius:20
    },

    viewOR:{
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    line:{
        width:"45%",
        height:1,
        backgroundColor:Constants.COLOR.BLACK,
      
    },
    textBTN:{
        fontSize:16,
        fontWeight:"600",
        color:"white"
    },
    groupInput:{
        marginBottom:20,
        flex:3,
        justifyContent:'space-evenly'
    },
    titleInput:{
        fontSize:16,
        fontWeight:"600",
        color:Constants.COLOR.BLACK,
    },
    viewInput:{
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth:1,
        paddingStart:20,
        paddingEnd:20,
        borderColor:Constants.COLOR.BLACK,
        height:40,
        marginTop:10,
        borderRadius:5,
        justifyContent:"space-between"
    },
   
    groupBTN:{
        flex:3,
        paddingTop:30,
    },
    viewForgotPass:{
        alignItems: 'center',
        marginTop:20,
    },
    forgotPass:{
        fontSize:16,
        color:Constants.COLOR.BLACK,
    },
})
export default Styles
