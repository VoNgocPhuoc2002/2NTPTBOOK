import { StyleSheet, Text, View } from 'react-native'
import { Constants } from '../../../Constant'

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Constants.COLOR.GRAY,
    },

    titleScreen:{
        backgroundColor:Constants.COLOR.DARKRED,
        width:"100%",
        height:50,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    icon:{
        marginLeft: 16,
    },


    textTitleScreen:{
        fontSize:20,
        fontWeight:"bold",
        color:Constants.COLOR.WHITE,
        marginRight: 16,
    },

    viewOrder: {
        flex: 1,
        backgroundColor: Constants.COLOR.WHITE,
        marginTop: 8,
        paddingVertical: 8
    },

    btnWait: {
        backgroundColor: "#FFE4B5",
        padding: 6,
        borderRadius: 16,
        width: 185,
        textAlign: 'center',
        fontSize: 16,
        color: "#FF4500",
        marginTop: 4,
        marginLeft: 16,
        fontWeight: 700,
    },

    textCode: {
        fontSize: 16,
        color: Constants.COLOR.BLACK,
        marginTop: 6,
        marginLeft: 16,
    },

    textCode1: {
        fontWeight: 700,
        color: Constants.COLOR.BLACK,
    },


    listProduct : {
        flex: 4,
        backgroundColor: Constants.COLOR.WHITE,
    },

    textProduct: {
        backgroundColor: Constants.COLOR.GRAY,
        paddingTop: 16,
        paddingBottom: 8,
        fontSize: 20,
        color: Constants.COLOR.BLACK,
        fontWeight: 700,    
        paddingLeft: 8,
    },

    itemContainer: {
        flex: 1,
        paddingHorizontal: 8,
        paddingVertical: 20,
        borderTopWidth: 0.8,
    },

    item_flex: {
        flexDirection: "row",
        justifyContent: "space-between",

    },

    image: {
        width: 120,
        height: 120,
        marginLeft: 12
    },

    allText: {
        width: 240,
        justifyContent: "space-between",
    },

    name: {
        color: Constants.COLOR.BLACK,
        fontSize: 16
    },


    viewPayment: {
        flex: 1,
        backgroundColor: Constants.COLOR.WHITE,
        marginTop: 8,
        paddingVertical: 8
    }
})
export default Styles
