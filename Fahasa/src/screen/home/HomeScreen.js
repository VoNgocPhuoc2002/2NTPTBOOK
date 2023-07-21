import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from './Styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import IconFeather from 'react-native-vector-icons/Feather';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Panner from './Panner';
import Menu from './Menu';
import { Constants } from '../../Constant';
import AxiosIntance from '../../ultil/AxiosIntance';
import FlashSale from './flashsale/FlashSale';
import ListProducts from './listProducts/ListProducts';

const HomeScreen = ({ navigation }) => {
  const [productData, setProductData] = useState([]);

  const fetchProductsData = async () => {
    try {
      const response = await AxiosIntance().get(`product`);
      console.log('Product Response:', response);
      setProductData(response);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  useEffect(() => {
    fetchProductsData(); // Call the fetchUserData function
  }, []);
  const search = () => {
    navigation.navigate("SearchScreen")
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
          }}>
          <Image
            style={{ height: 30, width: 180 }}
            source={require('../../assets/IconFahasa.png')}
          />
        </View>
        <View style={styles.groupSearch}>
          <View>
            <IconFeather name="grid" size={25} color="white" />
          </View>
          <TouchableOpacity style={styles.inputSearch} onPress={search}>

            <IconFeather name="search" size={25} color="black" />

            <TextInput onPressIn={search} placeholder="Sản phẩm cần tìm " />
          </TouchableOpacity>


          <View>
            <IconMaterialCommunityIcons
              name="barcode-scan"
              size={25}
              color="white"
            />
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <ScrollView>
          <View style={{ flex: 1, marginBottom: 10 }}>
            <Panner />
          </View>
          <View style={{ flex: 1, marginBottom: 10 }}>
            <Menu />
          </View>
          <View
            style={{
              flex: 1,
              marginBottom: 10,
              width: '100%',
              backgroundColor: Constants.COLOR.PINKRED,
            }}>
            <FlashSale navigation={navigation} productData={productData} />
          </View>
          <View
            style={{
              flex: 1,
              marginBottom: 10,
              width: '100%',
              backgroundColor: 'green',
            }}>
            <ListProducts navigation={navigation} productData={productData} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
