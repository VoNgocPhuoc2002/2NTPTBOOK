import {StyleSheet, Text, View, Image} from 'react-native';
import React,{useState,useEffect} from 'react';
import styles from './Styles';

const Panner = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [require('../../assets/Catelog.png'),require('../../assets/Card1.png')];

  useEffect(() => {
    const interval = setInterval(() => {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }, 3000);

    return () => clearInterval(interval);

    
  }, [imageIndex]);
  return (
    <View style={styles.groupPanner}>
      <View style={styles.viewImagePanel}>
      <Image style={styles.imagePanel} source={images[imageIndex]}/>
      </View>
    </View>
  );
};

export default Panner;
