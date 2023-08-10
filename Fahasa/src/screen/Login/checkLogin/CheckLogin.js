import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'

const CheckLogin = ({navigation}) => {
    useEffect(() => {
        checkProfile();
      }, []);
    
      const checkProfile = async () => {
        try {
          const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
          if (isLoggedIn === 'true') {
            // Logged in before, navigate to screenprofile
            navigation.navigate('ScreenProfile');
          } else {
            // First login, navigate to createprofile
            navigation.navigate('CreateProfile');
          }
        } catch (error) {
          console.log('Error checking login status', error);
        }
      };
}

export default CheckLogin

const styles = StyleSheet.create({})