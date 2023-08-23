import {StyleSheet, Text, View, Image,FlatList} from 'react-native';
import React from 'react';
import {Constants} from '../../Constant';
import {SafeAreaView} from 'react-native-safe-area-context';
import { FlashList } from '@shopify/flash-list';
const Notification = () => {
 const data = [
  {
    id: 1,
    title: "Sản phẩm siêu giảm giá!",
    date: "20/08/2023",
    description: "Mua ngay để nhận ưu đãi lớn cho sản phẩm hàng đầu của chúng tôi.",
  },
  {
    id: 2,
    title: "Săn deal hấp dẫn",
    date: "21/08/2023",
    description: "Giảm giá tới 50% cho tất cả các sản phẩm trong tuần này.",
  },
  {
    id: 3,
    title: "Khám phá bộ sưu tập mới",
    date: "22/08/2023",
    description: "Các sản phẩm mới đã có mặt trên cửa hàng của chúng tôi. Hãy khám phá ngay!",
  },
  {
    id: 4,
    title: "Chào mừng bạn đến với cửa hàng",
    date: "23/08/2023",
    description: "Chúng tôi rất vui mừng được phục vụ bạn với những sản phẩm chất lượng.",
  },
  {
    id: 5,
    title: "Giảm giá lên tới 70%",
    date: "24/08/2023",
    description: "Chương trình khuyến mãi đặc biệt dành cho tất cả các sản phẩm trên cửa hàng.",
  },
  {
    id: 6,
    title: "Hàng mới về - Bộ sưu tập thời trang mùa thu",
    date: "25/08/2023",
    description: "Các mẫu mới với kiểu dáng đẹp và phong cách đa dạng.",
  },
  {
    id: 7,
    title: "Mua 2 sản phẩm, tặng 1 sản phẩm",
    date: "26/08/2023",
    description: "Mua sắm ngay hôm nay để nhận ưu đãi đặc biệt từ chúng tôi.",
  },
  {
    id: 8,
    title: "Sản phẩm cao cấp từ thương hiệu nổi tiếng",
    date: "27/08/2023",
    description: "Khám phá những sản phẩm chất lượng hàng đầu từ thương hiệu uy tín.",
  },
  {
    id: 9,
    title: "Giảm giá đặc biệt cho thành viên VIP",
    date: "28/08/2023",
    description: "Thành viên VIP sẽ nhận được ưu đãi độc quyền và giảm giá đặc biệt.",
  },
  {
    id: 10,
    title: "Combo sản phẩm - Tiết kiệm tới 30%",
    date: "29/08/2023",
    description: "Lựa chọn các combo sản phẩm để tiết kiệm chi phí mua sắm.",
  },
  {
    id: 11,
    title: "Ưu đãi đặc biệt cho ngày lễ",
    date: "30/08/2023",
    description: "Chuẩn bị cho ngày lễ với những ưu đãi và sản phẩm độc đáo.",
  },
  {
    id: 12,
    title: "Quà tặng kèm - Đón nhận ngay",
    date: "31/08/2023",
    description: "Khi mua sản phẩm bất kỳ, bạn sẽ nhận được quà tặng hấp dẫn từ chúng tôi.",
  },
  {
    id: 13,
    title: "Dành riêng cho bạn - Ưu đãi đặc biệt",
    date: "01/09/2023",
    description: "Chúng tôi xin gửi lời tri ân đến bạn với ưu đãi đặc biệt.",
  },
  {
    id: 14,
    title: "Sản phẩm công nghệ - Đỉnh cao hiện đại",
    date: "02/09/2023",
    description: "Khám phá những sản phẩm công nghệ mới nhất và hiện đại nhất.",
  },
  {
    id: 15,
    title: "Mua sắm thông minh - Tiết kiệm thời gian",
    date: "03/09/2023",
    description: "Dễ dàng mua sắm trực tuyến với nhiều ưu đãi và tiện ích.",
  },
  {
    id: 16,
    title: "Thời trang nam - Phong cách lịch lãm",
    date: "04/09/2023",
    description: "Cập nhật tủ đồ của bạn với những mẫu thời trang nam mới nhất.",
  },
  {
    id: 17,
    title: "Đồng hồ cao cấp - Thể hiện đẳng cấp",
    date: "05/09/2023",
    description: "Mang trên mình những chiếc đồng hồ đẳng cấp và sang trọng.",
  },
  {
    id: 18,
    title: "Hàng mới về - Những mẫu đẹp không thể bỏ lỡ!",
    date: "06/09/2023",
    description: "Sản phẩm mới với thiết kế độc đáo và chất lượng tốt đã sẵn sàng đón bạn.",
  },
  {
    id: 19,
    title: "Mua 1 tặng 1 - Cơ hội đến từ nhà sản xuất",
    date: "07/09/2023",
    description: "Chương trình khuyến mãi đặc biệt: Mua một sản phẩm, tặng một sản phẩm khác.",
  },
  {
    id: 20,
    title: "Giảm giá cuối mùa - Chờ đón thảm đỏ",
    date: "08/09/2023",
    description: "Đến ngay cửa hàng để tham gia chương trình giảm giá lớn nhất cuối mùa.",
  },
];



  const RenderItem = ({item})=>{
    return(
    <View style={{ marginTop: 10, padding: 10, backgroundColor: "white" }}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View>
        <Text style={{ fontSize: 16, fontWeight: '600', color: Constants.COLOR.BLACK }}>
          {item.title}
        </Text>
      </View>
      <View>
        <Text style={{ fontSize: 18, color: Constants.COLOR.BLACK }}>
          {item.date}
        </Text>
      </View>
    </View>
    <Text style={{ fontSize: 14, color: Constants.COLOR.BLACK }}>
      {item.description}
    </Text>
  </View>
  )
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textTitleScreen}>Gợi ý dành riêng cho bạn</Text>
      </View>
      <View style={styles.body}>

       <FlatList
        data={data}
        renderItem={RenderItem}
        keyExtractor={item => item.id}
       />
        
      </View>
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: Constants.COLOR.DARKRED,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitleScreen: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Constants.COLOR.WHITE,
  },

  body: {
    flex: 12,
  },
});
