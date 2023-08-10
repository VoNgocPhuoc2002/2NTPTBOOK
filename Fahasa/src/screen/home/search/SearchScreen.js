import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import styles from './Styles';
import { FlashList } from '@shopify/flash-list';

const SearchScreen = ({navigation}) => {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);
  
  const handleItemPress = id => {
    // Navigate to the detail screen with the item ID
    navigation.navigate('DetailProducts', {id: id});
  };
  const searchProducts = async () => {
    try {
      const response = await axios.get(
        `http://192.168.1.42:3000/product/search?keyword=${keyword}`,
      );
      const products = response.data;
      setResults(products);
    } catch (error) {
      console.error(error);
    }
  };

  
  // const sortByName = () => {
  //   const sortedData = [...results];

  //   sortedData.sort((a, b) => {
  //     return a.name.localeCompare(b.name);
  //   });

  //   setResults(sortedData);
  // };
  // const sortByNameZ = () => {
  //   const sortedData = [...results];
  
  //   sortedData.sort((a, b) => {
  //     return b.name.localeCompare(a.name); // Thay đổi thứ tự so sánh để sắp xếp giảm dần từ Z đến A
  //   });
  
  //   setResults(sortedData);
  // };


  const sortByPriceAscending = () => {
    const sortedData = [...results];

    sortedData.sort((a, b) => {
      return a.price - b.price;
    });

    setResults(sortedData);
  };
  const sortByPriceDescending = () => {
    const sortedData = [...results];

    sortedData.sort((a, b) => {
      return b.price - a.price;
    });

    setResults(sortedData);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchBox}>

          <View style={styles.search}>
            <Image style={{ width: 20, height: 20 }}
              source={require('../../../assets/IconSearch.png')} />
            <TextInput
              placeholder="Sản phẩm cần tìm ..."
              value={keyword}
              onChangeText={text => setKeyword(text)}
            />
          </View>

          <View style={styles.ButtonBox}>
            <View style={styles.ButtonBox1}>
              <View style={styles.Btn_sapxep}>
                <TouchableOpacity style={styles.button} onPress={sortByPriceAscending}>
                  <Text>Giá tăng dần  </Text>
                </TouchableOpacity>
                <Image style={{ width: 20, height: 20 }}
                  source={require('../../../assets/IconUp.png')} />
              </View>
              <View style={styles.Btn_loc}>
              <TouchableOpacity style={styles.button} onPress={sortByPriceDescending}>
                  <Text>Giá giảm dần</Text>
                </TouchableOpacity>
                <Image style={{ width: 20, height: 20 }}
                  source={require('../../../assets/IconDown.png')} />
              </View>
            </View>
            <Button title="Search" onPress={searchProducts} />
          </View>


           
        </View>
        <FlashList
          data={results}
          keyExtractor={item => item._id}
          initialNumToRender={3}
          estimatedItemSize={200}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleItemPress(item._id)}>
            <View style={styles.viewItem}>
              <Image
                style={{ width: 110, height: 120, borderRadius: 10 }}
                source={{ uri: item.image }}
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
          )}
        />
      </View>
      {/* <View style={styles.body}>
        <TouchableOpacity onPress={() => handleItemPress(item._id)}>
          <View style={styles.viewItem}>
            <View style={styles.groupLeft}>
              <Image
                style={{width: 110, height: 120, borderRadius: 10}}
                source={require('../../../assets/Catelog.png')}
              />
            </View>
            <View style={styles.groupRight}>
              <View style={styles.viewItemName}>
                <Text style={styles.nameItem}>sdasdsa sajhdsa jsahdk akjhd ajdhahdjakdha hdkjah dsajh</Text>
              </View>
              <View style={styles.viewItemNewPrice}>
                <Text style={styles.newPriceItem}>sadsadas</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default SearchScreen;
