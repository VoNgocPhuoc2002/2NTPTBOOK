import {StyleSheet} from 'react-native';
import { Constants } from '../../../Constant';
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.COLOR.WHITE,
  },
  header: {
    flex: 1,
    backgroundColor: Constants.COLOR.DARKRED,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleScreen: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitleScreen: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Constants.COLOR.WHITE,
  },



  body: {
    flex: 12,
    marginEnd: 20,
    marginStart: 20,
    backgroundColor: Constants.COLOR.WHITE,
  },
  viewFPont:{
    alignItems: 'center',
  },
  textFPont:{
    fontSize:16,
    color: Constants.COLOR.BLACK,
    marginTop:20,
    marginBottom:20,
    
  },
  viewBTNLogin:{
    width: '80%',
    backgroundColor:Constants.COLOR.ORANGE,
    borderRadius:5,
    alignItems: 'center',
    justifyContent: 'center',
    height:45,
    borderRadius:20,
    marginTop:20
},
textBTN:{
    fontSize:16,
    fontWeight:"600",
    color:"white"
},
groupInput:{
    marginBottom:15,
},
  titleInput: {
    fontSize: 16,
    fontWeight: '600',
    color: Constants.COLOR.BLACK,
  },
  viewInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingStart: 20,
    paddingEnd: 20,
    borderColor: Constants.COLOR.BLACK,
    height: 40,
    marginTop: 5,
    borderRadius: 5,
    justifyContent: 'space-between',
  },
  viewCheckBox: {
    flexDirection: 'row',
  },
});
export default Styles;
