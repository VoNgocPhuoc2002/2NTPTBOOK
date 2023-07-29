import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList, Image} from 'react-native'
import React, {useState} from 'react'
import styles from './Styles'
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { Constants } from '../../../Constant'
import { FlashList } from '@shopify/flash-list';
const ScreenOrderDetail = () => {

    const data = [
        {
          id: '1',
          image: require('../../../assets/sach1.png'),
          name: 'Bí quyết Học Bài Mau Thuộc',
          price: "7.000 đ",
          quantity: 1,
          sumPrice: "7.000 đ"
        },
        {
          id: '2',
          image: require('../../../assets/sach2.png'),
          name: 'Quà Tặng Lịch TÚi Hương Trang Ngẫu Nhiên',
          price: "0 đ",
          quantity: 1,
          sumPrice: "0 đ"
        },
        // {
        //     id: '3',
        //     image: require('../../../assets/sach2.png'),
        //     name: 'Quà Tặng Lịch TÚi Hương Trang Ngẫu Nhiên',
        //     price: "0 đ",
        //     quantity: 1,
        //     sumPrice: "0 đ"
        //   },
      ];


    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
          <View style={styles.item_flex}>
            <Image source={item.image} style={styles.image} />
            <View  style={styles.allText}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.name}>Giá: {item.price}</Text>
              <Text style={styles.name}>Số lượng: {item.quantity}</Text>
              <Text style={styles.name}>Tổng tiền: {item.sumPrice}</Text>
            </View>
          </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.titleScreen}>
                <IconAntDesign
                style={styles.icon}
                name="arrowleft"
                size={30}
                color={Constants.COLOR.WHITE}
                />
                <Text style={styles.textTitleScreen}>
                    Chi tiết đơn hàng
                </Text>
                <Text style={styles.textTitleScreen}>
                    
                </Text>
            </View>
            <ScrollView>
            <View style={styles.viewOrder}>
                <Text style={styles.textCode} >Mã đơn hàng: <Text style={styles.textCode1}>402152529</Text></Text>
                <Text style={styles.btnWait}>Đơn hàng Chờ xác nhận</Text>
                <Text style={styles.textCode} >Số lượng: <Text style={styles.textCode1}>2 sản phẩm</Text></Text>
                <Text style={styles.textCode} >Tổng tiền: <Text style={styles.textCode1}>26.000 đ</Text></Text>
            </View>
            <View style={styles.listProduct}>
                <Text style={styles.textProduct}>Sản Phẩm</Text>
                <FlashList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item._id}
                />
            </View>
            <View style={styles.viewPayment}>
                <Text style={styles.textCode} >Thành tiền: <Text style={styles.textCode1}>7.000 đ</Text></Text>
                <Text style={styles.textCode} >Phí Vận chuyển: <Text style={styles.textCode1}>19.000 đ</Text></Text>
                <Text style={styles.textCode} >Thành tiền (Đã bao gồm VAT): <Text style={styles.textCode1}>26.000 đ</Text></Text>
            </View>
            </ScrollView>
        </View>
    )
}
 
export default ScreenOrderDetail;