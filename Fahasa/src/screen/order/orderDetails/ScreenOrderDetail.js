import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList, Image} from 'react-native'
import React, {useState,useEffect} from 'react'
import styles from './Styles'
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { Constants } from '../../../Constant'
import { FlashList } from '@shopify/flash-list';
const ScreenOrderDetail = ({route}) => {
  const {address,data} = route.params;
  const [cart,setCart] = useState("")
  const fetchData = ()=>{
    setCart(data.cart)

  }
  console.log("cart",cart)
  useEffect(() => {
    fetchData(); 
  }, []);
let count = 0;
for (const item of cart) {
  if (item._id != null) {
    count++;
  }
}
if (data.status === 'pending') {
  statusText = 'Chờ xác nhận';
  statusColor = '#ff5733';
  statusBackgroundColor = '#FFCC80'; // Màu cam nhạt
} else if (data.status === 'success') {
  statusText = 'Hoàn thành';
  statusColor = '#4caf50';
  statusBackgroundColor = '#A5D6A7'; // Màu xanh lá nhạt
} else if (data.status === 'fail') {
  statusText = 'Bị huỷ';
  statusColor = '#f44336';
  statusBackgroundColor = '#EF9A9A'; // Màu đỏ nhạt
}

function formatCurrency(amount) {
  const formattedAmount = amount.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
  return formattedAmount;
}
const Total = formatCurrency(data.total);
console.log("count",count)

  console.log("data",data)
    const RenderItem = ({ item }) => {
      console.log("item:sss ",item)
      const price = item.price
      const total = item.price *= item.quantity
      function formatCurrency(amount) {
        const formattedAmount = amount.toLocaleString('vi-VN', {
          style: 'currency',
          currency: 'VND',
        });
        return formattedAmount;
      }
      const newPrice = formatCurrency(price);
      const newTotal = formatCurrency(total);
      return(
        <View style={styles.itemContainer}>
          <View style={styles.item_flex}>
            <Image  source={{uri: item.image}} style={styles.image} />
            <View  style={styles.allText}>
              <Text style={styles.name}>{item.name} </Text>
              <Text style={styles.name}>Giá: {newPrice}</Text>
              <Text style={styles.name}>Số lượng: {item.quantity}</Text>
              <Text style={styles.name}>Tổng tiên: {newTotal}</Text>
            </View>
          </View>
        </View>
    );
  }


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
            <View style={styles.viewOrder}>
                <Text style={styles.textCode} >Mã đơn hàng: <Text style={styles.textCode1}>{data._id}</Text></Text>
                <View
              style={{
                backgroundColor: statusBackgroundColor,
                padding: 5,
                borderRadius: 10,
                marginStart: 10,
                height:40,
                width:120,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontWeight: 'bold', color: statusColor}}>
                {statusText}
              </Text>
            </View>
                <Text style={styles.textCode} >Số lượng: <Text style={styles.textCode1}>{count} sản phẩm</Text></Text>
                <Text style={styles.textCode} >Tổng tiền: <Text style={styles.textCode1}>{Total}</Text></Text>
            </View>
            <View style={styles.listProduct}>
                <Text style={styles.textProduct}>Sản Phẩm</Text>
                <FlatList
                    data={cart}
                    renderItem={RenderItem}
                    keyExtractor={item => item._id}
                />
            </View>
        </View>
       
    )
}
 
export default ScreenOrderDetail;