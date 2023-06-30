import { StyleSheet, Text, View } from 'react-native'
import { Constants } from '../../../Constant'

const Styles = StyleSheet.create({
    container:{
        flex: 1,

    },
    header:{
        flex:1.5,
     
    },
    titleScreen:{
        backgroundColor:Constants.COLOR.WHITE,
        width:"100%",
        height:"50%",
        alignItems: "center",
        justifyContent:"center",
    },
    textTitleScreen:{
        fontSize:20,
        fontWeight:"bold",
        color:Constants.COLOR.DARKRED,
    },
   
    body:{
        flex:8.5,
    },
    viewBTN:{
        width:"60%",
        height:45,
        backgroundColor:Constants.COLOR.ORANGE,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:20,
        marginTop:20,
    },
      btn:{
        color:Constants.COLOR.WHITE,
        fontSize:18,
        fontWeight:"bold",
      },
    
})
export default Styles
