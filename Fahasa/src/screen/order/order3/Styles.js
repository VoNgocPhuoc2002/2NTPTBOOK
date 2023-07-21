import {StyleSheet} from 'react-native';
import { Constants } from '../../../Constant';
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  PT: {
    fontWeight: "bold",
    fontSize: 15,
    color: Constants.COLOR.BLACK,
    margin: 10
  },
  
  listContainer: {
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    

  },
  infoContainer: {
    marginLeft: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    
  },
  name: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: 'bold',
    color: Constants.COLOR.BLACK,
  },
  quantity: {
    color: Constants.COLOR.BLACK,
    marginTop: 4,
    fontSize: 16,
  },
  price: {
    marginTop: 4,
    fontSize: 16,
    color: 'orange',
    fontWeight: 'bold',
  },
  DT:{
    backgroundColor:'white',
    padding:20
  },
  GTDH: {
    paddingTop:40,
    flexDirection:'row',
    justifyContent:'space-between',
    padding:20,
  },
  TT:{
    backgroundColor: Constants.COLOR.ORANGE,
    borderRadius:30,
    marginTop:30,
    padding:20,
    alignItems:'center',
    fontWeight:'bold',
   },
   TT_Text:{
     fontWeight:'bold',
     color:Constants.COLOR.WHITE,
     fontSize:18
    },
    GTDH_Text1: {
      color: Constants.COLOR.BLACK,
      fontWeight:'bold',
      fontSize:17
    },
    GTDH_Text2: {
      color: Constants.COLOR.ORANGE,
      fontWeight:'bold',
      fontSize:17
  
    },
});
export default Styles;
