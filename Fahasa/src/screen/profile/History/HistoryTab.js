import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import DetailOrder from './detailOrders/DetailOrder';
import {useNavigation} from '@react-navigation/native';
import {getUserId} from '../../../ultil/GetUserId';
import AxiosIntance from '../../../ultil/AxiosIntance';
import {FlashList} from '@shopify/flash-list';
import styles from './StylesHistoryTab';
import moment from 'moment';
import {color} from '@rneui/base';

const HistoryTab = ({navigation}) => {
  const [tabContent, settabContent] = useState('Tab 1');
  const [data, setData] = useState('');
  const handleTabPressHot = tabContent => {
    console.log('Active Tab Hot:', tabContent);
    settabContent(tabContent);
  };
  console.log('dataaaaaaaaaaaaa', data);

  const fetchOrder = async () => {
    const userId = await getUserId();
    try {
      const response = await AxiosIntance().get(`order/${userId}/getorder`);
      console.log(response);
      setData(response);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  useEffect(() => {
    fetchOrder(); // Call the fetchUserData function
  }, []);

  const namesData = [
    {id: '1', name: 'Alice'},
    {id: '2', name: 'Bob'},
    {id: '3', name: 'Charlie'},
    // Thêm các tên khác vào đây
  ];
  const handleDetail = (id) => {
    navigation.navigate("DetailOrder",{ id });
  };
  const RenderItem = ({item}) => {
    const formattedDate = moment(item.timeBuy, 'MMM D, YYYY').format(
      'MM/DD/YYYY',
    );

    let statusText = '';
    let statusColor = '';
    let statusBackgroundColor = '';

    if (item.status === 'pending') {
      statusText = 'Chờ xác nhận';
      statusColor = '#ff5733';
      statusBackgroundColor = '#FFCC80'; // Màu cam nhạt
    } else if (item.status === 'success') {
      statusText = 'Hoàn thành';
      statusColor = '#4caf50';
      statusBackgroundColor = '#A5D6A7'; // Màu xanh lá nhạt
    } else if (item.status === 'fail') {
      statusText = 'Bị huỷ';
      statusColor = '#f44336';
      statusBackgroundColor = '#EF9A9A'; // Màu đỏ nhạt
    }

    return (
      <TouchableOpacity onPress={() => handleDetail(item._id)}>
        <View style={styles.group}>
          <View style={styles.groupStatus}>
            <Text style={styles.code}>{item._id}</Text>
            <View
              style={{
                backgroundColor: statusBackgroundColor,
                padding: 5,
                borderRadius: 10,
                marginStart: 10,
              }}>
              <Text style={{fontWeight: 'bold', color: statusColor}}>
                {statusText}
              </Text>
            </View>
          </View>
          <Text style={styles.text}>Ngày mua : {formattedDate}</Text>
          <Text style={styles.text}>Tổng tiên : {item.total}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const handleNavigate = () => {
    navigation.navigate('DetailOrder'); // Mở màn hình 'DetailOrder' đang bị lỗi
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleHeader}>Lịch sử đơn hàng</Text>
      </View>
      <View style={styles.body}>
        <View>
          <ScrollView horizontal style={styles.tabContent}>
            <TouchableOpacity
              style={[styles.tabItem]}
              onPress={() => handleTabPressHot('Tab 1')}>
              <Text style={styles.titleContent}>Hoàn tất</Text>
              {tabContent === 'Tab 1' ? (
                <View style={styles.lineTitle}></View>
              ) : null}
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tabItem]}
              onPress={() => handleTabPressHot('Tab 2')}>
              <Text style={styles.titleContent}>Chờ xác nhận</Text>
              {tabContent === 'Tab 2' ? (
                <View style={styles.lineTitle}></View>
              ) : null}
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tabItem]}
              onPress={() => handleTabPressHot('Tab 3')}>
              <Text style={styles.titleContent}>Bị huỷ</Text>
              {tabContent === 'Tab 3' ? (
                <View style={styles.lineTitle}></View>
              ) : null}
            </TouchableOpacity>
          </ScrollView>
        </View>
        {tabContent === 'Tab 1' && data && data.length > 0 ? (
          <FlashList
            data={data.filter(item => item.status === 'success')}
            keyExtractor={item => item._id} // Sử dụng _id làm key
            renderItem={({item}) => <RenderItem item={item} />}
            initialNumToRender={3}
            estimatedItemSize={200}
          />
        ) : null}
        {tabContent === 'Tab 2' && data && data.length > 0 ? (
          <FlashList
            data={data.filter(item => item.status === 'pending')}
            keyExtractor={item => item._id} // Sử dụng _id làm key
            renderItem={({item}) => <RenderItem item={item} />}
            initialNumToRender={3}
            estimatedItemSize={200}
          />
        ) : null}
        {tabContent === 'Tab 3' && data && data.length > 0 ? (
          <FlashList
            data={data.filter(item => item.status === 'fail')}
            keyExtractor={item => item._id} // Sử dụng _id làm key
            renderItem={({item}) => <RenderItem item={item} />}
            initialNumToRender={3}
            estimatedItemSize={200}
          />
        ) : null}

        <TouchableOpacity onPress={fetchOrder}>
          <Text>btn</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HistoryTab;
