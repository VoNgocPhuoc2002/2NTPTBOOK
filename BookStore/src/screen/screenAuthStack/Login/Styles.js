import { StyleSheet, Text, View } from 'react-native'
import { Constants } from '../../../Constant'

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Constants.COLOR.WHITE,
    },
    header:{
        flex:1.5,
        backgroundColor:Constants.COLOR.HEADER,
        justifyContent:"space-between",
        borderBottomStartRadius:30,
        borderBottomEndRadius:30,

    },
    titleScreen:{
        backgroundColor:Constants.COLOR.DARKRED,
        width:"100%",
        height:"50%",
        alignItems: "center",
        justifyContent:"center",
    },
    textTitleScreen:{
        fontSize:20,
        fontWeight:"bold",
        color:Constants.COLOR.WHITE,
    },
    line:{
        width:100,
        height:3,
        backgroundColor:Constants.COLOR.LINEBTN,

    },
    body:{
        flex:8.5,
        alignContent: 'center',
        marginEnd:20,
        marginStart:20,
        paddingTop:20,
        backgroundColor:Constants.COLOR.WHITE,
    },
    groupMoveScreen:{
        flexDirection:"row",
        width:"100%",
    },
    viewLogin:{
        width:"50%",
        alignItems:"center",
        height:40,
        justifyContent:"space-between",
    },
    viewSignup:{
        width:"50%",
        alignItems:"center",
        height:40,
        justifyContent:"space-between",

    },
    textLogin:{
        fontSize:16,
        fontWeight:"600",
    },
    isTextLogin:{
        fontSize:18,
        fontWeight:"bold",
        color:Constants.COLOR.LINEBTN,
    },
    
})
export default Styles
