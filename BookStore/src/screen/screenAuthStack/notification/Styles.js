import { StyleSheet} from 'react-native'

import { Constants } from '../../../Constant'
const Styles = StyleSheet.create({
    container:{
      flex: 1,
  
  },
  header:{
      flex:1.5,
   
  },
  titleScreen:{
      backgroundColor:Constants.COLOR.DARKRED,
      width:"100%",
      height:"50%",
      alignItems: "center",
      justifyContent:"center",
  },
  textTitleScreen:{
      fontSize:20,
      fontWeight:"bold",
      color:Constants.COLOR.WHITE,
  },
  
  body:{
      flex:8.5,
      justifyContent:"center",
  },
  viewBTN:{
    width:"80%",
    height:40,
    backgroundColor:Constants.COLOR.ORANGE,
    alignItems:"center",
    justifyContent:"center",
},
  btn:{
    color:Constants.COLOR.WHITE,
    fontSize:18,
    fontWeight:"bold",
  },
  })
  export default Styles