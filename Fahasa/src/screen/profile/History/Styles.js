import { StyleSheet } from 'react-native';
import { Constants } from '../../../Constant';
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

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
  

});
export default Styles;
