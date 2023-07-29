import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity} from 'react-native'
import React, {useState,useContext} from 'react'
import styles from "./Styles"
import MenuOrder from '../MenuOrder';
import AxiosIntance from '../../../ultil/AxiosIntance';
import { AppContext } from '../../../ultil/AppContext';


const ScreenOrder1 = ({navigation}) => {
  const [country, setCountry] = useState('1');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [addressLine3, setAddressLine3] = useState('');
  const [addressLine4, setAddressLine4] = useState('');
  const {setIsAddressId} = useContext(AppContext)



  const handleCreaateAddress = async () => {
    try {
      const response = await AxiosIntance().post('address/64a460e8b173f5c31d4f16f1/addUserAddress', {
        addressLine1: addressLine1,
        addressLine2: addressLine2,
        addressLine3: addressLine3,
        addressLine4: addressLine4,
    });
      setIsAddressId(response.address.address.addressId)
      navigation.navigate("ScreenOrder2")

      console.log(response);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleScreen}>
        <Text style={styles.textTitleScreen}>
            Thông tin giao hàng
        </Text>
      </View>
      <ScrollView>
      <View>
        <MenuOrder selectedType={1}/>
      </View>
      <View style={styles.viewTitle}>
        <Text style={styles.textTitle}>Địa chỉ giao Hàng</Text>
      </View>
      <View style={styles.viewAllTextIp}>
      <View style={styles.viewName}>
          <Text style={styles.textName}></Text>
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
        <TouchableOpacity style={styles.btn} onPress={handleCreaateAddress}>
          <Text style={styles.textBtn}>Giao đến địa chỉ này</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.khoangtrong}></View>
      </ScrollView>
    </View>
  )
}

export default ScreenOrder1
