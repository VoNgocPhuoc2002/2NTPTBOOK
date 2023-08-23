import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from 'react-native';

import React, {useCallback, useContext, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './Styles';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';
import AxiosIntance from '../../ultil/AxiosIntance';
import {getUserId} from '../../ultil/GetUserId';
import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppContext} from '../../ultil/AppContext';

const ProfileScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [mobile, setMobile] = useState('');
  const [gender, setGender] = useState('');
  const [dateofbirth, setDateofBirth] = useState('');
  const [email, setEmail] = useState('');

  const [refreshing, setRefreshing] = useState(false);

  const {setIsLogin} = useContext(AppContext);
  // Hàm xử lý khi kéo xuống để refresh
  const onRefresh = () => {
    setRefreshing(true);
    // Thực hiện các tác vụ refresh cần thiết ở đây
    // Ví dụ: tải dữ liệu mới, đặt lại trạng thái, vv.

    // Giả lập tác vụ refresh trong 2 giây
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  useFocusEffect(
    useCallback(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        fetchUserData();
      });
      fetchUserData();
      return unsubscribe;
    }),
  );
  const fetchUserData = async () => {
    const userId = await getUserId();
    if (userId) {
      const response = await AxiosIntance().get(
        `api/users/${userId}/updateProfile`,
      );
      console.log('User Response:', response);
      // Cập nhật state hoặc thực hiện các tác vụ khác với thông tin người dùng
      setName(response.users.name);
      setEmail(response.users.email);
      setCountry(response.users.country);
      setMobile(response.users.mobile);
      setGender(response.users.gender);
      setDateofBirth(response.users.dateofbirth);
    }
  };

  const handleEditProfile = () => {
    navigation.navigate('EditProfile');
  };
  const tab_history = () => {
    navigation.navigate('HistoryTab');
  };
  const handleMoveFavourite = () => {
    navigation.navigate('FavouriteScreen');
  };
  const handleLogout = async () => {
    await AsyncStorage.removeItem('userId');
    setIsLogin(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleScreen}>
          <Text style={styles.textTitleScreen}>Thành viên Fahasa.com</Text>
        </View>
      </View>

      <View style={styles.body}>
        <ScrollView
          contentContainerStyle={styles.scrollViewContainer}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <View style={styles.viewGroupIconProfile}>
            <Image
              style={styles.iconProfile}
              source={require('../../assets/IconProfile.jpg')}
            />
            <Text style={styles.textDescription}>
              Điểm tích luỹ 2023 : 0 F-Point
            </Text>
          </View>
          <TouchableOpacity onPress={handleEditProfile}>
            <View style={styles.groupUpdateProfile}>
              <View style={styles.rightUpdateProfile}>
                <IconIonicons
                  style={{marginEnd: 10}}
                  name="person-outline"
                  size={25}
                  color="black"
                />
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
              <Text style={styles.textProfile}>{name}</Text>
            </View>
            <View style={styles.viewProfile}>
              <View style={{marginEnd: 20}}>
                <Text style={styles.textProfile}>Email</Text>
              </View>
              <Text style={styles.textProfile}>{email}</Text>
            </View>
            <View style={styles.viewProfile}>
              <View style={{marginEnd: 20}}>
                <Text style={styles.textProfile}>Năm sinh</Text>
              </View>
              <Text style={styles.textProfile}>{dateofbirth}</Text>
            </View>
            <View style={styles.viewProfile}>
              <View style={{marginEnd: 20}}>
                <Text style={styles.textProfile}>Giới tính</Text>
              </View>
              <Text style={styles.textProfile}>{gender}</Text>
            </View>
            <View style={styles.viewProfile}>
              <View style={{marginEnd: 20}}>
                <Text style={styles.textProfile}>Ngày tháng sinh</Text>
              </View>
              <Text style={styles.textProfile}>{country}</Text>
            </View>
            <View style={styles.viewProfile}>
              <View style={{marginEnd: 20}}>
                <Text style={styles.textProfile}>Sô điện thoại</Text>
              </View>
              <Text style={styles.textProfile}>{mobile}</Text>
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
                <IconFontAwesome
                  style={{marginEnd: 10}}
                  name="map-marker"
                  size={25}
                  color="black"
                />
                <Text style={styles.textProfile}>Số địa chỉ</Text>
              </View>
              <View style={styles.leftUpdateProfile}>
                <Text>Quản lý địa chỉ</Text>
                <IconAntDesign name="right" size={25} color="black" />
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.lineFull}></View>

          <TouchableOpacity onPress={tab_history}>
            <View style={styles.groupUpdateProfile}>
              <View style={styles.rightUpdateProfile}>
                <IconAntDesign
                  style={{marginEnd: 10}}
                  name="calendar"
                  size={25}
                  color="black"
                />
                <Text style={styles.textProfile}>Lịch sử mua hàng</Text>
              </View>
              <View style={styles.leftUpdateProfile}>
                <Text>Xem thêm</Text>
                <IconAntDesign name="right" size={25} color="black" />
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.lineFull}></View>

          <TouchableOpacity onPress={handleMoveFavourite}>
            <View style={styles.groupUpdateProfile}>
              <View style={styles.rightUpdateProfile}>
                <IconAntDesign
                  style={{marginEnd: 10}}
                  name="hearto"
                  size={25}
                  color="black"
                />
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
                <IconEntypo
                  style={{marginEnd: 10}}
                  name="wallet"
                  size={25}
                  color="black"
                />
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
                <IconEntypo
                  style={{marginEnd: 10}}
                  name="wallet"
                  size={25}
                  color="black"
                />
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
                <IconEntypo
                  style={{marginEnd: 10}}
                  name="open-book"
                  size={25}
                  color="black"
                />

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
                <IconEntypo
                  style={{marginEnd: 10}}
                  name="network"
                  size={25}
                  color="black"
                />
                <Text style={styles.textProfile}>Hỗ trợ</Text>
              </View>
              <View style={styles.leftUpdateProfile}>
                <Text>Xem thêm</Text>
                <IconAntDesign name="right" size={25} color="black" />
              </View>
            </View>
          </TouchableOpacity>
          <View
            style={{
              height: 80,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity style={styles.viewBTN} onPress={handleLogout}>
              <View>
                <Text style={styles.btn}>Đăng xuất</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
