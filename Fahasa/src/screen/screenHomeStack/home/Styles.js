import { StyleSheet, Text, View } from 'react-native'
import { Constants } from '../../../Constant'

const Styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        flex:1,
        backgroundColor:Constants.COLOR.DARKRED,
        justifyContent: 'space-around',
    },
    groupSearch:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginStart:20,
        marginEnd:20,
    },
    inputSearch:{
        width:"80%",
        backgroundColor:"white",
        borderRadius:5,
        flexDirection:"row",
        alignItems:"center",
        height:40,
        paddingStart:10,
    },
    body:{
        flex:7.5,
    },

    // panel
    groupPanner: {
        marginTop:15,
        marginStart: 20,
        marginEnd: 20,
      },
      viewImagePanel: {
        width: '100%',
        height:150,
      },
      imagePanel: {
        width: '100%',
        height:150,
        borderRadius:15,

      },

    // Sale
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
        height:250,
        justifyContent: 'center',
        borderRadius:10,
        marginTop:15,
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
      
  
})
export default Styles
