import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import styles from './Styles';
import {Constants} from '../../../Constant';
import {getUserId} from '../../../ultil/GetUserId';
import AxiosIntance from '../../../ultil/AxiosIntance';

const DetailProducts = ({route, navigation}) => {
  const {id} = route.params;
  const [data, setdata] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [productId, setProductId] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // const [cartId, setCartId] = useState('');
  console.log('====================================');
  console.log('itesmId**s****ssssss****', id);
  console.log('====================================');
  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const moveToCart = () => {
    navigation.navigate('ScreenCart');
  };

  const fetchProductsData = async () => {
    try {
      const response = await AxiosIntance().get(`product/${id}/detail`);
      console.log('Produsssct Response:', response.product);
      setdata(response.product);
      setProductId(response.product._id);
      // setCartId(response.product._id)
    } catch (error) {
      console.error('Error:', error);
    }
  };
  useEffect(() => {
    fetchProductsData();
  }, []);

  const fetchAddToCart = async () => {
    const userId = await getUserId();
    if (userId) {
      const response = await AxiosIntance().post(`cart/${userId}/addtocart`, {
        userId: userId,
        productId: productId,
        quantity: quantity,
      });
      console.log('User Respossnse:', response);
    }
  };
  console.log('====================================', data);

  const moveToHome = () => {
    navigation.navigate('TabNavigation');
  };
  const moveToSearch = () => {
    navigation.navigate('SearchScreen');
  };
  const ToastAndroid = () => {
    ToastAndroid.show("Tính năng đang phát triển", ToastAndroid.SHORT)
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{marginStart: 20}}>
          <IconAntDesign name="left" size={25} color="white" />
        </View>
        <View style={styles.viewHeaderRight}>
          <TouchableOpacity onPress={moveToSearch}>
            <IconAntDesign name="search1" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={moveToHome}>
            <IconAntDesign name="home" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={moveToCart}>
            <IconAntDesign name="shoppingcart" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={ToastAndroid}>
            <IconEntypo name="dots-three-horizontal" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <ScrollView>
          <View style={styles.viewImageProducts}>
            <Image style={styles.imageProducts} source={{uri: data.image}} />
          </View>
          <View style={styles.viewNameProducts}>
            <Text style={styles.nameProducts}>{data.name}</Text>
          </View>
          <View style={styles.viewHeart}>
            <IconAntDesign name="hearto" size={25} color="#f19f31" />
          </View>
          <View style={styles.groupPrice}>
            <View style={styles.viewNewPrice}>
              <Text style={styles.newPriceItem}>{data.price} đ</Text>
            </View>
            <View style={styles.viewOldPrice}>
              <Text style={styles.oldPriceItem}>
                {
                  (data.oldPrice =
                    data.discount === 0
                      ? data.price
                      : data.price +
                        parseFloat(data.price * (data.discount / 100)))
                }
              </Text>
            </View>
            <View style={styles.viewDiscountItem}>
              <Text style={styles.discountItem}>{data.discount}%</Text>
            </View>
          </View>
          <View style={styles.information}>
            <View style={styles.viewInformation}>
              <Text style={styles.textInfomation}>Thông tin sản phẩm</Text>
            </View>
            <View style={styles.infoProducts}>
              <View style={styles.viewName}>
                <Text style={styles.textname}>Mã hàng</Text>
              </View>
              <View style={styles.viewInfo}>
                <Text style={styles.textname}>{data.code}</Text>
              </View>
            </View>
            <View style={styles.infoProducts}>
              <View style={styles.viewName}>
                <Text style={styles.textname}>Tác giả</Text>
              </View>
              <View style={styles.viewInfo}>
                <Text style={styles.textname}>{data.author}</Text>
              </View>
            </View>
            <View style={styles.infoProducts}>
              <View style={styles.viewName}>
                <Text style={styles.textname}>Nhà sản xuất</Text>
              </View>
              <View style={styles.viewInfo}>
                <Text style={styles.textname}>{data.processingplace}</Text>
              </View>
            </View>
            <View style={styles.infoProducts}>
              <View style={styles.viewName}>
                <Text style={styles.textname}>Trọng lượng</Text>
              </View>
              <View style={styles.viewInfo}>
                <Text style={styles.textname}>{data.weight}</Text>
              </View>
            </View>
            <View style={styles.infoProducts}>
              <View style={styles.viewName}>
                <Text style={styles.textname}>Kích thước</Text>
              </View>
              <View style={styles.viewInfo}>
                <Text style={styles.textname}>{data.size}</Text>
              </View>
            </View>
            <View style={styles.groupDescription}>
              <View>
                <Text style={styles.textInfomation}>
                  {data.titledescription}
                </Text>
              </View>
              <View>
                <Text style={styles.textname}>{data.description}</Text>
              </View>
            </View>
          </View>
          <View style={styles.groupBTN}>
            <View style={styles.viewQuantity}>
              <View style={styles.btnQuantity}>
                <TouchableOpacity onPress={handleMinus}>
                  <IconAntDesign name="minus" size={20} color="black" />
                </TouchableOpacity>
              </View>

              <View style={styles.viewInputQuantity}>
                <TextInput value={quantity.toString()} />
              </View>
              <View style={styles.btnQuantity}>
                <TouchableOpacity onPress={handlePlus}>
                  <IconAntDesign name="plus" size={20} color="black" />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              style={styles.viewbtnAddCart}
              onPress={fetchAddToCart}>
              <View>
                <Text style={styles.textbtnAddCart}>Thêm vào giỏ hàng</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.viewbtnBuy}>
              <Text style={styles.textbtnBuy}>Mua ngay</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default DetailProducts;
