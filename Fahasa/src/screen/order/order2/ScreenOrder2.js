import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './Styles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import CheckBox from '@react-native-community/checkbox';
import MenuOrder from '../MenuOrder';

const ScreenOrder2 = ({navigation}) => {
  const handlePay2 = () => {
    navigation.navigate('ScreenOrder3',);
  };
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.titleScreen}>
        <Text style={styles.textTitleScreen}>Thông tin giao hàng</Text>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <MenuOrder selectedType={2} />
          </View>
          <View>
            <Text style={styles.PT}>PHƯƠNG THỨC VẬN CHUYỂN</Text>
          </View>

          <View style={styles.PTVCbox}>
            <Image
              style={{
                width: 40,
                height: 40,
                marginHorizontal: 10,
                marginVertical: 10,
              }}
              source={require('../../../assets/tick.png')}
            />
            <View style={styles.PTVCbox2}>
              <Text style={styles.PTVC_Text1}>
                Giao hàng tiêu chuẩn : 19.000đ
              </Text>
              <Text style={styles.PTVC_Text2}>
                Ngày giao hàng: Thứ bảy - 22/7
              </Text>
            </View>
          </View>

          <View style={styles.FSbox}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />

            <Text style={styles.FS_Text1}>Sử dụng Freeship ( còn 0 lần )</Text>
          </View>

          <View>
            <Text style={styles.PT}>PHƯƠNG THỨC THANH TOÁN</Text>
          </View>

          <View style={styles.PTTTbox}>
            <View style={styles.checkbox}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
              <Image
                style={{
                  width: 40,
                  height: 20,
                  marginHorizontal: 10,
                  marginVertical: 10,
                }}
                source={require('../../../assets/zalopay.png')}
              />
              <View>
                <Text style={styles.PTTTbox_Text}>Ví ZaloPay</Text>
              </View>
            </View>

            <View style={styles.checkbox}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
              <Image
                style={{
                  width: 40,
                  height: 20,
                  marginHorizontal: 10,
                  marginVertical: 10,
                }}
                source={require('./../../../assets/moca.jpg')}
              />
              <Text style={styles.PTTTbox_Text}>
                Ví Moca trên Ứng dụng Grab
              </Text>
            </View>

            <View style={styles.checkbox}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
              <Image
                style={{
                  width: 40,
                  height: 20,
                  marginHorizontal: 10,
                  marginVertical: 10,
                }}
                source={require('../../../assets/VNPAY.png')}
              />
              <Text style={styles.PTTTbox_Text}>VNPAY</Text>
            </View>

            <View style={styles.checkbox}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
              <Image
                style={{
                  width: 40,
                  height: 20,
                  marginHorizontal: 10,
                  marginVertical: 10,
                }}
                source={require('../../../assets/SP.png')}
              />
              <Text style={styles.PTTTbox_Text}>Ví ShopeePay</Text>
            </View>

            <View style={styles.checkbox}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
              <Image
                style={{
                  width: 40,
                  height: 20,
                  marginHorizontal: 10,
                  marginVertical: 10,
                }}
                source={require('../../../assets/MM.png')}
              />
              <Text style={styles.PTTTbox_Text}>Ví MoMo</Text>
            </View>

            <View style={styles.checkbox}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
              <Image
                style={{
                  width: 40,
                  height: 20,
                  marginHorizontal: 10,
                  marginVertical: 10,
                }}
                source={require('../../../assets/ATM.png')}
              />
              <Text style={styles.PTTTbox_Text}>
                Thẻ ATM nội địa / Interbanking
              </Text>
            </View>

            <View style={styles.checkbox}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
              <Image
                style={{
                  width: 40,
                  height: 20,
                  marginHorizontal: 10,
                  marginVertical: 10,
                }}
                source={require('../../../assets/visa.png')}
              />
              <Text style={styles.PTTTbox_Text}>Thẻ Visa / Master / JCB</Text>
            </View>

            <View style={styles.checkbox}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
              <Image
                style={{
                  width: 40,
                  height: 20,
                  marginHorizontal: 10,
                  marginVertical: 10,
                }}
                source={require('../../../assets/cash.png')}
              />
              <Text style={styles.PTTTbox_Text}>
                Thanh toán bằng tiền mặt khi nhận hàng
              </Text>
            </View>
          </View>

          <View>
            <Text style={styles.PT}>MÃ KHUYẾN MÃI</Text>
          </View>

          <View style={styles.KMbox}>
            <Image
              style={{
                width: 40,
                height: 20,
                marginHorizontal: 10,
                marginVertical: 10,
              }}
              source={require('../../../assets/ticket.png')}
            />
            <View>
              <Text style={styles.KM_Text1}>Chọn hoặc Nhập mã</Text>
              <Text style={styles.KM_Text2}>
                Có thể áp dụng đồng thời nhiều mã
              </Text>
            </View>
          </View>

          <View>
            <Text style={styles.PT}>F-POINT</Text>
          </View>

          <View style={styles.Pbox}>
            <Text style={styles.P_Text1}>Số F-Point hiện có : 0đ</Text>
            <View style={styles.checkbox}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
              <Text style={styles.P_Text2}>Sử dụng F-Point để thanh toán</Text>
            </View>
          </View>

          <View>
            <Text style={styles.PT}>GIÁ TRỊ ĐƠN HÀNG</Text>
          </View>

          <View style={styles.GTDHbox}>
            <View style={styles.GTDH}>
              <Text style={styles.GTDH_Text1}>Thành Tiền :</Text>
              <Text style={styles.GTDH_Text1}>99999999999999999 đ</Text>
            </View>
            <View style={styles.GTDH}>
              <Text style={styles.GTDH_Text1}>Phí Vận chuyển :</Text>
              <Text style={styles.GTDH_Text1}>00000000 đ</Text>
            </View>
            <View style={styles.GTDH}>
              <Text style={styles.GTDH_Text1}>Tổng số tiền :</Text>
              <Text style={styles.GTDH_Text2}>99999999999 đ</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View>
        <TouchableOpacity style={styles.TT} onPress={handlePay2}>
          <Text style={styles.TT_Text}>Thanh toán</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ScreenOrder2;
