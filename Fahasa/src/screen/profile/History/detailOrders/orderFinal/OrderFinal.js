import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Styles from './Styles'
const OrderFinal = ({route}) => {
  const {data,address} = route.params;
console.log("asdsa",address)
  return (
    <View>
      <Text>OrderFinal</Text>
    </View>
  )
}

export default OrderFinal

const styles = StyleSheet.create({})