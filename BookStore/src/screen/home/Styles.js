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
    },
    groupHeader:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",

    },
    groupRight:{
        flexDirection:"row",
    },
    viewImage:{
        width:35,
        height:35,
        backgroundColor:"red",
        borderRadius:17.5,
    },

    body:{
        flex:8,
    },
    groupTextHello:{
        marginStart:20
    },
    viewTextAbove:{
        marginBottom:5,
    },
    textAbove:{
        fontSize:20,
        color:Constants.COLOR.BLACK,

    },
    textBelow:{
        fontSize:16,

    },
})
export default Styles
