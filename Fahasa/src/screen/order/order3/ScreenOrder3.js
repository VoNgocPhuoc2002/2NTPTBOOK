import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native'
import React,{useContext} from 'react'
import styles from './Styles';
import { FlashList } from '@shopify/flash-list';
import MenuOrder from '../MenuOrder';
import { getUserId } from '../../../ultil/GetUserId';
import { AppContext } from '../../../ultil/AppContext';
import AxiosIntance from '../../../ultil/AxiosIntance';

const ScreenOrder3 = ({navigation}) => {
  const {selectedProducts,isTotalPrice,isAddressId} = useContext(AppContext)
  console.log("ScreenOrder3",{selectedProducts,isTotalPrice,isAddressId})

  const handlePayOrderDetail = () => {
  };
  const createOrder = async () => {
    const fetchedUserId = await getUserId();
    if (fetchedUserId) {
      const cart = Object.values(selectedProducts); // Convert selectedProducts to an array of objects
      const requestData = {
        cart:cart,
        total: isTotalPrice,
        addressId: isAddressId,
      };
      console.log('requestData:', requestData);
      const response = await AxiosIntance().post(
        `order/${fetchedUserId}/addorder`,requestData
      );
      console.log("createOrder",response)
    }

  };
  const data = [
    {
      id: '1',
      image: require('../../../assets/sach1.png'),
      name: 'Sản phẩm 1',
      quantity: 10,
      price: 100000,
    },
    {
      id: '2',
      image: require('../../../assets/sach2.png'),
      name: 'Sản phẩm 2',
      quantity: 15,
      price: 150000,
    },

  ];
  const renderItem = (item) => {
    return(
      <View key={item.id} style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.quantity}>Số lượng: {item.quantity}</Text>
        <Text style={styles.price}>Giá: {item.price} đ</Text>
      </View>
    </View>
    )
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
        <View style={styles.titleScreen}>
          <Text style={styles.textTitleScreen}>
              Kiểm tra lại đơn hàng
          </Text>
      </View>
          <View>
        <MenuOrder selectedType={3}/>
      </View>

          <View style={styles.DT}>
              <FlashList
                data={selectedProducts}
                renderItem={({item}) => <renderItem item={item}/>}
                horizontal
                initialNumToRender={3}
                estimatedItemSize={200}
              />
             
          
          </View>

          <View style={styles.GTDH}>
            <Text style={styles.GTDH_Text1}>Tổng số tiền :</Text>
            <Text style={styles.GTDH_Text2}>99999999999 đ</Text>
          </View>

          <View style={styles.TT}>
            <TouchableOpacity onPress={createOrder}>
              <Text style={styles.TT_Text}>Thanh toán</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default ScreenOrder3

