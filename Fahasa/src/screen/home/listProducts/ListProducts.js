import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState,useEffect} from 'react';
import {FlashList} from '@shopify/flash-list';
import styles from './Styles';
import {useFocusEffect} from '@react-navigation/native';

const ListProducts = ({productData, navigation}) => {


  const [activeTab, setActiveTab] = useState('Tab 1');
  const handleTabPress = activeTab => {
    setActiveTab(activeTab);
  };

  const handleItemPress = id => {
    // Navigate to the detail screen with the item ID
    navigation.navigate('DetailProducts', {id: id});
  };
  console.log('Product Data sssssss:', productData);

  const RenderItem = ({item}) => (
    <TouchableOpacity onPress={() => handleItemPress(item._id)}>
      <View style={styles.viewItem}>
        <Image
          style={{width: 110, height: 120, borderRadius: 10}}
          source={{uri: item.image}}
        />
        <View style={styles.viewItemName}>
          <Text style={styles.nameItem}>
            {item.name.length > 30
              ? item.name.substring(0, 35) + '...'
              : item.name}
          </Text>
        </View>
        <View style={styles.viewItemNewPrice}>
          <Text style={styles.newPriceItem}>{item.price}</Text>
          <View style={styles.viewDiscountItem}>
            <Text style={styles.discountItem}>{item.discount}%</Text>
          </View>
        </View>
        <View style={styles.viewItemOldPrice}>
          <Text>
            {item.discount == 1
              ? item.price
              : (item.oldPrice = (
                  Math.round(
                    ((parseFloat(item.price) * 100) / item.discount) * 10,
                  ) / 10
                ).toFixed(3))}
          </Text>

          <View style={styles.line}></View>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={{flex: 1, height: 12000, alignItems: 'center'}}>
      <View style={styles.groupWorkspaces}>
        <View>
          <Text style={styles.title}>Xu Hướng Mua Sắm</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={[
              styles.tabContent,
              activeTab === 'Tab 1' ? styles.activeTab : null,
            ]}
            onPress={() => handleTabPress('Tab 1')}>
            <Text
              style={
                activeTab === 'Tab 1' ? styles.isTextTitle : styles.textTitle
              }>
              Xu hướng theo ngày
            </Text>
            {activeTab === 'Tab 1' ? (
              <View style={styles.lineTitle}></View>
            ) : null}
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabContent,
              activeTab === 'Tab 2' ? styles.activeTab : null,
            ]}
            onPress={() => handleTabPress('Tab 2')}>
            <Text
              style={
                activeTab === 'Tab 2' ? styles.isTextTitle : styles.textTitle
              }>
              Sách HOT - Giảm Sốc
            </Text>
            {activeTab === 'Tab 2' ? (
              <View style={styles.lineTitle}></View>
            ) : null}
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabContent,
              activeTab === 'Tab 3' ? styles.activeTab : null,
            ]}
            onPress={() => handleTabPress('Tab 3')}>
            <Text
              style={
                activeTab === 'Tab 3' ? styles.isTextTitle : styles.textTitle
              }>
              Bestseller - Ngoại Văn
            </Text>
            {activeTab === 'Tab 3' ? (
              <View style={styles.lineTitle}></View>
            ) : null}
          </TouchableOpacity>
        </View>
        <View style={styles.groupItem}>
          <ScrollView style={{width:"100%"}}>
            {activeTab === 'Tab 1' ? (
              <FlashList
                data={productData.filter(
                  item => item.categoryId.name === 'TrendByDay',
                )}
                renderItem={({item}) => <RenderItem item={item} />}
                horizontal
                initialNumToRender={3}
                estimatedItemSize={200}
              />
            ) : null}
            {activeTab === 'Tab 2' ? (
              <FlashList
                data={productData.filter(item => item.categoryId.name === 'BookHot')}
                renderItem={({item}) => <RenderItem item={item} />}
                horizontal
                initialNumToRender={3}
                estimatedItemSize={200}
              />
            ) : null}
            {activeTab === 'Tab 3' ? (
              <FlashList
                data={productData.filter(
                  item => item.categoryId.name === 'Bestseller',
                )}
                renderItem={({item}) => <RenderItem item={item} />}
                horizontal
                initialNumToRender={3}
                estimatedItemSize={15}
              />
            ) : null}
          </ScrollView>
        </View>
      </View>
      <View style={styles.btnShow}>
        <Text style={styles.textShow}>Xem Thêm</Text>
      </View>
    </View>
  );
};

export default ListProducts;
