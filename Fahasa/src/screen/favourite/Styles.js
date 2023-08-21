import { StyleSheet, Text, View } from 'react-native'
import { Constants } from '../../Constant'
const Styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    header:{
        flex:1,
        backgroundColor:Constants.COLOR.DARKRED,
        alignItems: 'center',
        justifyContent:'center'
    },
    titleHeader:{
        color:Constants.COLOR.WHITE,
        fontWeight:"bold",
        fontSize:18,
    },
    body:{
        flex:12
    },
    boxItem:{
        width:"100%",
        marginTop:5,
        backgroundColor:Constants.COLOR.WHITE,
        paddingTop:20,
        paddingBottom:20
    },
    item:{
        flexDirection:"row",

    },
    imgItem:{
        width:100,
        height:130,
    },
    viewText:{
    },
    textTitle:{
        fontSize:16,
        color:Constants.COLOR.BLACK
    },
    textPrice:{
        color:Constants.COLOR.DARKRED,
        fontSize:18
    },
    groupBuy:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems: "center",
        paddingEnd:10
    },
    btnBuy:{
        width: 120,
        height:40,
        backgroundColor:Constants.COLOR.DARKRED,
        alignItems:"center",
        justifyContent:"center",
    },
    textBuy:{
        fontSize:16,
        fontWeight:"bold",
        color:Constants.COLOR.WHITE,
    },
    btnDelete:{

    },
})
export default Styles