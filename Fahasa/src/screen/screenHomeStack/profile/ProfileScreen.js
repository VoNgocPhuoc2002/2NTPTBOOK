import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';

import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './Styles';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

const ProfileScreen = ({navigation}) => {
  const MoveToLogin = () => {
    navigation.navigate('LoginScreen');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleScreen}>
          <Text style={styles.textTitleScreen}>Thành viên Fahasa.com</Text>
        </View>
      </View>
      
      <View style={styles.body}>
        <ScrollView>
        <View style={styles.viewGroupIconProfile}>
          <Image
            style={styles.iconProfile}
            source={require('../../../assets/IconProfile.jpg')}
          />
          <Text style={styles.textDescription}>
            Điểm tích luỹ 2023 : 0 F-Point
          </Text>
        </View>
        <TouchableOpacity>
          <View style={styles.groupUpdateProfile}>
            <View style={styles.rightUpdateProfile}>
              <IconIonicons style={{marginEnd:10,}} name="person-outline" size={25} color="black" />
              <Text style={styles.textProfile}>Thông tin tài khoản</Text>
            </View>
            <View style={styles.leftUpdateProfile}>
              <Text>Chỉnh sữa</Text>
              <IconAntDesign name="right" size={25} color="black" />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.lineFull}></View>
        <View style={styles.groupProfile}>
          <View style={styles.viewProfile}>
            <View style={{marginEnd: 20}}>
              <Text style={styles.textProfile}>Họ và tên</Text>
            </View>
            <Text style={styles.textProfile}>Họ và tên</Text>
          </View>
          <View style={styles.viewProfile}>
            <View style={{marginEnd: 20}}>
              <Text style={styles.textProfile}>Email</Text>
            </View>
            <Text style={styles.textProfile}>Email</Text>
          </View>
          <View style={styles.viewProfile}>
            <View style={{marginEnd: 20}}>
              <Text style={styles.textProfile}>Cấp độ thành viên</Text>
            </View>
            <Text style={styles.textProfile}>Cấp độ thành viên</Text>
          </View>
          <View style={styles.lineFull}></View>
          <View style={styles.viewProfile}>
            <View style={{marginEnd: 20}}>
              <Text style={styles.textProfile}>F-Point</Text>
            </View>
            <Text style={styles.textProfile}>F-Point</Text>
          </View>
          <View style={styles.viewProfile}>
            <View style={{marginEnd: 20}}>
              <Text style={styles.textProfile}>Freeship</Text>
            </View>
            <Text style={styles.textProfile}>0 lần</Text>
          </View>
          <View style={styles.viewProfile}>
            <View style={{marginEnd: 20}}>
              <Text style={styles.textProfile}>Bọc sách </Text>
            </View>
            <Text style={styles.textProfile}>Sắp diễn ra</Text>
          </View>
          <View style={styles.lineFull}></View>
          <View style={styles.viewProfile}>
            <View style={{marginEnd: 20}}>
              <Text style={styles.textProfile}>Số đơn hàng thành công</Text>
            </View>
            <Text style={styles.textProfile}>0 đơn hàng</Text>
          </View>
          <View style={styles.viewProfile}>
            <View style={{marginEnd: 20}}>
              <Text style={styles.textProfile}>Số tiền thanh toán</Text>
            </View>
            <Text style={styles.textProfile}>0 đ</Text>
          </View>
        </View>
        <TouchableOpacity>
          <View style={styles.groupUpdateProfile}>
            <View style={styles.rightUpdateProfile}>
              <IconIonicons style={{marginEnd:10,}} name="person-outline" size={25} color="black" />
              <Text style={styles.textProfile}>Số địa chỉ</Text>
            </View>
            <View style={styles.leftUpdateProfile}>
              <Text>Quản lý địa chỉ</Text>
              <IconAntDesign name="right" size={25} color="black" />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.lineFull}></View>

        <TouchableOpacity>
          <View style={styles.groupUpdateProfile}>
            <View style={styles.rightUpdateProfile}>
              <IconIonicons style={{marginEnd:10,}} name="person-outline" size={25} color="black" />
              <Text style={styles.textProfile}>Lịch sử mua hàng</Text>
            </View>
            <View style={styles.leftUpdateProfile}>
              <Text>Xem thêm</Text>
              <IconAntDesign name="right" size={25} color="black" />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.lineFull}></View>

        <TouchableOpacity>
          <View style={styles.groupUpdateProfile}>
            <View style={styles.rightUpdateProfile}>
              <IconIonicons style={{marginEnd:10,}} name="person-outline" size={25} color="black" />
              <Text style={styles.textProfile}>Lịch sử yêu thích</Text>
            </View>
            <View style={styles.leftUpdateProfile}>
              <Text>Xem thêm</Text>
              <IconAntDesign name="right" size={25} color="black" />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.lineFull}></View>

        <TouchableOpacity>
          <View style={styles.groupUpdateProfile}>
            <View style={styles.rightUpdateProfile}>
              <IconIonicons style={{marginEnd:10,}} name="person-outline" size={25} color="black" />
              <Text style={styles.textProfile}>Lịch sử dung F-Ponit</Text>
            </View>
            <View style={styles.leftUpdateProfile}>
              <Text>Xem thêm</Text>
              <IconAntDesign name="right" size={25} color="black" />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.lineFull}></View>

        <TouchableOpacity>
          <View style={styles.groupUpdateProfile}>
            <View style={styles.rightUpdateProfile}>
              <IconIonicons style={{marginEnd:10,}} name="person-outline" size={25} color="black" />
              <Text style={styles.textProfile}>Ví voucher</Text>
            </View>
            <View style={styles.leftUpdateProfile}>
              <Text>Xem thêm</Text>
              <IconAntDesign name="right" size={25} color="black" />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.lineFull}></View>

        <TouchableOpacity>
          <View style={styles.groupUpdateProfile}>
            <View style={styles.rightUpdateProfile}>
              <IconIonicons style={{marginEnd:10,}} name="person-outline" size={25} color="black" />
              <Text style={styles.textProfile}>Sách theo bộ</Text>
            </View>
            <View style={styles.leftUpdateProfile}>
              <Text>Xem thêm</Text>
              <IconAntDesign name="right" size={25} color="black" />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.lineFull}></View>

        <TouchableOpacity>
          <View style={styles.groupUpdateProfile}>
            <View style={styles.rightUpdateProfile}>
              <IconIonicons style={{marginEnd:10,}} name="person-outline" size={25} color="black" />
              <Text style={styles.textProfile}>Hoạt động F-Game</Text>
            </View>
            <View style={styles.leftUpdateProfile}>
              <Text>Xem thêm</Text>
              <IconAntDesign name="right" size={25} color="black" />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.lineFull}></View>

        <TouchableOpacity>
          <View style={styles.groupUpdateProfile}>
            <View style={styles.rightUpdateProfile}>
              <IconIonicons style={{marginEnd:10,}} name="person-outline" size={25} color="black" />
              <Text style={styles.textProfile}>Đổi ngôn ngữ</Text>
            </View>
            <View style={styles.leftUpdateProfile}>
              <Text>Xem thêm</Text>
              <IconAntDesign name="right" size={25} color="black" />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.lineFull}></View>

        <TouchableOpacity>
          <View style={styles.groupUpdateProfile}>
            <View style={styles.rightUpdateProfile}>
              <IconIonicons style={{marginEnd:10,}} name="person-outline" size={25} color="black" />
              <Text style={styles.textProfile}>Hỗ trợ</Text>
            </View>
            <View style={styles.leftUpdateProfile}>
              <Text>Xem thêm</Text>
              <IconAntDesign name="right" size={25} color="black" />
            </View>
          </View>
        </TouchableOpacity>
        <View style={{height:80,alignItems:"center",justifyContent:"center"}}>
            <TouchableOpacity style={styles.viewBTN} onPress={MoveToLogin}>
            <View >
            <Text style={styles.btn}>
                Đăng xuất
            </Text>
            </View>
            </TouchableOpacity>
        </View>

        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
