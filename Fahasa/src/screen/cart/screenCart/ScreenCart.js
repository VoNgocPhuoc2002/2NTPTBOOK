import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image, TextInput, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import AxiosIntance from '../../../ultil/AxiosIntance';
import {getUserId} from '../../../ultil/GetUserId';
import CartNoItem from '../CartNoItem';
import styles from './Styles';
import {CheckBox} from 'react-native-elements';
import { FlashList } from '@shopify/flash-list';


const ScreenCart = () => {
  const [data, setData] = useState();
  const [checked, setChecked] = useState(false);
  const [image, setImgae] = useState('');
  const [quantity, setQuantity] = useState(1);

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

  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const DATA = [
    {
        id: '1',
        img: require('../../../assets/sach1.png'),
        title: 'Combo Sách Giáo Trình Chuẩn HSK 1 - Sách Bài Học',
        describe1: '1 x Giáo Trình Chuẩn HSK 1 - Sách Bài Tập (2021)',
        describe2: '1 x Giáo Trình Chuẩn HSK 1 (Tái bản 2022)',
        price: '270.606 đ',
    },
    {
      id: '2',
      img: require('../../../assets/sach2.png'),
      title: 'Combo Sách Muôn Kiếp Nhân Sinh Tập 1 + Không D...',
      describe1: '1 x Muôn Kiếp Nhân Sinh - Many Times, Many Lives',
      describe2: '1 x Không Diệt Không Sinh Đừng Sợ Hãi (Tái bản 2022)',
      price: '198.075 đ',
    },
    
  ]

  const Item = ({ item }) => (
    <View style={styles.boxItem}>
      <View style={styles.item}>
        <View>
         <CheckBox checked={checked} onPress={() => setChecked(!checked)} />
        </View>
        <View>
          <Image style={styles.imgItem} source={item.img}/>
        </View>
        <View>
          <View style={styles.viewText}>
            <Text style={styles.textTitle}>{item.title}</Text>
            <Text style={styles.textDescribe1}>{item.describe1}</Text>
            <Text style={styles.textDescribe2}>{item.describe2}</Text>
            <Text style={styles.textPrice}>{item.price}</Text>
          </View>
          <View style={styles.viewQuantity}>
            <TouchableOpacity style={styles.btnTru} onPress={handleMinus}>
              <Image style={styles.imgTru} source={require('../../../assets/dautru.png')} />
            </TouchableOpacity>
            <View style={styles.textQuantity}>
              <TextInput style={styles.textip} value={quantity.toString()} />
            </View>
            <TouchableOpacity style={styles.btnCong}  onPress={handlePlus}>
              <Image style={styles.imgTru} source={require('../../../assets/daucong.png')} />
            </TouchableOpacity>
            <TouchableOpacity  style={styles.btnRemove}>
              <Image style={styles.imgRemove} source={require('../../../assets/thungrac.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );


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
            <ScrollView>
            <FlatList style={styles.flatlist}
                data={DATA}
                numColumns={1}
                renderItem={({item}) => <Item item={item}/>}
                keyExtractor={item => item.id}/>
            </ScrollView>
            <View>
              <View style={styles.viewFooter}>
                <View style={styles.viewThanhTien}>
                  <Text style={styles.textThanhTien}>Thành tiền</Text>
                  <Text style={styles.sumPrice}>0 đ</Text>
                </View>
                <View >
                  <TouchableOpacity style={styles.btnThanhToan}>
                    <Text style={styles.textThanhToan}>Thanh toán</Text>
                  </TouchableOpacity>
                </View>
              </View>
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
