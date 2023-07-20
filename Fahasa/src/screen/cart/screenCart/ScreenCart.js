import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  RefreshControl
} from 'react-native';
import AxiosIntance from '../../../ultil/AxiosIntance';
import {getUserId} from '../../../ultil/GetUserId';
import styles from './Styles';
import {CheckBox} from 'react-native-elements';
import {useFocusEffect} from '@react-navigation/native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';

const ScreenCart = ({navigation}) => {
  const [data, setData] = useState([]);
  const [selectedItems, setSelectedItems] = useState({});
  const [checkAll, setCheckAll] = useState(false);
  const [refreshing, setRefreshing] = useState();

  // Function to fetch cart items
  const fetchShowCart = async () => {
    const fetchedUserId = await getUserId();
    if (fetchedUserId) {
      const response = await AxiosIntance().get(`cart/${fetchedUserId}/getcartitems`);
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
      setSelectedItems(allSelected);
    } else {
      // If "Select All" is unchecked, clear all selected items
      setSelectedItems({});
    }
  };
  const removeCartItem = async (productId) => {
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
  const increaseQuantity = async (productId) => {
    try {
      const userId = await getUserId();
      const response = await AxiosIntance().post(`cart/${userId}/updatecartitem`, {
        productId: productId,
        quantity: 1 , // You can adjust the quantity increment as needed (e.g., 1, 5, etc.)
      });
      // Refresh the cart after updating the quantity
      fetchShowCart();
    } catch (error) {
      console.error('Error updating cart item quantity', error);
    }
  };
  
  const decreaseQuantity = async (productId) => {
    try {
      const userId = await getUserId();
      const response = await AxiosIntance().post(`cart/${userId}/updatecartitem`, {
        productId: productId,
        quantity: -1, // To decrease, use a negative value (e.g., -1, -5, etc.)
      });
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
    return totalPrice;
  };

  
  const renderItem = ({item}) => {
    const isSelected = selectedItems[item._id] || false;
    const handleRemoveItem = (productId) => {
      // Call the removeCartItem function with the product ID of the item to be removed
      removeCartItem(productId);
      console.log("productsId: ",productId)
    };
    return (
      <View style={styles.boxItem}>
        <View style={styles.item}>
          <View
            style={{backgroundColor: 'blue', width: 50, alignItems: 'center'}}>
            <CheckBox
              checked={isSelected}
              onPress={() => handleCheckbox(item._id)}
            
            />
          </View>
          <View style={{backgroundColor: 'green'}}>
          <Image style={styles.imgItem} source={{uri: item.image}} />
        </View>
        <View>
          <View style={styles.viewText}>
            <Text style={styles.textTitle}>
            {item.name.length > 50
              ? item.name.substring(0, 60) + '...'
              : item.name}
            </Text>
            <Text style={styles.textPrice}>{item.price}</Text>
          </View>
          <View style={styles.viewGroupQuantity}>
            <View style={styles.viewQuantity}>
            <TouchableOpacity style={styles.btnMinus} onPress={() => decreaseQuantity(item.productId)} >
           
           <IconEntypo name="minus" size={25} color="black" />

          </TouchableOpacity>
          <View style={styles.textQuantity}>
            <TextInput style={styles.textip}>{item.quantity}</TextInput>
          </View>
          <TouchableOpacity style={styles.btnPlus} onPress={() => increaseQuantity(item.productId)}>
           <IconEntypo name="plus" size={25} color="black" />
            
          </TouchableOpacity>
            </View>
           
            <View>
            <TouchableOpacity style={styles.btnRemove} onPress={() => handleRemoveItem(item.productId)} >
                <IconAntDesign name="delete" size={25} color="black" />

            </TouchableOpacity>
            </View>
          </View>
        </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Giỏ hàng</Text>
      </View>
      <View style={styles.body}>
        <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
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
            <View style={{}}>
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item._id}
              />
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <View style={styles.viewThanhTien}>
          <Text style={styles.textThanhTien}>Thành tiền</Text>
          <Text style={styles.sumPrice}> {calculateTotalPrice()}đ</Text>
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
