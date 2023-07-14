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
        backgroundColor:"#DDDDDD",
    },
    viewCheckBox:{
        flexDirection:"row",
        alignItems: 'center',
    },
    boxItem: {
        borderRadius: 4,
        marginTop: 16,
        // flexDirection: "row",
        // justifyContent: "space-between",
        backgroundColor: "white",
        width: "95%",
        marginLeft: 10
    },
    item:{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 5,
        position: "relative",
    },
    viewText: {
        width: 175,
        position: "relative",
    },
    imgItem: {
        width: 90,
        height: 90,
        marginTop: "90%",
        marginRight: 5
    },
    textTitle: {
        fontSize: 16,
        color: "black",
        marginTop: 5,
    },
    textDescribe1: {
        fontSize: 16,
        color: "black",
        marginTop: 5
    },
    textDescribe2: {
        fontSize: 16,
        color: "black",
    },
    textPrice: {
        fontSize: 16,
        color: "#FF9900",
        fontWeight: "bold",
        marginTop: 10,
    },
    viewQuantity: {
        flexDirection: "row",
        marginBottom: 5,
        marginTop: 10
    },
    btnTru:{
        backgroundColor: "#DDDDDD",
        paddingHorizontal: 8,
        paddingVertical: 4,
        alignItems:"center",
        justifyContent:"center",
    },
    imgTru: {
        width: 20,
        height: 30,
    },
    textip: {
        marginLeft: 10,
        fontSize: 16,
    },
    textQuantity: {
        backgroundColor: "white",
        alignItems:"center",
        justifyContent:"center",
    },
    btnCong:{
        backgroundColor: "#DDDDDD",
        paddingHorizontal: 8,
        paddingVertical: 4,
        alignItems:"center",
        justifyContent:"center",
    },
    imgCong: {
        width: 20,
        height: 30,
    },
    imgRemove: {
        width: 50,
        height: 35,
        marginLeft: 15,
        marginTop: 10,
    },
    viewFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
        position: "relative",
        width: "100%",
    },
    viewThanhTien: {
        flexDirection: "column",
        marginLeft: 10,
    },
    textThanhTien: {
        color: "black",
        fontSize: 16,
        marginTop: 10,
    },
    sumPrice: {
        fontSize: 20,
        color: "#FF9900",
        fontWeight: "bold",
    },
    btnThanhToan: {
        backgroundColor: "#FF9933",
        paddingHorizontal: 50,
        paddingVertical: 15,
        borderRadius: 120,
        marginTop: 2,
        marginRight: 20,
    },
    textThanhToan: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
})
export default Styles
