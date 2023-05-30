import { StyleSheet, Text, View } from 'react-native'
import { Constants } from '../../../../Constant'



const Styles = StyleSheet.create({
    groupInput:{
        marginBottom:20,
        justifyContent:"space-around",
        height:350,

    },
    viewInput:{
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth:3,
        paddingStart:20,
        paddingEnd:20,
        borderColor:Constants.COLOR.LINE,
        justifyContent:"space-between",
        height:60,
    },
    iconImage:{
    },
    viewBTNLogin:{
        width: '100%',
        backgroundColor:Constants.COLOR.FILLBTN,
        height:60,
        borderRadius:5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBTN:{
        fontSize:16,
        fontWeight:"600",
        color:"white"
    },
    textLeft:{
        fontSize:16,
        marginEnd:10,
    },
    textRight:{
        color:Constants.COLOR.FILLBTN,
        fontSize:16,

    },
    viewFooter:{
        flexDirection:"row",
        alignItems: 'center',
        justifyContent:"center",
        marginTop:30,
    },
})
export default Styles
