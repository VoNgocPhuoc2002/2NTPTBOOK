import {StyleSheet, Text, View} from 'react-native';
import {Constants} from '../../../Constant';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // header
  header: {
    flex: 1,
    backgroundColor: Constants.COLOR.DARKRED,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Constants.COLOR.WHITE,
  },

  // body

  body: {
    flex: 12,
    backgroundColor: Constants.COLOR.WHITE,
  },
  groupBody: {
    backgroundColor: '#DDDDDD',
  },
  viewGroupCheckBox:{
    flexDirection:"row",
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:Constants.COLOR.WHITE,
    paddingEnd:10
  },
  viewCheckBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxItem: {
    borderRadius: 4,
    backgroundColor: 'white',
    width:"100%",
    marginBottom:10, 

  },
  item: {
    flexDirection: 'row',
  },
  btnRemove:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewText: {
    width:"70%",
    paddingStart:10,
  },
  imgItem: {
    width: 120,
    height: 130,
  },
  textTitle: {
    fontSize: 16,
    color: 'black',
  },
  textDescribe1: {
    fontSize: 16,
    color: 'black',
  },
  textDescribe2: {
    fontSize: 16,
    color: 'black',
  },
  textPrice: {
    fontSize: 16,
    color: '#FF9900',
    fontWeight: 'bold',
  },
  viewGroupQuantity:{
    flexDirection:"row",
    height:60,
  },
  viewQuantity: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"center",
    marginEnd:50,
  },
  btnMinus: {
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
    justifyContent: 'center',
    width:40,
    height:50
  },
  imgTru: {
    width: 20,
    height: 30,
  },
  textip: {
    fontSize: 16,
    fontWeight: 'bold',
  
  },
  textQuantity: {
    width:50,
    alignItems: 'center',
    height:40,

  },
  btnPlus: {
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
    justifyContent: 'center',
    width:40,
    height:50
  },
  imgCong: {
    width: 20,
    height: 30,
  },
  imgRemove: {
    width: 50,
    height: 35,
  },

  // footer
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    paddingStart:20,
    paddingEnd:20,
  },
  viewThanhTien: {
    flexDirection: 'column',
  },
  textThanhTien: {
    color: 'black',
    fontSize: 16,
  },
  sumPrice: {
    fontSize: 20,
    color: '#FF9900',
    fontWeight: 'bold',
  },
  btnThanhToan: {
    backgroundColor: '#FF9933',
    height: 50,
    width: 150,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textThanhToan: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },


  // CartNoItem
  titleScreen:{
    width:"100%",
    alignItems: "center",
    justifyContent:"center",
},
textTitleScreen:{
    fontSize:20,
    fontWeight:"bold",
    color:Constants.COLOR.WHITE,
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

});
export default Styles;
