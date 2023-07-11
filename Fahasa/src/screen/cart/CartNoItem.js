import {StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import { Constants } from '../../Constant';
const CartNoItem = ({navigation}) => {
 
    const MoveToHome = ()=>{
        navigation.navigate("ScreenCart")

    }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleScreen}>
          <Text style={styles.textTitleScreen}>Giỏ hàng</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={{alignItems: 'center'}}>
          <Image
            style={{width: 200, height: 150}}
            source={require('../../assets/IconLogo.jpg')}
          />
          <View style={{marginTop: 10, alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                color: Constants.COLOR.BLACK,
              }}>
              Chưa có sản phẩm trong giỏ hàng của bạn
            </Text>
           
          </View>
          <TouchableOpacity style={styles.viewBTN} onPress={MoveToHome}>
              <View>
                <Text style={styles.btn}>Mua sắm ngay</Text>
              </View>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartNoItem;
