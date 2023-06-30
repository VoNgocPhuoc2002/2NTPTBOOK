
import {StyleSheet, Text, View, Image, ScrollView,TouchableOpacity} from 'react-native';
import React,{useState} from 'react';
import {FlashList} from '@shopify/flash-list';
import styles from './Styles';
const ListProducts = () => {
  const [activeTab, setActiveTab] = useState('Tab 1');
  const handleTabPress = activeTab => {
    setActiveTab(activeTab);
  };
  const data = [
    {
      id: 1,
      img: require('../../../assets/Catelog.png'),
      name: 'Developer',
      newPrice: '36.000',
      oldPrice: '90.000',
      discount: '-60',
      categoryID: 1,
    },
    {
      id: 2,
      img: require('../../../assets/Catelog.png'),
      name: 'Developer',
      newPrice: '36.000',
      oldPrice: '90.000',
      discount: '-60',
      categoryID: 1,
    },
    {
      id: 3,
      img: require('../../../assets/Catelog.png'),
      name: 'Developer',
      newPrice: '36.000',
      oldPrice: '90.000',
      discount: '-60',
      categoryID: 2
    },
    {
      id: 4,
      img: require('../../../assets/Catelog.png'),
      name: 'Developer',
      newPrice: '36.000',
      oldPrice: '90.000',
      discount: '-60',
      categoryID: 2
    },
    {
      id: 5,
      img: require('../../../assets/Catelog.png'),
      name: 'Developer',
      newPrice: '36.000',
      oldPrice: '90.000',
      discount: '-60',
      categoryID: 2
    },
    {
      id: 6,
      img: require('../../../assets/Catelog.png'),
      name: 'Developer',
      newPrice: '36.000',
      oldPrice: '90.000',
      discount: '-60',
      categoryID: 2
    },
  ];

  const RenderItem = ({item}) => (
    <View style={styles.viewItem}>
    <Image
      style={{width: 110, height: 120, borderRadius: 10}}
      source={item.img}
    />
    <View style={styles.viewItemName}>
      <Text style={styles.nameItem}>{item.name}</Text>
    </View>
    <View style={styles.viewItemNewPrice}>
      <Text style={styles.newPriceItem}>{item.newPrice}</Text>
      <View style={styles.viewDiscountItem}>
        <Text style={styles.discountItem}>{item.discount} %</Text>

      </View>
    </View>
    <View style={styles.viewItemOldPrice}>
      <Text>{item.oldPrice}</Text>
      <View style={styles.line}></View>
    </View>
   
  </View>
  );
  return (
      <View style={{ height: 400, backgroundColor: 'white', width: '100%', alignItems: 'center',justifyContent:"center" }}>
        <View style={styles.groupWorkspaces}>
          <View>
            <Text style={styles.title}>Xu Hướng Mua Sắm</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={[
                styles.tabContent,
                activeTab === 'Tab 1' ? styles.activeTab : null,
              ]}
              onPress={() => handleTabPress('Tab 1')}
            >
              <Text style={activeTab === 'Tab 1' ? styles.isTextTitle : styles.textTitle}>Xu hướng theo ngày</Text>
              {
                 activeTab === 'Tab 1' ? <View style={styles.lineTitle}></View>:null
              }
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tabContent,
                activeTab === 'Tab 2' ? styles.activeTab : null,
              ]}
              onPress={() => handleTabPress('Tab 2')}
            >
              <Text style={activeTab === 'Tab 2' ? styles.isTextTitle : styles.textTitle}>Sách HOT - Giảm Sốc</Text>
              {
                 activeTab === 'Tab 2' ? <View style={styles.lineTitle}></View>:null
              }
           

            </TouchableOpacity>
          </View>
          <View style={styles.groupItem}>
            <ScrollView>
            {activeTab === 'Tab 1' ? (
              <FlashList
                data={data.filter(item => item.categoryID === 1)}
                renderItem={({ item }) => <RenderItem item={item} />}
                keyExtractor={item => item.id.toString()}
                horizontal
                initialNumToRender={3}
                estimatedItemSize={15}
              />
            ) : null}
            {activeTab === 'Tab 2' ? (
              <FlashList
                data={data.filter(item => item.categoryID === 2)}
                renderItem={({ item }) => <RenderItem item={item} />}
                keyExtractor={item => item.id.toString()}
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
