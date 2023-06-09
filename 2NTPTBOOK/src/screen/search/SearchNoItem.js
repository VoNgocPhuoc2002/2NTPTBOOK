import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const API_ENDPOINT = 'https://63778da381a568fc2518fef7.mockapi.io'

const SearchNoItem = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [fullData, setFullData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetchData(API_ENDPOINT);
  }, []);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
      console.log(json.results);
    }
    catch (error) {
      setError(error);
      console.log(error);
    }
  }

  const handleSearch = (query) => {
    setSearchQuery(query);
  }

  return (

    <SafeAreaView style={{ flex: 1, marginHorizontal: 20 }}>
      <TextInput placeholder='Search'
        clearButtonMode='always'
        style={styles.searchBox}
        autoCapitalize='none'
        autoCorrect={false}
        value={searchQuery}
        onChangeText={(query) => handleSearch(query)}

      />
    </SafeAreaView>
  )
}

export default SearchNoItem

const styles = StyleSheet.create({
  searchBox: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#CCFFFF',
    borderWidth: 3,
    borderRadius: 10,
  },

});