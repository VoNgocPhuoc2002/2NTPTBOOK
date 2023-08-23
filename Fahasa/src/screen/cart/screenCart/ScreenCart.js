import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  RefreshControl,
  Alert,
} from 'react-native';
import AxiosIntance from '../../../ultil/AxiosIntance';
import {getUserId} from '../../../ultil/GetUserId';
import styles from './Styles';
import {CheckBox} from 'react-native-elements';
import {useFocusEffect} from '@react-navigation/native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {AppContext} from '../../../ultil/AppContext';
import {FlashList} from '@shopify/flash-list';
import { Constants } from '../../../Constant';

const ScreenCart = ({navigation}) => {
  const [data, setData] = useState([]);
  const [selectedItems, setSelectedItems] = useState({});
  const [checkAll, setCheckAll] = useState(false);
  const [refreshing, setRefreshing] = useState();
  const {setIsTotalPrice} = useContext(AppContext);
  const {setSelectedProducts} = useContext(AppContext);

  console.log('selectedItems', selectedItems);
  console.log('data', data);
  // Function to fetch cart items
  const fetchShowCart = async () => {
    const fetchedUserId = await getUserId();
    if (fetchedUserId) {
      const response = await AxiosIntance().get(
        `cart/${fetchedUserId}/getcartitems`,
      );
      setData(response.products);
    }
  };

  // Hàm xử lý khi kéo xuống để refresh
  const onRefresh = () => {
    setRefreshing(true);
    // Thực hiện các tác vụ refresh cần thiết ở đây
    fetchShowCart();

    // Giả lập tác vụ refresh trong 2 giây
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  useEffect(() => {
    // Call fetchShowCart() when component mounts
    fetchShowCart();
  }, []);

  // Function to handle checkbox toggle for individual items
  const handleCheckbox = productId => {
    setSelectedItems(prevSelectedItems => ({
      ...prevSelectedItems,
      [productId]: !prevSelectedItems[productId],
    }));
  };

  // Function to handle checkbox toggle for "Select All"
  const handleSelectAll = () => {
    setCheckAll(prevCheckAll => !prevCheckAll);
    if (!checkAll) {
      // If "Select All" is checked, set all items as selected
      const allSelected = data.reduce((acc, item) => {
        acc[item._id] = true;
        return acc;
      }, {});
      console.log('allSelected', allSelected);
      setSelectedItems(allSelected);
    } else {
      // If "Select All" is unchecked, clear all selected items
      setSelectedItems({});
    }
  };
  const removeCartItem = async productId => {
    const userId = await getUserId();
    try {
      await AxiosIntance().delete(`cart/${userId}/removecartitem`, {
        data: {
          productId: productId,
        },
      });
      // Refresh the cart after removal
      fetchShowCart();
    } catch (error) {
      // Handle the error
      console.error('Error removing cart item', error);
    }
  };
  const removeAllItem = async () => {
    const userId = await getUserId();
    try {
      await AxiosIntance().delete(`cart/${userId}/removeAllCartItems`);
      // Refresh the cart after removal
      fetchShowCart();
    } catch (error) {
      // Handle the error
      console.error('Error removing cart item', error);
    }
  };

  // tăng giảm số lượng sản phẩm
  const increaseQuantity = async productId => {
    try {
      const userId = await getUserId();
      const response = await AxiosIntance().post(
        `cart/${userId}/updatecartitem`,
        {
          productId: productId,
          quantity: 1, // You can adjust the quantity increment as needed (e.g., 1, 5, etc.)
        },
      );
      // Refresh the cart after updating the quantityfl
      fetchShowCart();
    } catch (error) {
      console.error('Error updating cart item quantity', error);
    }
  };

  const decreaseQuantity = async productId => {
    try {
      const userId = await getUserId();
      const response = await AxiosIntance().post(
        `cart/${userId}/updatecartitem`,
        {
          productId: productId,
          quantity: -1, // To decrease, use a negative value (e.g., -1, -5, etc.)
        },
      );
      // Refresh the cart after updating the quantity
      fetchShowCart();
    } catch (error) {
      console.error('Error updating cart item quantity', error);
    }
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const item of data) {
      if (selectedItems[item._id]) {
        totalPrice += item.price * item.quantity;
      }
    }
    setIsTotalPrice(totalPrice);
    

    return totalPrice;
  };

  const handlePay = () => {
    const hasSelectedProduct = Object.values(selectedItems).some(
      isSelected => isSelected,
    );
    // Nếu không có sản phẩm nào được chọn, hiển thị thông báo lỗi và không chuyển đến ScreenOrder1
    if (!hasSelectedProduct) {
      Alert.alert('Vui lòng chọn ít nhất một sản phẩm để thanh toán.');
      return;
    }
    const selectedProducts = {};
    for (const item of data) {
      if (selectedItems[item._id]) {
        selectedProducts[item._id] = {
          productId: item.productId,
          image: item.image,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        };
        setSelectedProducts(selectedProducts);
      }
    }
    console.log('selectedProducts', selectedProducts);

    // Tiến hành navigation đến ScreenOrder1 và truyền thông tin các sản phẩm được chọn
    navigation.navigate('ScreenOrder1', {selectedProducts});
  };

  const renderItem = ({item}) => {
    const isSelected = selectedItems[item._id] || false;
    console.log('isSelected', isSelected);
    const handleRemoveItem = productId => {
      // Call the removeCartItem function with the product ID of the item to be removed
      removeCartItem(productId);
      console.log('productsId: ', productId);
    };
    const amount = item.price;

    function formatCurrency(amount) {
      if (!item) {
        return '';
      }
  
      const formattedAmount = amount.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND',
      });
  
      // Trả về kết quả
      return formattedAmount;
    }
    const newPrice = formatCurrency(amount);
    return (
      <View style={styles.boxItem}>
        <View style={styles.item}>
          <View style={{width: 50, alignItems: 'center'}}>
            <CheckBox
              checked={isSelected}
              onPress={() => handleCheckbox(item._id)}
            />
          </View>
          <View
            style={{
              backgroundColor: 'white',
              width: 140,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image style={styles.imgItem} source={{uri: item.image}} />
          </View>
          <View>
            <View style={styles.viewText}>
              <Text style={styles.textTitle}>
                {item.name.length > 50
                  ? item.name.substring(0, 60) + '...'
                  : item.name}
              </Text>
              <Text style={styles.textPrice}>{newPrice}</Text>
            </View>
            <View style={styles.viewGroupQuantity}>
              <View style={styles.viewQuantity}>
                <TouchableOpacity
                  style={styles.btnMinus}
                  onPress={() => decreaseQuantity(item.productId)}>
                  <IconEntypo name="minus" size={25} color="black" />
                </TouchableOpacity>
                <View style={styles.textQuantity}>
                  <TextInput style={styles.textip}>{item.quantity}</TextInput>
                </View>
                <TouchableOpacity
                  style={styles.btnPlus}
                  onPress={() => increaseQuantity(item.productId)}>
                  <IconEntypo name="plus" size={25} color="black" />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.btnRemove}
                onPress={() => handleRemoveItem(item.productId)}>
                <IconAntDesign name="delete" size={30} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {data.length !== 0 ? (
        <View style={{flex:1}}>
          <View style={styles.header}>
            <Text style={styles.title}>Giỏ hàng</Text>
          </View>
          <View style={styles.body}>
              <View style={styles.groupBody}>
                <View style={styles.viewGroupCheckBox}>
                  <View style={styles.viewCheckBox}>
                    <CheckBox checked={checkAll} onPress={handleSelectAll} />
                    <Text>Chọn tất cả sản phẩm</Text>
                  </View>
                  <View>
                    <TouchableOpacity onPress={removeAllItem}>
                      <IconAntDesign name="delete" size={25} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
                <FlatList
                   refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                  }
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item._id}
                    initialNumToRender={3}
                    estimatedItemSize={200}
                  />
                 
              </View>
          </View>
          <View style={styles.footer}>
            <View style={styles.viewThanhTien}>
              <Text style={styles.textThanhTien}>Thành tiền</Text>
              <Text style={styles.sumPrice}> {calculateTotalPrice()}đ</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.btnThanhToan} onPress={handlePay}>
                <Text style={styles.textThanhToan}>Thanh toán</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <View style={{flex:1}}>
            <View style={styles.header}>
        <View style={styles.titleScreen}>
          <Text style={styles.textTitleScreen}>Giỏ hàng</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={{alignItems: 'center',marginTop:200,}}>
          <Image
            style={{width: 200, height: 150}}
            source={require('../../../assets/LogoApp.png')}
          />
          <View style={{marginTop: 10, alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                color: Constants.COLOR.BLACK,
              }}>
              Chưa có sản phẩm trong giỏ hàng của bạn
            </Text>
           
          </View>
          <TouchableOpacity style={styles.viewBTN}  onPress={()=>{
            navigation.navigate("HomeScreen");
          }}>
              <View>
                <Text style={styles.btn}>Mua sắm ngay</Text>
              </View>
            </TouchableOpacity>
        </View>
      </View>
        </View>
      )}
    </View>
  );
};

export default ScreenCart;
