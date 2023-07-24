import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Styles';
import { FlashList } from '@shopify/flash-list';

const ScreenOrder3 = () => {
  const data = [
    {
      id: '1',
      image: require('../../../assets/sach1.png'),
      name: 'Sản phẩm 1',
      quantity: 10,
      price: 100000,
    },
    // {
    //   id: '2',
    //   image: require('../../../assets/sach2.png'),
    //   name: 'Sản phẩm 2',
    //   quantity: 15,
    //   price: 150000,
    // },

  ];
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.item_flex}>
        <Image source={item.image} style={styles.image} />
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>Giá: {item.price} đ</Text>
          <Text style={styles.quantity}>Số lượng: {item.quantity}</Text>
        </View>
      </View>
    </View>
  );
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.PT}>KIỂM TRA LẠI ĐƠN HÀNG</Text>
          </View>

          <View style={styles.DT}>
            {data.map((item) => (
              <View key={item.id} style={styles.itemContainer}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.infoContainer}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.quantity}>Số lượng: {item.quantity}</Text>
                  <Text style={styles.price}>Giá: {item.price} đ</Text>
                </View>
              </View>
            ))}
          </View>

          <View style={styles.GTDH}>
            <Text style={styles.GTDH_Text1}>Tổng số tiền :</Text>
            <Text style={styles.GTDH_Text2}>99999999999 đ</Text>
          </View>

          <View style={styles.TT}>
            <TouchableOpacity>
              <Text style={styles.TT_Text}>Thanh toán</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default ScreenOrder3

