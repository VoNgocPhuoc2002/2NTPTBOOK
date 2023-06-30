import {Image, Text, TextInput, View, TouchableOpacity} from 'react-native';
import React,{useState} from 'react';
import styles from './Styles';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const moveToHome = () => {
    navigation.navigate('HomeScreen');
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
            <TextInput placeholder="Nhập email / số điện thoại" />
          </View>
        </View>
        <View>
          <Text style={styles.titleInput}>Mật khẩu</Text>
          <View style={styles.viewInput}>
            <TextInput placeholder="Nhập mật khâu" secureTextEntry={!showPassword}/>
            <TouchableOpacity onPress={handleShowPassword}>
              <Text style={{color:"blue"}}>
                Hiện
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.groupBTN}>
       
        <TouchableOpacity style={{alignItems:"center"}} onPress={moveToHome}>
          <View style={styles.viewBTNLogin}>
            <Text style={styles.textBTN}>Đăbg Nhập</Text>
          </View>
        </TouchableOpacity>
       

      </View>
      <View style={{flex:4}}>

      </View>
    </View>
  );
};

export default Login;
