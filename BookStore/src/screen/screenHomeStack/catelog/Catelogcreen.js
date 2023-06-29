import { Text, View, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./Styles";
import { SafeAreaView} from "react-native-safe-area-context";

const Catelogcreen = () => {
  // const navigation = useNavigation();

  // const categories = [
  //   { id: 1, name: 'Electronics' ,source: require("../../assets/Catelog.png")},
  //   { id: 2, name: 'Clothing',source: require("../../assets/Catelog.png") },
  //   { id: 3, name: 'Books',source: require("../../assets/Catelog.png") },
  // ];

  // const products = [
  //   { id: 1, name: 'Laptop', source: require("../../assets/Catelog.png"), categoryId: 1 },
  //   { id: 2, name: 'maylanh', source: require("../../assets/Catelog.png"), categoryId: 1 },
  //   { id: 3, name: 'Sach', source: require("../../assets/Catelog.png"), categoryId: 3 },
  //   { id: 4, name: 'Tap', source: require("../../assets/Catelog.png"), categoryId: 3 },
  //   { id: 5, name: 'hoodie', source: require("../../assets/Catelog.png"), categoryId: 2 },
  //   { id: 6, name: 'tshirt', source: require("../../assets/Catelog.png"), categoryId: 2 },
  // ];

  // const handleProductPress = (product) => {
  //   navigation.navigate("ProductDetail", { product });
  // };

  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.viewCatelog}>
        <Image style={styles.imageCatelog} source={item.source} />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.groupHeader}>
          <Image source={require("../../../assets/IconMenu.png")} />
          <Image source={require("../../../assets/IconLogo.png")} />
          <View style={styles.viewHollow}></View>
        </View>
      </View>
      <View style={styles.body}>
        {/* <View>
          <FlatList
            data={categories}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
          />
        </View> */}
      </View>
    </SafeAreaView>
  );
};

export default Catelogcreen;
