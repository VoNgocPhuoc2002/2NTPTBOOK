import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react'
import styles from '../detailOrders/Styles';
import AxiosIntance from '../../../../ultil/AxiosIntance';
import moment from 'moment';
import { getUserId } from '../../../../ultil/GetUserId';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DetailOrder = ({route,navigation}) => {
  const {id} = route.params;

  const[inforCart,setInforCart] = useState("")
  const[data,setData] = useState("")
  const[addressId,setAddressId] = useState("")
  const[address,setAddress] = useState("")

  const formattedDate = moment(data.timeBuy, "MMM D, YYYY").format("MM/DD/YYYY");



  const fetchShowDetailOrder = async () => {
    // if(orderId){
      const response = await AxiosIntance().get(`order/${id}/getorderDetail`);
      console.log("repose", response)
      setAddressId(response.addressId)
      setData(response)
   };
   const fetchShowDetailAdress = async () => {
    // if(orderId){
      const userId = await getUserId();
      const response = await AxiosIntance().get(`address/${userId}/${addressId}/getaddressdetail`);
      console.log("address", response)
      setAddress(response.address)
      console.log("userId", userId)

   };
   useEffect(() => {

    fetchShowDetailOrder(); // Call the fetchUserData function
    fetchShowDetailAdress();
  }, []);
  let statusText = '';
  let statusColor = '';
  let statusBackgroundColor = '';

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

  const handleDetailOrder = ()=>{
    navigation.navigate("ScreenOrderDetail",{data,address})
  }

  return (
    

    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_Text}>Chi tiết đơn hàng</Text>
      </View>
      <ScrollView>

        <View style={styles.part1}>

          <View style={styles.part1_grtext}>
            <Text style={styles.part1_text}>Mã đơn hàng : </Text>
            <Text style={styles.part1_textB}>{data._id}</Text>
          </View>
          <View style={styles.part1_grtext}>
            <Text style={styles.part1_text}>Ngày mua : </Text>
            <Text style={styles.part1_textB}>{formattedDate}</Text>
          </View>
          <View style={styles.part1_grtext}>
            <Text style={styles.part1_text}>Tổng tiền : </Text>
            <Text style={styles.part1_textB}>{data.total}</Text>
          </View>

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

          <Text style={styles.part1_text}>Thông tin xuất hóa đơn : (Không có)</Text>
          <Text style={styles.part1_text}>Ghi chú : (Không có)</Text>

        </View>

        <View style={styles.title}>
          <Text style={styles.title_Text}>THÔNG TIN NGƯỜI NHẬN</Text>
        </View>

        <View style={styles.part1}>
          <Text style={styles.part1_text}>{address.fullName}</Text>
          <Text style={styles.part1_text}>{address.addressLine4}, {address.addressLine3}, {address.addressLine2}, {address.addressLine1}</Text>
          <Text style={styles.part1_text}>{address.phoneNumber}</Text>
        </View>

        <View style={styles.title}>
          <Text style={styles.title_Text}>PHƯƠNG THỨC VẬN CHUYỂN</Text>
        </View>

        <View style={styles.part1}>
          <Text style={styles.part1_text}>Giao hàng tiêu chuẩn</Text>
        </View>

        <View style={styles.title}>
          <Text style={styles.title_Text}>PHƯƠNG THỨC THANH TOÁN</Text>
        </View>

        <View style={styles.part1}>
          <Text style={styles.part1_text}>Thanh toán khi nhận hàng</Text>
        </View>

        <View style={styles.title}>
          <Text style={styles.title_Text}></Text>
        </View>

        <TouchableOpacity onPress={()=>handleDetailOrder()}>
          <View style={styles.part1}>

            <View style={styles.part1_grtext}>
              <Text style={styles.part1_text}>Mã đơn hàng : </Text>
              <Text style={styles.part1_textB}>{data._id}</Text>
            </View>
            <View style={styles.part1_grtext}>
              <Text style={styles.part1_text}>Ngày mua : </Text>
              <Text style={styles.part1_textB}>{formattedDate}</Text>
            </View>
            <View style={styles.part1_grtext}>
              <Text style={styles.part1_text}>Tổng tiền : </Text>
              <Text style={styles.part1_textB}>{data.total}</Text>
            </View>

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

          </View>
        </TouchableOpacity>
              <TouchableOpacity onPress={fetchShowDetailAdress}>
                <Text>jksadghjsagjdhgsajg</Text>
              </TouchableOpacity>
      </ScrollView>
    </View>

  )
}

export default DetailOrder

