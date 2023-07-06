import { Image, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './Styles';
import { register } from '../../../../ultil/ApiUser/UserApi';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
  const navigation = useNavigation()
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerScreen = async () => {
    try {
      register(email,password)

    } catch (error) {
      console.log('Error:', error);
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
            <TextInput placeholder="Nhập email / số điện thoại" onChangeText={setEmail} />
          </View>
        </View>
        <View>
          <Text style={styles.titleInput}>Mật khẩu</Text>
          <View style={styles.viewInput}>
            <TextInput placeholder="Nhập mật khẩu" onChangeText={setPassword} secureTextEntry={!showPassword} />
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
      <View style={{ flex: 4 }}></View>
    </View>
  );
};

export default Signup;
