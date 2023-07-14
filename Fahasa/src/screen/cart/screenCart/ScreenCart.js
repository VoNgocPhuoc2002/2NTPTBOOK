import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState,useCallback} from 'react';
import AxiosIntance from '../../../ultil/AxiosIntance';
import {getUserId} from '../../../ultil/GetUserId';
import styles from './Styles';
import {CheckBox} from 'react-native-elements';
import {FlashList} from '@shopify/flash-list';
import { useFocusEffect } from '@react-navigation/native';

const ScreenCart = ({navigation}) => {
  const [data, setData] = useState();
  const [checked, setChecked] = useState(false);
  const [checkAll, setCheckAll] = useState(false);
  const [image, setImgae] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Function to fetch cart items
  const fetchShowCart = async () => {
    const userId = await getUserId();
    if (userId) {
      const response = await AxiosIntance().get(`cart/${userId}/getcartitems`);
      setData(response.products);
      console.log('cartttttttttaatttsttttaattaattttttttt', response.productId);
    }
  };
  useFocusEffect(
    useCallback(()=>{
      const unsubscribe = navigation.addListener('focus',()=>{
      fetchShowCart();
      })
      return unsubscribe
    })
  )

  // Call fetchShowCart() when component mounts
  useEffect(() => {
  },[]);


  const handlePlus = () => {
    setQuantity(quantity + 1);
  };
  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const Item = ({item}) => (
    <View style={styles.boxItem}>
      <View style={styles.item}>
        <View
          style={{backgroundColor: 'blue', width: 50, alignItems: 'center'}}>
          <CheckBox
          // checked={checked}
          // onPress={() => setChecked(prevChecked => !prevChecked)}
          />
        </View>
        <View style={{backgroundColor: 'green'}}>
          <Image style={styles.imgItem} source={{uri: item.image}} />
        </View>
        <View>
          <View style={styles.viewText}>
            <Text style={styles.textTitle}>{item.name}</Text>
            <Text style={styles.textPrice}>{item.price}</Text>
          </View>
          <View style={styles.viewQuantity}>
            <TouchableOpacity style={styles.btnTru} onPress={handleMinus}>
              <Image
                style={styles.imgTru}
                source={require('../../../assets/dautru.png')}
              />
            </TouchableOpacity>
            <View style={styles.textQuantity}>
              <TextInput style={styles.textip} value={quantity} />
            </View>
            <TouchableOpacity style={styles.btnCong} onPress={handlePlus}>
              <Image
                style={styles.imgTru}
                source={require('../../../assets/daucong.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnRemove}>
              <Image
                style={styles.imgRemove}
                source={require('../../../assets/thungrac.png')}
              />
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
        <ScrollView>
          <View style={styles.groupBody}>
            <View style={styles.viewCheckBox}>
              <CheckBox
              // checked={checkAll} onPress={checkAllItem}
              />
              <Text>Chọn tất cả sản phẩm</Text>
            </View>
            <View style={{}}>
              <FlashList
                data={data}
                numColumns={1}
                renderItem={({item}) => <Item item={item} />}
              />
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <View style={styles.viewThanhTien}>
          <Text style={styles.textThanhTien}>Thành tiền</Text>
          <Text style={styles.sumPrice}>0 đ</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.btnThanhToan}>
            <Text style={styles.textThanhToan}>Thanh toán</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ScreenCart;
