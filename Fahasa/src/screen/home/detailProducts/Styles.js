import { StyleSheet, Text, View } from 'react-native'
import { Constants } from '../../../Constant'

const Styles = StyleSheet.create({
  container:{
    flex:1,
  },

  // header
  header:{
    flex:1,
    backgroundColor:Constants.COLOR.DARKRED,
    justifyContent:"space-between",

},


// body

body:{
  flex:12,
  backgroundColor:Constants.COLOR.WHITE,
},
viewImageProducts:{
  width:"100%",
  height:450,
  backgroundColor:"red",
  alignItems:"center",
  justifyContent:"center",
},
imageProducts:{
  width:"90%",
  height:"90%"
},
viewNameProducts:{
  width:"100%",
  marginStart:20,
  marginEnd:20
},
nameProducts:{
  fontSize:16,
  color:Constants.COLOR.BLACK,
},
viewHeart:{
  width:"100%",
  alignItems:"flex-end",
  backgroundColor:"blue",
  paddingEnd:20,
},
groupPrice:{
  width:"100%",
  flexDirection:"row",
  alignItems:"center",
  backgroundColor:"green",
},
viewItemName:{
  width:"20%",
  
},
nameItem: {
  fontSize: 14,
  color: 'black',
},
viewNewPrice:{
  marginStart:20,
},
newPriceItem:{
  fontSize:26,
  color:Constants.COLOR.DARKRED,
  fontWeight:"600",
},
viewOldPrice:{
  width:"20%",
  flexDirection:"row",
  marginStart:20,
},
oldPriceItem:{
  fontSize:16,
},

viewDiscountItem:{
  backgroundColor:Constants.COLOR.DARKRED,
  width:70,
  height:30,
  alignItems: 'center',
  justifyContent: 'center',
},
discountItem:{
  fontSize:20,
  color:Constants.COLOR.WHITE,
  fontWeight:"bold",
},
information:{

},
viewInformation:{
  marginStart:20,
},
textInfomation:{
  color:Constants.COLOR.BLACK,
  fontSize:16,
  fontWeight:"bold"
},
infoProducts:{
  flexDirection:"row",
  width:"100%",

},
viewName:{
  width:"30%",
  marginStart:20,

},
viewInfo:{
  width:"70%"
},
groupBTN:{
  flexDirection:"row",
  height:60,
  backgroundColor:"red"
},
viewQuantity:{
  flexDirection:"row",
  backgroundColor:"green",
  width:"25%",
  alignItems:"center",
  justifyContent:"center"
},
     
})
export default Styles
