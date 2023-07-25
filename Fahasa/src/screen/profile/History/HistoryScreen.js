import React from 'react';
import { View, StyleSheet,Text  } from 'react-native';
import NameList from './HistoryTab';

import styles from './Styles';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_Text}>LỊCH SỬ MUA HÀNG</Text>
      </View>
      {/* Nội dung của màn hình chính của bạn */}
      <NameList />
    </View>
  );
};



export default App;
