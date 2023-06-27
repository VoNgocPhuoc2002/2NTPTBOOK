import { StyleSheet, Text, View } from 'react-native'
import { Constants } from '../../Constant'

const Styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        flex:1,
        backgroundColor:"blue",
        marginStart:20,
        marginEnd:20,
        justifyContent: 'space-around',
    },
    groupSearch:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
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
        borderRadius:5
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
      },
      groupItem: {
        flexDirection: 'row',
        flex:1,
      },
      viewItem: {
        width: 130,
        alignItems: 'center',
        marginEnd:20,
        backgroundColor:"#F4F5F7",
        height:170,
        justifyContent: 'center',
      },
    
      nameItem: {
        fontSize: 16,
        color: 'black',
        fontWeight: 500,
      },
      descriptionItem: {
        marginEnd:10,
      },
  
})
export default Styles
