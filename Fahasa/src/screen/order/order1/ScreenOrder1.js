import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import styles from './Styles';
import MenuOrder from '../MenuOrder';
import AxiosIntance from '../../../ultil/AxiosIntance';
import {AppContext} from '../../../ultil/AppContext';
import {CheckBox} from 'react-native-elements';
import {FlashList} from '@shopify/flash-list';
import {getUserId} from '../../../ultil/GetUserId';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {Constants} from '../../../Constant';

const ScreenOrder1 = ({navigation}) => {
  const [isaddress, setIsaddress] = useState([]);
  const [fullName, setFullName] = useState('');

  const [phoneNumber, setPhoneNumber] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [addressLine3, setAddressLine3] = useState('');
  const [addressLine4, setAddressLine4] = useState('');
  const {setIsAddressId} = useContext(AppContext);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  console.log('Error', isaddress);
  console.log('selectedAddressId', selectedAddressId);
  //

  useEffect(() => {

    handleGetAddress(); // Call the fetchUserData function

  }, []);
  const handleCreaateAddress = async () => {
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
        );
        setIsAddressId(response.address.address[0].addressId);
        navigation.navigate('ScreenOrder2');
        console.log(response.address.address[0].addressId);
      }
    } catch (error) {
      console.log('Error', error);
    }
  };
  const handleGetAddress = async () => {
    const fetchedUserId = await getUserId();
    if (fetchedUserId) {
      try {
        const response = await AxiosIntance().get(
          `address/${fetchedUserId}/getAddress`,
        );
        setIsaddress(response.addresses);
        console.log('alo', response.addresses);
        // const sortedAddresses = response.addresses.sort(
        //   (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        // );
  
        // setIsaddress(sortedAddresses);
        // console.log('alo', sortedAddresses);
      
      } catch (error) {
        console.log('Error', error);
      }
    }
  };
  const AddAddress = ()=>{
    navigation.navigate('ScreenOrder2');
    setIsAddressId(selectedAddressId)
  }
  const CreateAddress = ()=>{
    navigation.navigate("AddAddressScreen")
  }
  const handleAddressSelection = (addressId) => {
    // Chỉ cập nhật selectedAddressId nếu người dùng chọn địa chỉ khác với địa chỉ đã chọn trước đó
    if (addressId !== selectedAddressId) {
      setSelectedAddressId(addressId);
    }
    handleGetAddress()
  };


  const RenderItem = ({item}) => {
    console.log('RenderItem:', item);


    const addresses = item.address;

    return (
      <View style={{backgroundColor: 'blue'}}>
        {addresses.map(address => (
          <View key={address._id} style={styles.viewText}>
            <View style={{width: 50, alignItems: 'center'}}>
            <CheckBox
                checkedIcon="dot-circle-o"
                checkedColor={Constants.COLOR.ORANGE}
                uncheckedIcon="circle-o"
                checked={selectedAddressId === address.addressId}
                onPress={() => handleAddressSelection(address.addressId)}
            />
            </View>
            <View>
              <Text style={styles.textTitle}>
                {address.fullName} - {address.phoneNumber}
              </Text>
              <Text style={styles.description}>
                {address.addressLine1}, {address.addressLine2},{' '}
                {address.addressLine3}, {address.addressLine4}
              </Text>
            </View> 
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {isaddress.length === 0 ? (
        <View>
          <View style={styles.titleScreen}>
            <Text style={styles.textTitleScreen}>Thông tin giao hàng</Text>
          </View>
          <ScrollView>
            <View>
              <MenuOrder selectedType={1} />
            </View>
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
      ) : (
        <View>
          <View style={styles.titleScreen}>
            <Text style={styles.textTitleScreen}>Thông tin giao hàng</Text>
          </View>
          <ScrollView>
            <View>
              <MenuOrder selectedType={1} />
            </View>
            <View style={styles.viewTitle}>
              <Text style={styles.textTitle}>Địa chỉ giao Hàng</Text>
            </View>
            <View>
              <View style={styles.boxItem}>
                <View style={styles.item}>
                  <FlashList
                    data={isaddress}
                    renderItem={({item}) => <RenderItem item={item} />}
                    keyExtractor={item => item._id}
                    initialNumToRender={3}
                    estimatedItemSize={200}
                  />
                  <TouchableOpacity onPress={CreateAddress} style={styles.viewAddAddress}>
                    <IconAntDesign
                      name="pluscircleo"
                      size={25}
                      color={Constants.COLOR.ORANGE}
                    />
                    <View style={styles.viewTextAddAddress}>
                      <Text style={styles.textAddAddress}>Giao đến địa chỉ khác</Text>

                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View>
              <TouchableOpacity style={styles.btn} onPress={AddAddress}>
                <Text style={styles.textBtn}>Giao đến địa chỉ này</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.khoangtrong}></View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default ScreenOrder1;
