import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import styles from "./Styles"
import { SelectCountry } from 'react-native-element-dropdown';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconOcticons from 'react-native-vector-icons/Octicons';
import IconFeather from 'react-native-vector-icons/Feather';
import MenuOrder from '../MenuOrder';
const local_data = [
  {
    value: '1',
    lable: 'Việt Nam',
    image: {
      uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
    },
  },
  {
    value: '2',
    lable: 'Nhật Bản',
    image: {
      uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
    },
  },
  {
    value: '3',
    lable: 'Mỹ',
    image: {
      uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
    },
  },
  {
    value: '4',
    lable: 'Úc',
    image: {
      uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
    },
  },
  {
    value: '5',
    lable: 'Trung Quốc',
    image: {
      uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
    },
  },
];

const city_data = [
  {
    value: '1',
    lable: 'Hồ Chí Minh',
    image: {
      uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
    },
  },
  {
    value: '2',
    lable: 'Hà Nội',
    image: {
      uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
    },
  },
  {
    value: '3',
    lable: 'Bình Định',
    image: {
      uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
    },
  },
  {
    value: '4',
    lable: 'Đà Nẵng',
    image: {
      uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
    },
  },
  {
    value: '5',
    lable: 'Cà Mau',
    image: {
      uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
    },
  },
];

const ScreenOrder1 = ({navigation}) => {
  const [country, setCountry] = useState('1');
  const handlePay2 =()=>{
    navigation.navigate("ScreenOrder2")
  }
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
          <Text style={styles.textName}> Họ và tên người nhận</Text>
          <TextInput
             style={styles.textipName}  
             placeholder="Nhập họ và tên người nhận"
          />
        </View>

        <View style={styles.viewName}>
          <Text style={styles.textName}> Số điện thoại</Text>
          <TextInput
             style={styles.textipName}  
             placeholder="Ví dụ: 0978123xxx (10 ký tự số)"
          />
        </View>

        <View style={styles.viewName}>
          <Text style={styles.textName}> Quốc gia</Text>
          <SelectCountry
            style={styles.dropdown}
            selectedTextStyle={styles.selectedTextStyle}
            placeholderStyle={styles.placeholderStyle}
            imageStyle={styles.imageStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            search
            maxHeight={200}
            value={country}
            data={local_data}
            valueField="value"
            labelField="lable"
            imageField="image"
            placeholder="Chọn Quốc gia"
            searchPlaceholder="Search..."
            onChange={e => {
              setCountry(e.value);
            }}
          />
        
        </View>

        <View style={styles.viewName}>
          <Text style={styles.textName}> Tỉnh / Thành phố</Text>
          <SelectCountry
            style={styles.dropdown}
            selectedTextStyle={styles.selectedTextStyle}
            placeholderStyle={styles.placeholderStyle}
            imageStyle={styles.imageStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            search
            maxHeight={200}
            value={country}
            data={city_data}
            valueField="value"
            labelField="lable"
            imageField="image"
            placeholder="Chọn tỉnh/thành phố"
            searchPlaceholder="Search..."
            onChange={e => {
              setCountry(e.value);
            }}
          />
        </View>

        <View style={styles.viewName}>
          <Text style={styles.textName}> Quận / Huyện</Text>
          <TextInput
             style={styles.textipName}  
             placeholder="Nhập quận / huyện"
          />
        </View>

        <View style={styles.viewName}>
          <Text style={styles.textName}> Phường / Xã</Text>
          <TextInput
             style={styles.textipName}  
             placeholder="Nhập phường / xã"
          />
        </View>

        <View style={styles.viewName}>
          <Text style={styles.textName}> Địa chỉ</Text>
          <TextInput
             style={styles.textipName}  
             placeholder="Nhập địa chỉ"
          />
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.btn} onPress={handlePay2}>
          <Text style={styles.textBtn}>Giao đến địa chỉ này</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.khoangtrong}></View>
      </ScrollView>
    </View>
  )
}

export default ScreenOrder1
