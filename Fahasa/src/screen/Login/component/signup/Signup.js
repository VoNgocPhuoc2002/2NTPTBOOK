import { Image, Text, TextInput, View, TouchableOpacity, ToastAndroid ,Alert} from 'react-native';
import React, { useState,useContext } from 'react';
import styles from './Styles';
import { register} from '../../../../ultil/ApiUser/UserApi';
import { useNavigation } from '@react-navigation/native';
import CustomAlert from '../../../../ultil/CustomAlert';
import AxiosIntance from '../../../../ultil/AxiosIntance';
import { AppContext } from '../../../../ultil/AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Signup = () => {
  const navigation = useNavigation()
const {setIsLogin} = useContext(AppContext)
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAlertVisible, setAlertVisible] = useState(false);
  
  const showAlert = () => {
    setAlertVisible(true);
  };

  const hideAlert = () => {
    setAlertVisible(false);
    setEmail("")
    setPassword("")
    navigation.navigate('LoginScreen')

  };
  const onOK = () => {
    handleLogin()
    setIsLogin(true)
    setAlertVisible(false);
  };
  const handleLogin = async () => {
    try {
      const response = await AxiosIntance().post('api/users/login', {
        email: email,
        password: password
      });
      await AsyncStorage.setItem("userId", response.user._id);
    } catch (error) {
      console.log('Error:', error);
    }
  };
  const registerScreen = async () => {
    if (!email) {
      Alert.alert("Vui lòng nhập email");

    } else if (!password) {
      Alert.alert("Vui lòng nhập mật khẩu.");
    } else {
      try {
        await register(email, password);
        showAlert()

        // Registration successful, show success message
        ToastAndroid.show("Đăng ký thành công!", ToastAndroid.SHORT);
        // Navigate to another screen (e.g., Home) after successful registration
      } catch (error) {
        // Registration failed, show error message
        ToastAndroid.show("Đăng ký không thành công. Vui lòng thử lại sau.", ToastAndroid.SHORT);
        console.log('Error:', error);
      }
    }
  };
  

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <View style={styles.groupInput}>
        <View>
          <Text style={styles.titleInput}>Email / Số điện thoại</Text>
          <View style={styles.viewInput}>
            <TextInput value={email}  placeholder="Nhập email / số điện thoại" onChangeText={setEmail} />
          </View>
        </View>
        <View>
          <Text style={styles.titleInput}>Mật khẩu</Text>
          <View style={styles.viewInput}>
            <TextInput value={password} placeholder="Nhập mật khẩu" onChangeText={setPassword} secureTextEntry={!showPassword} />
            <TouchableOpacity onPress={handleShowPassword}>
              <Text style={{ color: 'blue' }}>Hiện</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.groupBTN}>
        <TouchableOpacity style={{ alignItems: 'center' }} onPress={registerScreen}>
          <View style={styles.viewBTNLogin}>
            <Text style={styles.textBTN}>Đăng Nhập</Text>
          </View>
        </TouchableOpacity>
      </View>
      <CustomAlert
            visible={isAlertVisible}
            message="Bạn có muốn đăng nhập ngay không ?"
            onClose={hideAlert}
            onOk={onOK}
          />
      <View style={{ flex: 4 }}></View>
    </View>
  );
};

export default Signup;
