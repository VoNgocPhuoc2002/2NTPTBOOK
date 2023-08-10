import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import DetailOrder from './detailOrders/DetailOrder';
import { useNavigation } from '@react-navigation/native'
import { getUserId } from '../../../ultil/GetUserId';
import AxiosIntance from '../../../ultil/AxiosIntance';

const HistoryTab = ({ navigation }) => {

    const fetchOrder = async () => {
        const userId = await getUserId();
        try {
          const response = await AxiosIntance().get(`order/${userId}/getorder`);
          console.log(response)
        } catch (error) {
          console.error('Error:', error);
        }
      };
      useEffect(() => {
        fetchOrder(); // Call the fetchUserData function
      }, []);
    
    const namesData = [
        // { id: '1', name: 'Alice' },
        // { id: '2', name: 'Bob' },
        // { id: '3', name: 'Charlie' },
        // Thêm các tên khác vào đây
    ];

    const [selectedTab, setSelectedTab] = useState('1'); // Mặc định chọn tab đầu tiên

    const tabsData = [
        { id: '1', title: 'Tất cả', data: [...namesData, { id: '4', name: 'Chờ xác nhận' }] }, // Dữ liệu cho Tab 1
        { id: '2', title: 'Chờ thanh toán', data: namesData }, // Dữ liệu cho Tab 2
        { id: '3', title: 'Chờ xác nhận', data: [...namesData, { id: '4', name: 'Chờ xác nhận' }] },
        { id: '4', title: 'Đang xử lý', data: namesData },
        { id: '6', title: 'Bị hủy', data: namesData },
        // { id: '6', title: 'Bị hủy',  data: [...namesData, { id: '4', name: 'David' }] }, <- tạo dữ liệu thêm vào như vậy
        // Thêm các tab item khác với dữ liệu tương ứng
    ];

    const renderItem = ({ item }) => {
        return (
            <View style={styles.nameItem}>
                <Text>{item.name}</Text>
            </View>
        );
    };

   

    const handleNavigate = () => {
        navigation.navigate('DetailOrder'); // Mở màn hình 'DetailOrder' đang bị lỗi
      };

    const renderTabItem = ({ item }) => {
        const isSelected = item.id === selectedTab;

        return (
            <TouchableOpacity
                style={[styles.tabItem, isSelected && styles.tabItemSelected]}
                onPress={() => setSelectedTab(item.id)}>
                <Text style={{ color: isSelected ? 'orange' : 'black', fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
            </TouchableOpacity>
        );
    };

    const selectedTabData = tabsData.find((tab) => tab.id === selectedTab);

    return (
        <ScrollView>
            <View style={styles.tabBarContainer}>
                <FlatList
                    data={tabsData}
                    renderItem={renderTabItem}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <TouchableOpacity onPress={handleNavigate}>
                <FlatList
                    data={selectedTabData?.data || []}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    horizontal
                />
            </TouchableOpacity>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    tabBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
    },
    tabItem: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',

    },
    tabItemSelected: {
        backgroundColor: '#e6e6e6',
    },
    nameItem: {
        padding: 10,
        backgroundColor: '#f2f2f2',
        margin: 5,
        borderRadius: 5,
    },
});

export default HistoryTab;
