import React, {useState, useContext} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {CheckBox} from '@rneui/themed';
import styles from './Styles';
import {updateProfile} from '../../../ultil/ApiUser/UserApi';

const EditProfile = () => {
  const [gender, setCheckNam] = useState('nam');
  const [checkNu, setCheckNu] = useState(false);
  const [name, setName] = useState('');
  const [dateofbirth, setBirthday] = useState('');
  const [mobile, setMobile] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');

  const handleUpdateProfile = () => {
    updateProfile(name, dateofbirth, country, mobile, gender);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <View style={styles.titleScreen}>
        <Text style={styles.textTitleScreen}>Đăng nhập</Text>
      </View>
      </View>
      
      <View style={styles.body}>
      <View style={styles.groupInput}>
        <Text style={styles.titleInput}>Họ và tên</Text>
        <View style={styles.viewInput}>
          <TextInput placeholder="Nhập Họ và tên" onChangeText={setName} />
          <TouchableOpacity>
            <Text style={{color: 'blue'}}>Hiện</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.groupInput}>
        <Text style={styles.titleInput}>Số điện thoại</Text>
        <View style={styles.viewInput}>
          <TextInput
            placeholder="Nhập số điện thoại"
            onChangeText={setMobile}
          />
          <TouchableOpacity>
            <Text style={{color: 'blue'}}>Hiện</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.groupInput}>
        <Text style={styles.titleInput}>Quê quán</Text>
        <View style={styles.viewInput}>
          <TextInput placeholder="Nhập địa chỉ" onChangeText={setCountry} />
          <TouchableOpacity>
            <Text style={{color: 'blue'}}>Hiện</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.groupInput}>
        <Text style={styles.titleInput}>Ngày sinh</Text>
        <View style={styles.viewInput}>
          <TextInput placeholder="Nhập ngày sinh" onChangeText={setBirthday} />
          <TouchableOpacity>
            <Text style={{color: 'blue'}}>Hiện</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.groupInput}>
        <Text style={styles.titleInput}>Giới tính</Text>
        <View style={styles.viewCheckBox}>
          <CheckBox
            center
            title="Nam"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={gender}
            onPress={() => {
              setCheckNam(!gender);
              setCheckNu(false);
            }}
          />
          <CheckBox
            center
            title="Nữ"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={checkNu}
            onPress={() => {
              setCheckNu(!checkNu);
              setCheckNam(false);
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        style={{alignItems: 'center'}}
        onPress={handleUpdateProfile}>
        <View style={styles.viewBTNLogin}>
          <Text style={styles.textBTN}>Cập nhật thông tin</Text>
        </View>
      </TouchableOpacity>
      </View>
     
    </View>
  );
};

export default EditProfile;
