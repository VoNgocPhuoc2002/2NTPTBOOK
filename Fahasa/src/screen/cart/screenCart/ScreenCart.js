import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AxiosIntance from '../../../ultil/AxiosIntance';
import {getUserId} from '../../../ultil/GetUserId';
import CartNoItem from '../CartNoItem';
import styles from './Styles';
import {CheckBox, Image} from 'react-native-elements';
import { FlashList } from '@shopify/flash-list';


const ScreenCart = () => {
  const [data, setData] = useState();
  const [checked, setChecked] = useState(false);
  const [image, setImgae] = useState('');

  // Function to fetch cart items
  const fetchShowCart = async () => {
    const userId = await getUserId();
    if (userId) {
      const response = await AxiosIntance().get(`cart/${userId}/getcartitems`);
      setData(response.productId);
      console.log('cartttttttttaatttttttttaattttttttt', response.productId);
    }
  };

  // Call fetchShowCart() when component mounts
  useEffect(() => {
    fetchShowCart();
  }, []);

  console.log('dataaaaâaaaaa', data);
  if (data && data.length) {
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      console.log('element', item);
    }
  }
  // if (data && data.productId.length != null) {
  // If there are cart items, render the items
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Giỏ hàng</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.groupBody}>
          <View style={styles.viewCheckBox}>
            <CheckBox checked={checked} onPress={() => setChecked(!checked)} />
            <Text>Chọn tất cả sản phẩm</Text>
          </View>
          <View>
            <FlashList
            />
            <View>
              <Image
                style={{width: 110, height: 120, borderRadius: 10}}
                source={{uri: image}}
              />
            </View>
            <View></View>
          </View>
        </View>
      </View>
    </View>
  );
  // } else {
  //   return (
  //       <CartNoItem />
  //   );
  // }
};

export default ScreenCart;
