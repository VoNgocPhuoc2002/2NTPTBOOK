import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {FlashList} from '@shopify/flash-list';
import styles from './Styles';
import {useFocusEffect} from '@react-navigation/native';

const ListProducts = ({productData, navigation}) => {
  const [activeTabHot, setActiveTabHot] = useState('Tab 1');
  const handleTabPressHot = activeTabHot => {
    setActiveTabHot(activeTabHot);
  };
  const [activeTabSchool, setActiveTabSchool] = useState('Tab 4');
  const handleTabPressSChool = activeTabSchool => {
    setActiveTabSchool(activeTabSchool);
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
            {item.oldPrice = item.discount === 0 ? item.price : item.price + parseFloat(item.price * (item.discount / 100))}
          </Text>
          <View style={styles.line}></View>
        </View>
      </View>
    </TouchableOpacity>
    )
  return (
    <View>
      <View style={{ height: 400, alignItems: 'center',backgroundColor:"white"}}>
        <View style={styles.groupWorkspaces}>
          <View>
            <Text style={styles.title}>Xu Hướng Mua Sắm</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
          <ScrollView horizontal>
            <TouchableOpacity
              style={[
                styles.tabContent,
                activeTabHot === 'Tab 1' ? styles.activeTab : null,
              ]}
              onPress={() => handleTabPressHot('Tab 1')}>
              <Text
                style={
                  activeTabHot === 'Tab 1' ? styles.isTextTitle : styles.textTitle
                }>
                Xu hướng theo ngày
              </Text>
              {activeTabHot === 'Tab 1' ? (
                <View style={styles.lineTitle}></View>
              ) : null}
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tabContent,
                activeTabHot === 'Tab 2' ? styles.activeTab : null,
              ]}
              onPress={() => handleTabPressHot('Tab 2')}>
              <Text
                style={
                  activeTabHot === 'Tab 2' ? styles.isTextTitle : styles.textTitle
                }>
                Sách HOT - Giảm Sốc
              </Text>
              {activeTabHot === 'Tab 2' ? (
                <View style={styles.lineTitle}></View>
              ) : null}
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tabContent,
                activeTabHot === 'Tab 3' ? styles.activeTab : null,
              ]}
              onPress={() => handleTabPressHot('Tab 3')}>
              <Text
                style={
                  activeTabHot === 'Tab 3' ? styles.isTextTitle : styles.textTitle
                }>
                Bestseller - Ngoại Văn
              </Text>
              {activeTabHot === 'Tab 3' ? (
                <View style={styles.lineTitle}></View>
              ) : null}
            </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={styles.groupItem}>
            <ScrollView style={{width: '100%'}}>
              {activeTabHot === 'Tab 1' ? (
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
              {activeTabHot === 'Tab 2' ? (
                <FlashList
                  data={productData.filter(
                    item => item.categoryId.name === 'BookHot',
                  )}
                  renderItem={({item}) => <RenderItem item={item} />}
                  horizontal
                  initialNumToRender={3}
                  estimatedItemSize={200}
                />
              ) : null}
              {activeTabHot === 'Tab 3' ? (
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
      <View style={{ height: 450, alignItems: 'center',backgroundColor:"white"}}>
        <View style={styles.groupWorkspaces}>
          <View>
            <Text style={styles.title}>Sách Giáo Khoa</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <ScrollView horizontal>
            <TouchableOpacity
              style={[
                styles.tabContent,
                activeTabSchool === 'Tab 4' ? styles.activeTab : null,
              ]}
              onPress={() => handleTabPressSChool('Tab 4')}>
              <Text
                style={
                  activeTabSchool === 'Tab 4' ? styles.isTextTitle : styles.textTitle
                }>
                  ComBo Sách Giáo Khoa
              </Text>
              {activeTabSchool === 'Tab 4' ? (
                <View style={styles.lineTitle}></View>
              ) : null}
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tabContent,
                activeTabSchool === 'Tab 5' ? styles.activeTab : null,
              ]}
              onPress={() => handleTabPressSChool('Tab 5')}>
              <Text
                style={
                  activeTabSchool === 'Tab 5' ? styles.isTextTitle : styles.textTitle
                }>
                  Sách Giáo Khoa Cấp 1
              </Text>
              {activeTabSchool === 'Tab 5' ? (
                <View style={styles.lineTitle}></View>
              ) : null}
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tabContent,
                activeTabSchool === 'Tab 6' ? styles.activeTab : null,
              ]}
              onPress={() => handleTabPressSChool('Tab 6')}>
              <Text
                style={
                  activeTabSchool === 'Tab 6' ? styles.isTextTitle : styles.textTitle
                }>
                Sách Giáo Khoa Cấp 2

              </Text>
              {activeTabSchool === 'Tab 6' ? (
                <View style={styles.lineTitle}></View>
              ) : null}
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tabContent,
                activeTabSchool === 'Tab 7' ? styles.activeTab : null,
              ]}
              onPress={() => handleTabPressSChool('Tab 7')}>
              <Text
                style={
                  activeTabSchool === 'Tab 7' ? styles.isTextTitle : styles.textTitle
                }>
                Sách Giáo Khoa Cấp 3

              </Text>
              {activeTabSchool === 'Tab 7' ? (
                <View style={styles.lineTitle}></View>
              ) : null}
            </TouchableOpacity>
            </ScrollView>

          </View>
          <View style={styles.groupItem}>
            <ScrollView style={{width: '100%'}}>
              {activeTabSchool === 'Tab 4' ? (
                <FlashList
                  data={productData.filter(
                    item => item.categoryId.name === 'SchoolBookAll',
                  )}
                  renderItem={({item}) => <RenderItem item={item} />}
                  horizontal
                  initialNumToRender={3}
                  estimatedItemSize={200}
                />
              ) : null}
              {activeTabSchool === 'Tab 5' ? (
                <FlashList
                  data={productData.filter(
                    item => item.categoryId.name === 'SchoolBook1',
                  )}
                  renderItem={({item}) => <RenderItem item={item} />}
                  horizontal
                  initialNumToRender={3}
                  estimatedItemSize={200}
                />
              ) : null}
              {activeTabSchool === 'Tab 6' ? (
                <FlashList
                  data={productData.filter(
                    item => item.categoryId.name === 'SchoolBook2',
                  )}
                  renderItem={({item}) => <RenderItem item={item} />}
                  horizontal
                  initialNumToRender={3}
                  estimatedItemSize={200}
                />
              ) : null}
              {activeTabSchool === 'Tab 7' ? (
                <FlashList
                  data={productData.filter(
                    item => item.categoryId.name === 'SchoolBook3',
                  )}
                  renderItem={({item}) => <RenderItem item={item} />}
                  horizontal
                  initialNumToRender={3}
                  estimatedItemSize={200}
                />
              ) : null}
            </ScrollView>
          </View>
        </View>
        <View style={styles.btnShow}>
          <Text style={styles.textShow}>Xem Thêm</Text>
        </View>
      </View>
    </View>
  );
};

export default ListProducts;
