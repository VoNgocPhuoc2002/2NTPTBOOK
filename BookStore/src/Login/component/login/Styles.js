import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Constants } from '../../../Constant'




const Styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    viewBTNLogin:{
        width: '100%',
        backgroundColor:Constants.COLOR.FILLBTN,
        height:50,
        borderRadius:5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewBTNApple:{
        width: '100%',
        backgroundColor:Constants.COLOR.BLACK,
        height:50,
        borderRadius:5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewBTNFacebook:{
        width: '100%',
        backgroundColor:Constants.COLOR.FACEBOOK,
        height:50,
        borderRadius:5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewBTNSMS:{
        width: '100%',
        backgroundColor:Constants.COLOR.SMS,
        height:50,
        borderRadius:5,
        alignItems: 'center',
        justifyContent: 'center',
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
        height:150,
        justifyContent:"space-around"

    },
    viewInput:{
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth:3,
        paddingStart:20,
        borderColor:Constants.COLOR.LINE,
    },
    iconImage:{
        marginEnd:10,
    },
    groupBTN:{
        height:280,
        justifyContent:"space-between"
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
