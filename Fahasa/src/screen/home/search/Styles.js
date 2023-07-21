import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Constants } from '../../../Constant'



const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    // header
    header: {
        flex: 2,
       
    },
    // body
    body: {
        flex: 10,
        backgroundColor: "red",
    },
    groupLeft: {
        backgroundColor: "blue",
        width: "30%",
        alignItems: "center",
        justifyContent: "center"
    },
    groupRight: {
        backgroundColor: "green",
        width: "70%",
    },
    viewItem: {
        backgroundColor: "blue",
        borderRadius: 10,
        flexDirection: "row",

    },
    imageItem: {
        width: 80,
        height: 80,
    },
    viewItemName: {
    },
    nameItem: {
        fontSize: 16,
        color: 'black',
        fontWeight: "bold",
    },
    viewItemNewPrice: {

    },
    newPriceItem: {
        fontSize: 16,
        color: Constants.COLOR.DARKRED,
        fontWeight: "bold",
    },
    searchBox: {
        backgroundColor:Constants.COLOR.DARKRED,    
    },
    search: {
        flexDirection: "row",
        alignItems: "center",
        margin:20,
        backgroundColor:'white',
        borderRadius:10,
        paddingLeft:5
        
    },
    ButtonBox1:{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor:'white',
        justifyContent:"space-evenly",
        backgroundColor:'white',
    },
    Btn_sapxep:{
        flexDirection: "row",
        alignItems: "center",
        margin:20,
        backgroundColor:'white',
    },
    Btn_loc:{
        flexDirection: "row",
        alignItems: "center",
        margin:20,
        backgroundColor:'white',    
    },
   Button:{
    backgroundColor:'white',
   },
   viewItem: {
    width: "100%",
    alignItems: 'center',
    backgroundColor:"#F4F5F7",
    borderWidth:1,
    height:240,
    justifyContent: 'center',
  },
  viewItemName:{
    width:"80%",
  },
  nameItem: {
    fontSize: 14,
    color: 'black',
  },
  viewItemNewPrice:{
    width:"80%",
    flexDirection:"row",
    marginTop:10,

  },
  newPriceItem:{
    fontSize:16,
    color:Constants.COLOR.DARKRED,
    fontWeight:"bold",
  },
  viewDiscountItem:{
    backgroundColor:Constants.COLOR.DARKRED,
    width:50,
    height:25,
    alignItems: 'center',
    justifyContent: 'center',
    marginStart:10,
    borderRadius:5,
  },
  discountItem:{
    fontSize:16,
    color:Constants.COLOR.WHITE,
    fontWeight:"bold",
  },
  viewItemOldPrice:{
    width:"80%",
  },
  line:{
    width:"40%",
    height:2,
    backgroundColor:Constants.COLOR.BLACK,
    bottom:10,
  },
  
})
export default Styles
