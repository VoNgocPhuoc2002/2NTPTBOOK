import {StyleSheet, Text, View,Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './Styles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { FlashList } from '@shopify/flash-list';

const FlashSale = () => {
  const [countdown, setCountdown] = useState(3600); // Đếm ngược từ 6 phút (360 giây)

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1);
    }, 1000); // Giảm giá trị countdown mỗi giây (1000 ms)
    return () => {
      clearInterval(interval); // Xóa interval khi component unmount
    };
  }, []);

  // Định dạng thời gian từ giây sang phút:giây
  const getHours = timeInSeconds => {
    const hours = Math.floor(timeInSeconds / 3600);
    return hours.toString().padStart(2, '0');
  };

  const getMinutes = timeInSeconds => {
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    return minutes.toString().padStart(2, '0');
  };

  const getSeconds = timeInSeconds => {
    const seconds = timeInSeconds % 60;
    return seconds.toString().padStart(2, '0');
  };
  const data = [
    {
      id: 1,
      img: require('../../assets/Catelog.png'),
      name: 'Developer',
      description: '21 suggested item',
    },
     {
      id: 2,
      img: require('../../assets/Catelog.png'),
      name: 'Developer',
      description: '21 suggested item',
    },
     {
      id: 3,
      img: require('../../assets/Catelog.png'),
      name: 'Developer',
      description: '21 suggested item',
    },
     {
      id: 4,
      img: require('../../assets/Catelog.png'),
      name: 'Developer',
      description: '21 suggested item',
    },
  ];

  const RenderItem = ({ item }) => (
    <View style={styles.viewItem}>
      <Image style={{width:110,height:120,borderRadius:10,}} source={item.img} />
      <Text style={styles.nameItem}>{item.name}</Text>
      <Text style={styles.descriptionItem}>{item.description}</Text>
    </View>
  );

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={styles.viewTimePlashSale}>
        <View style={styles.viewTextSale}>
          <Text style={styles.textSale}>FLASHSALE :</Text>
        </View>
        <View style={styles.viewGroupTime}>
          <View style={styles.viewTextTime}>
            <Text style={styles.textTime}>{getHours(countdown)}</Text>
          </View>
          <View style={styles.viewTextTime}>
            <Text style={styles.textTime}>{getMinutes(countdown)}</Text>
          </View>
          <View style={styles.viewTextTime}>
            <Text style={styles.textTime}>{getSeconds(countdown)}</Text>
          </View>
        </View>
        <View style={styles.viewIconNext}>
          <IconAntDesign name="right" size={25} color="black" />
        </View>
      </View>
      <View style={styles.groupWorkspaces}>
        <View style={styles.groupItem}>
          <FlashList
            data={data}
            renderItem={({item}) => <RenderItem item={item} />}
            keyExtractor={item => item.id.toString()}
            horizontal
            initialNumToRender={3}
            estimatedItemSize={15}
          />
        </View>
      </View>
    </View>
  );
};

export default FlashSale;
