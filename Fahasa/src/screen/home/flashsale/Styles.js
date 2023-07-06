import { StyleSheet, Text, View } from 'react-native'
import { Constants } from '../../../Constant'
const Styles = StyleSheet.create({
   
      viewItemName:{
        width:"80%",
      },
      nameItem: {
        fontSize: 14,
        color: 'black',
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
    viewGroupTime:{
        flexDirection:"row",
        width:"40%",
        justifyContent:"space-around",

    },
    viewIconNext:{
        width:"10%",
        alignItems:"flex-end"
    },
    viewTextTime:{
        backgroundColor:"black",
        height:30,
       width:40,
       alignItems: "center",
       justifyContent: "center",
       borderRadius:5,
    },
    textSale:{
        color:"red",
        fontSize:18,
        fontWeight:"bold",
    },
    textTime:{
        color:"white",
        fontSize:18,
        fontWeight:"bold",
    },
    groupWorkspaces: {
        marginStart: 20,
        height:280,
      },
      groupItem: {
        flexDirection: 'row',
        flex:1,
      },
      viewItem: {
        width: 180,
        alignItems: 'center',
        marginEnd:10,
        backgroundColor:"#F4F5F7",
        justifyContent: 'center',
        height:260,
        marginTop:10,
        borderRadius:10,
      },
    
      nameItem: {
        fontSize: 14,
        color: 'black',
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
      descriptionItem: {
        marginEnd:10,
      },
      viewItemName:{
        width:"80%",
      },
      viewItemNewPrice:{
        width:"80%",
        flexDirection:"row",
        marginTop:10,

      },
      viewItemOldPrice:{
        width:"80%",
      },
      line:{
        width:"50%",
        height:2,
        backgroundColor:Constants.COLOR.BLACK,
        bottom:10,
      },
})
export default Styles
