import { ActivityIndicator, Image, SafeAreaView, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';

const LoadingScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Simulate data loading or initialization process
    // Here, we use a setTimeout to simulate a delay of 3 seconds
    const moveToScreen = setTimeout(() => {
      handleLoadingFinished(); // Call handleLoadingFinished after 3 seconds
    }, 3000);

    return () => clearTimeout(moveToScreen); // Clean up the timer if the component unmounts
  }, []);

  const handleLoadingFinished = () => {
    navigation.navigate('TabNavigation');
  };

  return (
    <SafeAreaView  style={styles.container}>
      <View style={styles.body}>
        <View style={styles.loading}>
          <ActivityIndicator animating={true} color="black" size={'large'} />
          <Text style={styles.textLoading}>Loading</Text>
        </View>
      </View>
      <View style={{flex:2,alignItems:"center"}}>
      <Image style={{width:280,height:220}} source={require("../../assets/LogoApp.png")}/>

      </View>
    </SafeAreaView>
  );
};

export default LoadingScreen;
