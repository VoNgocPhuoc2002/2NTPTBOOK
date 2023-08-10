import { StyleSheet, Text, View,TextInput,ScrollView,TouchableOpacity } from 'react-native'
import React,{useState,useContext} from 'react'
import styles from './Styles'
import AxiosIntance from '../../ultil/AxiosIntance'
import { getUserId } from '../../ultil/GetUserId'
import { AppContext } from '../../ultil/AppContext'
const AddAddressScreen = () => {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [addressLine3, setAddressLine3] = useState('');
    const [addressLine4, setAddressLine4] = useState('');
    const {setIsAddressId} = useContext(AppContext);
    const handleCreaateAddress = async ({navigation}) => {
        const fetchedUserId = await getUserId();
    
        try {
          if (fetchedUserId) {
            const response = await AxiosIntance().post(
              `address/${fetchedUserId}/addUserAddress`,
              {
                fullName: fullName,
                phoneNumber: phoneNumber,
                addressLine1: addressLine1,
                addressLine2: addressLine2,
                addressLine3: addressLine3,
                addressLine4: addressLine4,
              },
            );z
            setIsAddressId(response.address.address[0].addressId);
            navigation.navigate('ScreenOrder1');
            console.log(response.address.address[0].addressId);
          }
        } catch (error) {
          console.log('Error:', error);
        }
      };
  return (
    <View style={styles.container}>
       <View>
          <View style={styles.titleScreen}>
            <Text style={styles.textTitleScreen}>Thông tin giao hàng</Text>
          </View>
          <ScrollView>
            <View style={styles.viewTitle}>
              <Text style={styles.textTitle}>Địa chỉ giao Hàng</Text>
            </View>
            <View style={styles.viewAllTextIp}>
              <View style={styles.viewName}>
                <Text style={styles.textName}>Họ và tên</Text>
                <TextInput
                  style={styles.textipName}
                  placeholder="Nhập họ và tên"
                  onChangeText={setFullName}
                />
              </View>
              <View style={styles.viewName}>
                <Text style={styles.textName}>Số điện thoại</Text>
                <TextInput
                  style={styles.textipName}
                  placeholder="Nhập số điện thoại"
                  onChangeText={setPhoneNumber}
                />
              </View>
              <View style={styles.viewName}>
                <Text style={styles.textName}>Tinh / Thành phố</Text>
                <TextInput
                  style={styles.textipName}
                  placeholder="Nhập tỉnh /thành phố"
                  onChangeText={setAddressLine1}
                />
              </View>
              <View style={styles.viewName}>
                <Text style={styles.textName}> Quận / Huyện</Text>
                <TextInput
                  style={styles.textipName}
                  placeholder="Nhập quận / huyện"
                  onChangeText={setAddressLine2}
                />
              </View>

              <View style={styles.viewName}>
                <Text style={styles.textName}> Phường / Xã</Text>
                <TextInput
                  style={styles.textipName}
                  placeholder="Nhập phường / xã"
                  onChangeText={setAddressLine3}
                />
              </View>

              <View style={styles.viewName}>
                <Text style={styles.textName}> Địa chỉ</Text>
                <TextInput
                  style={styles.textipName}
                  placeholder="Nhập địa chỉ"
                  onChangeText={setAddressLine4}
                />
              </View>
            </View>
            <View>
              <TouchableOpacity
                style={styles.btn}
                onPress={handleCreaateAddress}>
                <Text style={styles.textBtn}>Giao đến địa chỉ này</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.khoangtrong}></View>
          </ScrollView>
        </View>
    </View>
  )
}

export default AddAddressScreen
