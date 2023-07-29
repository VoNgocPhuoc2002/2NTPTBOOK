import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Constants} from '../../Constant';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

const MenuOrder = ({selectedType}) => {
  return (
    <View style={styles.menu}>
      <View style={styles.menuItem}>
        <View
          style={[styles.viewCricle, {backgroundColor: Constants.COLOR.GREEN}]}>
          {selectedType === 1 ? (
            <Text
              style={[styles.text2, selectedType == 2 ? styles.text1 : null]}>
              1
            </Text>
          ) : (
            <IconAntDesign
              name="check"
              size={20}
              color={Constants.COLOR.WHITE}
            />
          )}
        </View>
        <Text style={styles.textUnder}>Giao hàng</Text>
      </View>
      <View
        style={[
          styles.line,
          selectedType === 2 || selectedType === 3 ? styles.isLine : null,
        ]}></View>
      <View style={styles.menuItem}>
        <View
          style={[
            styles.viewCricle,
            selectedType === 2 || selectedType === 3
              ? {backgroundColor: Constants.COLOR.GREEN}
              : null,
          ]}>
          {selectedType === 2 || selectedType === 1 ? (
            <Text
              style={[styles.text2, selectedType == 2 ? styles.text1 : null]}>
              2
            </Text>
          ) : (
            <IconAntDesign
              name="check"
              size={20}
              color={Constants.COLOR.WHITE}
            />
          )}
        </View>
        <Text style={styles.textUnder}>Thanh toán</Text>
      </View>
      <View style={[styles.line, selectedType === 3 && styles.isLine]}></View>
      <View style={styles.menuItem}>
        <View
          style={[
            styles.viewCricle,
            selectedType === 3 && {backgroundColor: Constants.COLOR.GREEN},
          ]}>
            <Text
              style={[styles.text2, selectedType == 3 ? styles.text1 : null]}>
              3
            </Text>
        </View>
        <Text style={styles.textUnder}>Kiểm tra</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor:Constants.COLOR.WHITE,
  },
  menuItem: {
    justifyContent: 'center',
    alignItems: 'center',

  },
  icon1: {},
  line: {
    height: 3,
    width: 100,
    backgroundColor: Constants.COLOR.BLACK,
    position: 'relative',
    marginTop: 15,
  },
  isLine: {
    height: 3,
    width: 100,
    backgroundColor: Constants.COLOR.GREEN,
    position: 'relative',
    marginTop: 15,

  },
  viewCricle: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35/2,
    marginBottom: 10,
  },

  text1: {
    fontSize: 20,
    color: Constants.COLOR.WHITE,
    fontWeight: 900,
  },
  text2: {
    fontSize: 16,
    color: Constants.COLOR.BLACK,
  },

  textUnder: {
    fontSize: 16,
    fontWeight: 400,
    color: Constants.COLOR.BLACK,
  },
});

export default MenuOrder;
