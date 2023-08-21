import {KeyboardAvoidingView,Image, Text, TextInput, View, TouchableOpacity, ScrollView, ToastAndroid} from 'react-native';
import React,{useState,useContext,useEffect} from 'react';
import styles from './Styles';
import { AppContext } from '../../../../ultil/AppContext';
import AxiosIntance from '../../../../ultil/AxiosIntance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {setIsLogin} = useContext(AppContext)
// Define a state variable to track the login status

const handleLogin = async () => {
  
  if(email.length > 0 && password.length>0) {
    try {
      const response = await AxiosIntance().post('api/users/login', {
        email: email,
        password: password
      });
      await AsyncStorage.setItem("userId", response.user._id);

        setIsLogin(true);
        // navigation.navigate("")
        console.log("Login successful. User data:", response.data.user);
        if (response.data === null) {
        ToastAndroid.show("Mật khẩu hoặc tài khoản không trùng khớp ", ToastAndroid.SHORT);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  }else{
  ToastAndroid.show("Bạn chưa nhập tài khoản và mật khẩu!", ToastAndroid.SHORT);

  }
 
};

  
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (

    <ScrollView style={{flexGrow:1}}>

  <View style={styles.container} >
      <View style={styles.groupInput}>
        <View>
          <Text style={styles.titleInput}>Email / Số điện thoại</Text>
          <View style={styles.viewInput}>
            <TextInput placeholder="Nhập email / số điện thoại" onChangeText={setEmail} />
          </View>
        </View>
        <View>
          <Text style={styles.titleInput}>Mật khẩu</Text>
          <View style={styles.viewInput}>
            <TextInput placeholder="Nhập mật khâu" secureTextEntry={!showPassword} onChangeText={setPassword}/>
            <TouchableOpacity onPress={handleShowPassword}>
              <Text style={{color:"blue"}}>
                Hiện
              </Text>
            </TouchableOpacity>
         
          </View>
          <View style={{width:"100%",alignItems:"flex-end",marginTop:10}}>
            <Text style={styles.textForgotPass}>
              Quên mật khẩu
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.groupBTN}>
       
        <TouchableOpacity style={{alignItems:"center"}} onPress={handleLogin}>
          <View style={styles.viewBTNLogin}>
            <Text style={styles.textBTN}>Đăng Nhập</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.viewOR}>
          <View style={styles.line}></View>
          <Text>Or</Text>
          <View style={styles.line}></View>
        </View>
        <TouchableOpacity style={{alignItems:"center"}} onPress={handleLogin}>
          <View style={styles.viewBTNFacebook}>
            <Text style={styles.textBTN}>Đăng nhập bằng Facebook</Text>
          </View>
        </TouchableOpacity>

      </View>
      <View style={{flex:4}}>

      </View>
    </View>
    </ScrollView>
  
  );
};

export default Login;
