import { StyleSheet} from 'react-native'
import { Constants } from '../../../Constant'
import { MasonryFlashList } from '@shopify/flash-list'

const Styles = StyleSheet.create({
    container:{
      flex: 1,
  
  },
  header:{
      flex:1,
      backgroundColor:"blue"
   
  },
  titleScreen:{
      backgroundColor:Constants.COLOR.DARKRED,
      width:"100%",
      alignItems: "center",
      justifyContent:"center",
      flex:1,
  },
  textTitleScreen:{
      fontSize:20,
      fontWeight:"bold",
      color:Constants.COLOR.WHITE,
  },
  
  body:{
      flex:12,
  },
  iconProfile:{
    width:220,
    height:190
  },
  viewGroupIconProfile:{
    alignItems: "center",
    backgroundColor:Constants.COLOR.WHITE,
    marginBottom:15,
  },
  textDescription:{
    fontSize:16,
    color:Constants.COLOR.ORANGE,
  },
  groupUpdateProfile:{
    flexDirection:"row",
    justifyContent:"space-between",
    height:50,
    paddingStart:20,
    paddingEnd:20,
    backgroundColor:Constants.COLOR.WHITE,
  },
  rightUpdateProfile:{
    flexDirection:"row",
    alignItems:"center",
    
  },
  leftUpdateProfile:{
    flexDirection:"row",
    width:"25%",
    justifyContent:"space-between",
    alignItems:"center",
  },
  lineFull:{
    width:"100%",
    height:2,
    backgroundColor:Constants.COLOR.BLACK
  },
  textProfile:{
    fontSize:16,
    color:Constants.COLOR.BLACK,
  },
  groupProfile:{
    marginBottom:10,
  },
  viewProfile:{
    height:40,
    backgroundColor:Constants.COLOR.WHITE,
    flexDirection:"row",
    alignItems: "center",
    paddingStart:20,

  },
  viewBTN:{
    width:"90%",
    height:50,
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