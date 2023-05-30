import { StyleSheet, Text, View } from 'react-native'
import { Constants } from '../../Constant'

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:Constants.COLOR.WHITE,
    },
    body:{
        flex: 1,
        alignItems: "center",
        marginTop:150,
    },
    loading:{
        marginTop:50,
        
    },
    textLoading:{
        fontSize:18,
        fontWeight:"bold",
        marginTop:20,
    },

})
export default Styles


