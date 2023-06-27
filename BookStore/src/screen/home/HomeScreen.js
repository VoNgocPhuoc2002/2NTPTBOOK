import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';
import React from 'react';
import styles from './Styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import IconFeather from 'react-native-vector-icons/Feather';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Panner from './Panner';
import Menu from './Menu';
import FlashSale from './FlashSale';

const HomeScreen = ({navigation}) => {
  const move = () => {
    navigation.navigate('Catelogcreen');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            width: '100%',
            backgroundColor: 'green',
            alignItems: 'center',
          }}>
          <Image
            style={{height: 30, width: 180}}
            source={require('../../assets/IconFahasa.png')}
          />
        </View>
        <View style={styles.groupSearch}>
          <View>
            <IconFeather name="grid" size={25} color="white" />

            
          </View>
          <View style={styles.inputSearch}>
            <IconFeather name="search" size={25} color="black" />

            <TextInput placeholder="Sản phẩm cần tìm " />
          </View>
          <View>
            <IconMaterialCommunityIcons name="barcode-scan" size={25} color="white" />
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <ScrollView>
        <View style={{flex:1,marginBottom:10,}}>
         <Panner/>
        </View>
        <View style={{flex:1,marginBottom:10,}}>
          <Menu/>
        </View>
        <View style={{flex:1,marginBottom:10,width:"100%", backgroundColor:"green"}}>
          <FlashSale/>
        </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
