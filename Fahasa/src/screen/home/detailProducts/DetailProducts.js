import {StyleSheet, Text, View, Image,TextInput,TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import AxiosIntance from '../../../ultil/AxiosIntance';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

import styles from './Styles';
const DetailProducts = ({route}) => {
  const {id} = route.params;
  const [data, setdata] = useState('');
  const [quantity, setQuantity] = useState(1);
  console.log('====================================');
  console.log('itesmId**s****ssssss****', id);
  console.log('====================================');
  const Plus = () => {
    setQuantity(quantity + 1);
  };
  
  const Minus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const fetchProductsData = async () => {
    try {
      const response = await AxiosIntance().get(`product/${id}/detail`);
      console.log('Produsssct Response:', response.product);
      setdata(response.product);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

  console.log('====================================', data);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>sadsada</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.viewImageProducts}>
          <Image style={styles.imageProducts} source={{uri: data.image}} />
        </View>
        <View style={styles.viewNameProducts}>
          <Text style={styles.nameProducts}>{data.name}</Text>
        </View>
        <View style={styles.viewHeart}>
          <IconAntDesign name="hearto" size={25} color="black" />
        </View>
        <View style={styles.groupPrice}>
          <View style={styles.viewNewPrice}>
            <Text style={styles.newPriceItem}>{data.price} đ</Text>
          </View>
          <View style={styles.viewOldPrice}>
            <Text style={styles.oldPriceItem}>
              {' '}
              {data.discount == 1
                ? data.price
                : (data.oldPrice = (
                    Math.round(
                      ((parseFloat(data.price) * 100) / data.discount) * 10,
                    ) / 10
                  ).toFixed(3))}
            </Text>
          </View>
          <View style={styles.viewDiscountItem}>
            <Text style={styles.discountItem}>{data.discount}</Text>
          </View>
        </View>
        <View style={styles.information}>
          <View style={styles.viewInformation}>
            <Text style={styles.textInfomation}>Thông tin sản phẩm</Text>
          </View>
          <View style={styles.infoProducts}>
            <View style={styles.viewName}>
              <Text>Mã hàng</Text>
            </View>
            <View style={styles.viewInfo}>
              <Text>{data.code}</Text>
            </View>
          </View>
          <View style={styles.infoProducts}>
            <View style={styles.viewName}>
              <Text>Tác giả</Text>
            </View>
            <View style={styles.viewInfo}>
              <Text>{data.description}</Text>
            </View>
          </View>
          <View style={styles.infoProducts}>
            <View style={styles.viewName}>
              <Text>Nhà sản xuất</Text>
            </View>
            <View style={styles.viewInfo}>
              <Text>{data.processingplace}</Text>
            </View>
          </View>
          <View style={styles.infoProducts}>
            <View style={styles.viewName}>
              <Text>Trọng lượng</Text>
            </View>
            <View style={styles.viewInfo}>
              <Text>{data.weight}</Text>
            </View>
          </View>
          <View style={styles.infoProducts}>
            <View style={styles.viewName}>
              <Text>Kích thước</Text>
            </View>
            <View style={styles.viewInfo}>
              <Text>{data.size}</Text>
            </View>
          </View>
        </View>
        <View style={styles.groupBTN}>
          <View style={styles.viewQuantity}>
            <View>
          <TouchableOpacity onPress={Plus}>

              <IconAntDesign name="minus" size={20} color="black" />
          </TouchableOpacity>

              </View>
            
            <View>
              <TextInput value={quantity.toString()} onChangeText={(value) => setQuantity(parseInt(value))} />
            </View>
            <View>
            <IconAntDesign name="plus" size={20} color="black" />
            </View>
          </View>
          <View>
            <Text>Thêm vào giỏ hàng</Text>
          </View>
          <View>
            <Text>Mua ngay</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailProducts;
