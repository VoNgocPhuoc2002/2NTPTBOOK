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
  viewCheckBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  boxItem: {
    borderRadius: 4,
    backgroundColor: 'white',
    width:"100%",
    marginStart:10,
    marginBottom:10,    

  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  viewText: {
    width:"75%"
  },
  imgItem: {
    width: 110,
    height: 120,
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
  viewQuantity: {
    flexDirection: 'row',
  },
  btnTru: {
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgTru: {
    width: 20,
    height: 30,
  },
  textip: {
    fontSize: 16,
  },
  textQuantity: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnCong: {
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
    justifyContent: 'center',
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
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
});
export default Styles;
