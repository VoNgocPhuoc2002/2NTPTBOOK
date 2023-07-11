import { StyleSheet, Text, View } from 'react-native'
import { Constants } from '../../Constant'
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
        backgroundColor:"white",

    },

    // panel
    groupPanner: {
        marginTop:15,
        marginStart: 20,
        marginEnd: 20,
        backgroundColor:"white",
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

    
     
  
})
export default Styles
