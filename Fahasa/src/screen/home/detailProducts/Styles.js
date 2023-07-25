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
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
},
viewHeaderRight:{
  flexDirection:"row",
  width:"35%",
  justifyContent:"space-between",
  marginEnd:10,

},
// body

body:{
  flex:12,
  backgroundColor:Constants.COLOR.HEADER,
},
viewImageProducts:{
  width:"100%",
  height:450,
  backgroundColor:Constants.COLOR.WHITE,
  alignItems:"center",
  justifyContent:"center",
},
imageProducts:{
  width:"90%",
  height:"90%"
},
viewDrawer:{
  position:"absolute",
  backgroundColor:Constants.COLOR.BLUE,
  width:100,
  top:20,
  },
textDrawer:{
  fontSize:16,
  fontWeight:"600",
},
viewNameProducts:{
  paddingStart:20,
  width:"100%",
  marginEnd:20,
  backgroundColor:Constants.COLOR.WHITE
},
nameProducts:{
  fontSize:16,
  color:Constants.COLOR.BLACK,
},
viewHeart:{
  width:"100%",
  alignItems:"flex-end",
  backgroundColor:Constants.COLOR.WHITE,
  paddingEnd:20,
},
groupPrice:{
  width:"100%",
  flexDirection:"row",
  alignItems:"center",
  backgroundColor:Constants.COLOR.WHITE,
  marginBottom:5,
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
  marginEnd:20,
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
  backgroundColor:Constants.COLOR.WHITE,
  paddingTop:10,
  marginBottom:5,
  paddingBottom:10,

},
viewInformation:{
  marginStart:20,
  marginBottom:10,
},
textInfomation:{
  color:Constants.COLOR.BLACK,
  fontSize:16,
  fontWeight:"bold"
},
infoProducts:{
  flexDirection:"row",
  width:"100%",
  marginBottom:10,

},
viewName:{
  width:"30%",
  marginStart:20,

},
viewInfo:{
  width:"60%",
},
textname:{
  fontSize:14
  
  
  
  ,
  color:Constants.COLOR.BLACK
},
groupBTN:{
  flexDirection:"row",
  height:50,
  backgroundColor:Constants.COLOR.HEADER,
},
viewQuantity:{
  flexDirection:"row",
  width:"24.5%",
  justifyContent:"space-around",
  marginEnd:3,
  backgroundColor:Constants.COLOR.WHITE
},
btnQuantity:{
  alignItems:"center",
  justifyContent:"center",
},
viewInputQuantity:{
  alignItems:"center",
  justifyContent:"center",
},
viewbtnAddCart:{
  width:"50%",
  alignItems:"center",
  justifyContent:"center",
  backgroundColor:Constants.COLOR.WHITE,
},
textbtnAddCart:{
  fontSize:16,
  color:Constants.COLOR.DARKRED,
  fontWeight:"bold",
},
viewbtnBuy:{
  backgroundColor:Constants.COLOR.DARKRED,
  width:"25%",
  alignItems:"center",
  justifyContent:"center",
},
textbtnBuy:{
  color:Constants.COLOR.WHITE,
  fontSize:16,
  fontWeight:"bold",
},
groupDescription:{
  marginStart:20,
},
})
export default Styles
