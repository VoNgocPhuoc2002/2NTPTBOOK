import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState,useEffect} from 'react';
import styles from './Styles';
import AxiosIntance from '../../ultil/AxiosIntance';
import {getUserId} from '../../ultil/GetUserId';
import {FlashList} from '@shopify/flash-list';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

const FavouriteScreen = ({navigation}) => {
  const [data, setData] = useState('');
 
  useEffect(() => {
    // Call fetchShowCart() when component mounts
    handleGetHeartProduct();
  }, []);
  const handleDelete = async(id) => {
    const userId = await getUserId();
    console.log("id",id)
    console.log("userId",userId)
    if (!userId) {
      showAlert();
    } else {
      try {
        const response = await AxiosIntance().post(`heart/${userId}/RemoveFavourites`, {
          userId:userId,
          productId: id
        });
        handleGetHeartProduct()
        console.log("response",response)
      } catch (error) {
      
      }
    }
  }
  const handleGetHeartProduct = async () => {
    const userId = await getUserId();
    if (userId) {
      try {
        const response = await AxiosIntance().get(
          `heart/${userId}/GetFavourites`,
        );
        console.log('response', response);
        setData(response.productId);
      } catch (error) {}
    }
  };
  const handlePay = (id)=>{
    navigation.navigate("DetailProducts",{id: id})
  }

  const RenderItem = ({item}) => {
    console.log('item', item);
    const amount = item.price;
   
  
    function formatCurrency(amount) {
      if (!data) {
        return '';
      }
      const formattedAmount = amount.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND',
      });
  
      // Trả về kết quả
      return formattedAmount;
    }
    const Price = formatCurrency(amount);
    return (
      <View style={styles.boxItem}>
        <View style={styles.item}>
          <View
            style={{
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              width: '30%',
            }}>
            <Image style={styles.imgItem} source={{uri: item.image}} />
          </View>
          <View
            style={{
              width: '70%',
                justifyContent:"space-between",
            }}>
            <View style={styles.viewText}>
              <View>
                <View>
                  <Text style={styles.textTitle}>{item.name}</Text>
                </View>
                <View>
                  <Text style={styles.textPrice}>{Price}</Text>
                </View>
              </View>
            </View>
            <View style={styles.groupBuy}>
              <TouchableOpacity style={styles.btnBuy} onPress={()=>handlePay(item._id)}>
                <Text style={styles.textBuy}>Mua ngay</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnDelete} onPress={()=>handleDelete(item._id)}>
                <IconAntDesign name="delete" size={25} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleHeader}>Sản phảm yêu thích</Text>
      </View>
      <View style={styles.body}>
        <View style={{flex: 1}}>
          <FlashList
            data={data}
            renderItem={RenderItem}
            keyExtractor={item => item._id}
            initialNumToRender={3}
            estimatedItemSize={200}
          />
        </View>
      </View>
    </View>
  );
};

export default FavouriteScreen;
