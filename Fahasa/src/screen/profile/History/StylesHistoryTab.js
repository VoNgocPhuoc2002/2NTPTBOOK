import { StyleSheet } from 'react-native';
import { Constants } from '../../../Constant';
const Styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header: {
        flex:1,
        backgroundColor:Constants.COLOR.DARKRED,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleHeader:{
        fontSize:18,
        color:Constants.COLOR.WHITE,
        fontWeight:"bold",
    },
    body: {
        flex:12,
    },
    tabContent:{
        
    },
    titleContent:{
        fontSize:16,
        color:Constants.COLOR.BLACK,
    },
    titleContent2:{
      fontSize:16,
      color:Constants.COLOR.ORANGE,
      fontWeight:"bold"
    },
    lineTitle:{
        width:80,
        height:2,
        backgroundColor:Constants.COLOR.ORANGE,
      },
      code:{
        fontSize:16,
        color:Constants.COLOR.BLACK
      },
      groupStatus:{
        flexDirection:"row",
        alignItems:"center",
      },
      viewStatus:{

      },
      textStatus:{
        backgroundColor:"green",
        padding:5,
        borderRadius:10,
        marginStart:10,
      },
  tabItem: {
    height:40,
    marginStart:20,
    justifyContent:"space-between"

  },
  group:{
    backgroundColor:Constants.COLOR.WHITE,
    marginTop:5,
    padding:10,
    paddingStart:20
  },
  text:{
    fontSize:16,
    color:Constants.COLOR.BLACK,
  },

});
export default Styles;
