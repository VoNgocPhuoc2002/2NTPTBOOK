import { Text, View, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./Styles";
import { SafeAreaView } from "react-native-safe-area-context";
const Catelogcreen = () => {
  const data = [
    { id: 1, source: require("../assets/Catelog.png") },
    { id: 2, source: require("../assets/Catelog.png") },
    { id: 3, source: require("../assets/Catelog.png") },
    { id: 4, source: require("../assets/Catelog.png") },
    { id: 5, source: require("../assets/Catelog.png") },
    { id: 6, source: require("../assets/Catelog.png") },
    { id: 7, source: require("../assets/Catelog.png") },
    { id: 8, source: require("../assets/Catelog.png") },
    { id: 9, source: require("../assets/Catelog.png") },
    { id: 10, source: require("../assets/Catelog.png") },
    { id: 11, source: require("../assets/Catelog.png") },
    { id: 12, source: require("../assets/Catelog.png") },

    // Add more images to the data array as needed
  ];
  
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
          <Image source={require("../assets/IconMenu.png")} />
          <Image source={require("../assets/IconLogo.png")} />
          <View style={styles.viewHollow}></View>
        </View>
      </View>
      <View style={styles.body}>
        <View>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Catelogcreen;
