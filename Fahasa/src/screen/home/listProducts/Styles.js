import { StyleSheet, Text, View } from 'react-native'
import { Constants } from '../../../Constant'
const Styles = StyleSheet.create({
    groupWorkspaces: {
      marginStart: 20,
      height:300,
      width:"100%",
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
      line:{
        width:"40%",
        height:2,
        backgroundColor:Constants.COLOR.BLACK,
        bottom:10,
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
      viewTimePlashSale:{
        flexDirection:"row",
        width:"85%",
        height:50,
        backgroundColor:"white",
        justifyContent:"space-around",
        alignItems:"center",
        borderRadius:5,
        marginTop:20,
        },
    viewTextSale:{
        width:"35%"
        
    },
     // ListProdus
     btnShow:{
        height:40,
        width:160,
        alignItems: "center",
        justifyContent: "center",
        borderWidth:2,
        borderColor:Constants.COLOR.DARKRED,
        marginTop:30,
      },
      textShow:{
        color:Constants.COLOR.DARKRED,
        fontSize:18,
        fontWeight:"bold",
        
      },
     
      isTextTitle:{
        color:Constants.COLOR.DARKRED,
        fontSize:17,
        fontWeight:"bold",
      },
      title:{
        color:Constants.COLOR.BLACK,
        fontSize:18,
      },
      textTitle:{
        color:Constants.COLOR.BLACK,
        fontSize:16,
      },
      tabContent:{
        marginEnd:20,
      },
      lineTitle:{
        width:150,
        height:2,
        backgroundColor:Constants.COLOR.DARKRED,
      },
      newPriceItem:{
        fontSize:16,
        color:Constants.COLOR.DARKRED,
        fontWeight:"bold",
      },
      viewItem: {
        width: 180,
        alignItems: 'center',
        marginEnd:10,
        backgroundColor:"#F4F5F7",
        marginTop:10,
        borderRadius:10,
        height:240,
        justifyContent: 'center',
      },
      groupItem:{
        flex:1
      },
      
})
export default Styles