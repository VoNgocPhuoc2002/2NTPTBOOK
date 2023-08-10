import { StyleSheet, Text, View } from 'react-native'
import { Constants } from '../../Constant'
const Styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Constants.COLOR.WHITE
    },
    item:{
    },
    description:{
        fontSize:14,
        color:Constants.COLOR.BLACK
    },
    viewAddAddress:{
        flexDirection:"row",
        paddingStart:10,
        alignItems:"center",
        marginTop:10,
    },
    textAddAddress:{
        fontSize:16,
        fontWeight:"bold",
        color:Constants.COLOR.ORANGE
    },
    viewTextAddAddress:{
        paddingStart:20,
    },
    viewText:{
        flexDirection:"row",

    },
    boxItem:{
    },
    titleScreen:{
        backgroundColor:Constants.COLOR.DARKRED,
        width:"100%",
        height:50,
        alignItems: "center",
        justifyContent:"center",
    },
    textTitleScreen:{
        fontSize:20,
        fontWeight:"bold",
        color:Constants.COLOR.WHITE,
    },

    menu:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "4%",
        width: "80%",
        marginLeft: "10%",
    },
    menuItem: {
        flexDirection: "column",
        alignItems: "center",
    },
    icon1: {
        position: 'relative',
    },

    text1: {
        position: "absolute",
        marginTop: "8%",
        marginLeft: "20%",
        fontSize: 20,
        color: Constants.COLOR.GRAY,
        fontWeight: 900,
    },

    textUnder:{
        fontSize: 16,
        fontWeight: 400,
        color: Constants.COLOR.BLACK,
        marginTop: "5%",
    },

    icon2: {
    },

    text2: {
        position: "absolute",
        marginTop: "8%",
        marginLeft: "19%",
        fontSize: 20,
        color: Constants.COLOR.GRAY,
        fontWeight: 900,
    },

    icon3: {
        position: 'relative',
    },

    text3: {
        position: "absolute",
        marginTop: "11%",
        marginLeft: "25%",
        fontSize: 20,
        color: Constants.COLOR.GRAY,
        fontWeight: 900,
    },
    
    viewTitle: {
        backgroundColor: Constants.COLOR.HEADER,
        padding: 12,
        marginTop: "2%",
    },

    textTitle: {
        width: "90%",
        marginLeft: "4%",
        color: Constants.COLOR.BLACK,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 700
    },

    viewAllTextIp:{
    },

    viewName: {
        width: "90%",
        marginLeft: "4%",
        marginTop: "4%",
    },

    textName: {
        fontSize: 16,
        color: Constants.COLOR.BLACK,
        fontWeight: 700,
    },

    textipName: {
        borderWidth: 1,
        paddingLeft: 20,
        borderRadius: 8,
        marginTop: 4,
    },
    
    btn:{
        backgroundColor: Constants.COLOR.ORANGE,
        padding: 16,
        borderRadius: 24,
        width: "90%",
        marginLeft: "4%",
        marginTop: "10%",
    },

    textBtn: {
        color: Constants.COLOR.WHITE,
        textAlign: "center",
        fontSize: 16,
        fontWeight: 700
    },

    khoangtrong: {
        marginTop: "10%",
    },

    dropdown: {
        margin: 16,
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
      },
      imageStyle: {
        width: 24,
        height: 24,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
        marginLeft: 8,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },

})
export default Styles
