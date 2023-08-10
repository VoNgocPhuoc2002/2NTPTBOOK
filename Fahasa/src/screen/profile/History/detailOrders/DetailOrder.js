import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../detailOrders/Styles';
import AxiosIntance from '../../../../ultil/AxiosIntance';

const DetailOrder = ({route} ) => {
  // const { orderId } = route.params;
  // console.log("responsdsae", orderId)

  const fetchShowDetailOrder = async () => {
    // if(orderId){
      const response = await AxiosIntance().get(`order/64c3955422bf5302a1d179ce/getorderDetail`);
      console.log("repose", response)
    // }
     
  };
 



  return (
    

    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_Text}>Chi tiết đơn hàng</Text>
      </View>
      <ScrollView>

        <View style={styles.part1}>

          <View style={styles.part1_grtext}>
            <Text style={styles.part1_text}>Mã đơn hàng : </Text>
            <Text style={styles.part1_textB}>402934785</Text>
          </View>
          <View style={styles.part1_grtext}>
            <Text style={styles.part1_text}>Ngày mua : </Text>
            <Text style={styles.part1_textB}>24/07/2023</Text>
          </View>
          <View style={styles.part1_grtext}>
            <Text style={styles.part1_text}>Tổng tiền : </Text>
            <Text style={styles.part1_textB}>26.000 đ</Text>
          </View>

          <View style={styles.part1_grtext2}>
            <Text style={styles.part1_text2}>Đơn hàng chờ xác nhận</Text>
          </View>

          <Text style={styles.part1_text}>Thông tin hóa đơn : (Không có)</Text>
          <Text style={styles.part1_text}>Ghi chú : (Không có)</Text>

        </View>

        <View style={styles.title}>
          <Text style={styles.title_Text}>THÔNG TIN NGƯỜI NHẬN</Text>
        </View>

        <View style={styles.part1}>
          <Text style={styles.part1_text}>Võ Ngọc Phước</Text>
          <Text style={styles.part1_text}>562/39h Nguyễn Kiệm, Phường 4 Quận Phú Nhuận, TP.Hồ Chí Minh, Việt Nam</Text>
          <Text style={styles.part1_text}>0391234567</Text>
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

        <TouchableOpacity>
          <View style={styles.part1}>

            <View style={styles.part1_grtext}>
              <Text style={styles.part1_text}>Mã đơn hàng : </Text>
              <Text style={styles.part1_textB}>402934785</Text>
            </View>
            <View style={styles.part1_grtext}>
              <Text style={styles.part1_text}>Ngày mua : </Text>
              <Text style={styles.part1_textB}>24/07/2023</Text>
            </View>
            <View style={styles.part1_grtext}>
              <Text style={styles.part1_text}>Tổng tiền : </Text>
              <Text style={styles.part1_textB}>26.000 đ</Text>
            </View>

            <View style={styles.part1_grtext2}>
              <Text style={styles.part1_text2}>Đơn hàng chờ xác nhận</Text>
            </View>

          </View>
        </TouchableOpacity>

      </ScrollView>

      <TouchableOpacity onPress={fetchShowDetailOrder}>
        <View style={styles.bot}>
          <View style={styles.bottom}>
            <Text style={styles.bottom_Text}>Thanh toán</Text>
          </View>
        </View>


      </TouchableOpacity>

    </View>

  )
}

export default DetailOrder

