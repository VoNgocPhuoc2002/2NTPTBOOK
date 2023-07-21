import { StyleSheet } from 'react-native';
import { Constants } from '../../../Constant';
const Styles = StyleSheet.create({
  body: {
    flex: 12,
    marginEnd: 20,
    marginStart: 20,
    backgroundColor: Constants.COLOR.WHITE,
  },
  container: {
    flex: 1,
    backgroundColor: Constants.COLOR.HEADER,
  },
  checkbox:{
    flexDirection: "row",
    alignItems: "center",
   
  },
  image: {
    width: 20,
    height: 20,
  },
  PT: {
    fontWeight: "bold",
    fontSize: 15,
    color: Constants.COLOR.BLACK,
    margin: 10
  },
  PTVCbox: {
    backgroundColor: "white",
    height: 60,
    width: '100%',
    flexDirection:'row',
    
    
  },
  PTVCbox2: {
    
    alignItems: 'center',
  },
  PTVC_Text1: {
    fontWeight: "bold",
    color: Constants.COLOR.BLACK,
    paddingTop: 10,
    paddingLeft: 10,
  },
  PTVC_Text2: {
    color: Constants.COLOR.BLACK,
    paddingLeft: 10,

  },
  FSbox: {
    backgroundColor: "white",
    height: 40,
    width: '100%',
    marginTop: 20,
    flexDirection:'row',
    padding: 10,
    alignItems: 'center',
    
  },
  FS_Text1: {
    color: Constants.COLOR.BLACK, 
    paddingLeft: 10,
  },
  PTTTbox: {
    backgroundColor: "white",
    height: 330,
    width: '100%',

  },
  PTTTbox_Text: {
    color: Constants.COLOR.BLACK,
    
    paddingLeft: 10,
  },

  KMbox: {
    backgroundColor: "white",

    width: '100%',
    padding: 10,
    flexDirection:'row',
    alignItems: 'center',
  },
  KM_Text1: {
    color: Constants.COLOR.BLACK,
    fontWeight:'bold'
    
  },
  KM_Text2: {

    paddingTop: 10,

  },
  Pbox: {
    backgroundColor: "white",

    width: '100%',
    padding: 10,
  },
  P_Text1: {
    color: Constants.COLOR.BLACK,
    paddingLeft:10
    
  },
  P_Text2: {
    

  },
  GTDHbox: {
    backgroundColor: "white",
    width: '100%',
    padding: 20,
  },
  
  GTDH: {
    flexDirection:'row',
    justifyContent:'space-between'
  },
  GTDH_Text1: {
    color: Constants.COLOR.BLACK,
  },
  GTDH_Text2: {
    color: Constants.COLOR.ORANGE,
    fontWeight:'bold',
    fontSize:17

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
});
export default Styles;
