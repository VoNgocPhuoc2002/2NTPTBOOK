import {StyleSheet, Text, View,ToastAndroid,Image,TouchableOpacity} from 'react-native';
import React from 'react';

const Menu = () => {
  const erro = ()=>{
    ToastAndroid.show("Tính năng đang phát triển", ToastAndroid.SHORT)
  }
  return (
    <View
      style={{
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        paddingStart:10,
        paddingEnd:10,
      }}>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity onPress={erro}>
        <View>
          <Image
            style={{width: 50, height: 50}}
            source={require('../../assets/BackToSchool.png')}
          />
        </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={erro}>
        <View style={{width: 70,alignItems:"center"}}>
        <Text>Back To School</Text>
        </View>
        </TouchableOpacity>
       

      </View>

      <View style={{alignItems: 'center'}}>
        <View>
          <Image
            style={{width: 50, height: 50}}
            source={require('../../assets/IconFlashsale.png')}
          />
        </View>
        <Text>Flash sale</Text>
      </View>

      <View style={{alignItems: 'center'}}>
        <View>
          <Image
            style={{width: 50, height: 50}}
            source={require('../../assets/IconSaleT3.png')}
          />
        </View>
        <View style={{width: 70}}>
          <Text>Sale Thứ 3</Text>
        </View>
      </View>
      <View>
        <View style={{alignItems: 'center'}}>
          <Image
            style={{width: 50, height: 50}}
            source={require('../../assets/IconSPHot.png')}
          />
        </View>
        <View style={{width: 70,alignItems:"center"}}>
          <Text>Sản Phẩm mới</Text>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <View>
          <Image
            style={{width: 50, height: 50}}
            source={require('../../assets/IconXuHuong.png')}
          />
        </View>
        <View style={{width: 70}}>
          <Text>Xu Hướng</Text>
        </View>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({});
