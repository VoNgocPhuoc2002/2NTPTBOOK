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
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontSize:20,
        fontWeight:"bold",
        color:Constants.COLOR.WHITE,
    },
    body:{
        flex:12,
        backgroundColor:Constants.COLOR.WHITE,
    },
    groupBody:{
        backgroundColor:"blue",
    },
    viewCheckBox:{
        flexDirection:"row",
        alignItems: 'center',
    },
})
export default Styles
