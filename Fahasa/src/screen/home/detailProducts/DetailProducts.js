import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import AxiosIntance from '../../../ultil/AxiosIntance';

const DetailProducts = ({route}) => {
    const { id } = route.params;
    const [detailProducts, setDetailProducts] = useState(null);
    console.log('====================================');
    console.log("itesmId**s****ssssss****",id);
    console.log('====================================');
    const fetchProductsData = async () => {
        try {
          const response =  await AxiosIntance().get(`product/${id}/detail`,);
          console.log('Produsssct Response:', response);
          setDetailProducts(response)
        } catch (error) {
          console.error('Error:', error);
        } 
    };
    useEffect(() => {
      fetchProductsData(); // Call the fetchUserData function
    }, []);
    console.log('====================================',detailProducts);
  return (
    <View>
      <Text>DetailProducts</Text>
    </View>
  )
}

export default DetailProducts

const styles = StyleSheet.create({})