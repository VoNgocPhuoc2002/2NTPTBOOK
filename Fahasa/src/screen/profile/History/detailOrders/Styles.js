import { StyleSheet } from 'react-native';
import { Constants } from '../../../../Constant';
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: Constants.COLOR.DARKRED,
    padding: 15,
    alignItems: 'center',
  },
  header_Text: {
    color: Constants.COLOR.WHITE,
    fontWeight: 'bold',
    fontSize: 20,
  },
  bot:{
    alignItems: 'center',
    backgroundColor: Constants.COLOR.WHITE
  },
  bottom: {
    backgroundColor: '#FF4500',
    padding: 15,
    
    borderRadius:20,
    width: '80%',
    alignItems: 'center',
  },
  bottom_Text: {
    color: Constants.COLOR.WHITE,
    fontWeight: 'bold',
    fontSize: 20,
  },
  title: {
    paddingHorizontal: 15,
    paddingVertical: 20
  },
  title_Text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Constants.COLOR.BLACK,
  },
  part1: {
    backgroundColor: Constants.COLOR.WHITE,
    padding: 15,

  },
  part1_grtext: {
    flexDirection: 'row',
  },
  part1_grtext2: {

    backgroundColor: '#FFB266',
    borderRadius: 15,
    alignItems: 'center',
    width: '50%'

  },
  part1_text: {
    color: Constants.COLOR.BLACK,
    paddingTop: 10,

  },
  part1_text2: {
    color: '#FF4500',
    paddingTop: 10,
    fontWeight: 'bold',
    justifyContent: 'center',
    paddingBottom: 10
  },
  part1_textB: {
    color: Constants.COLOR.BLACK,
    fontWeight: 'bold',
    paddingTop: 10,
  },

});
export default Styles;
