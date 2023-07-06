import { Text, View, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./Styles";
import { SafeAreaView} from "react-native-safe-area-context";
import { Constants } from "../../Constant";
const SuggestScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <View style={styles.titleScreen}>
          <Text style={styles.textTitleScreen}>
              Gợi ý dành riêng cho bạn
            </Text>
          </View>
      </View>
      <View style={styles.body}>
        <View style={{alignItems:"center"}}>
          <Image style={{width: 200,height:150,}} source={require("../../assets/IconLogo.jpg")}/>
          <View style={{marginTop:10,alignItems:"center"}}>
            <Text style={{fontSize:18,fontWeight:"600",color:Constants.COLOR.BLACK}}>
              Để xem được gọi ý dành riêng cho bạn.
            </Text>  
            <Text style={{fontSize:18,fontWeight:"600",color:Constants.COLOR.BLACK}}>
              Đăng Nhập
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SuggestScreen;
