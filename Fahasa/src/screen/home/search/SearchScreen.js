import React, {useState} from 'react';
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

const SearchScreen = () => {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);

  const searchProducts = async () => {
    try {
      const response = await axios.get(
        `http://192.168.1.179:3000/product/search?keyword=${keyword}`,
      );
      const products = response.data;
      setResults(products);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          placeholder="Enter keyword"
          value={keyword}
          onChangeText={text => setKeyword(text)}
        />
        <Button title="Search" onPress={searchProducts} />

        <FlatList
          data={results}
          keyExtractor={item => item._id}
          renderItem={({item}) => <Text>{item.name}</Text>}
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
