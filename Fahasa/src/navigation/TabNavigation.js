import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Constants } from "../Constant";
import HomeScreen from "../screen/home/HomeScreen";
import AuthStack from "./AuthStack";
import SuggestScreen from "../screen/suggest/SuggestScreen";
import Notification from "../screen/notification/Notification";
import ScreenCart from "../screen/cart/screenCart/ScreenCart";
import ScreenOrder2 from"../screen/order/order2/ScreenOrder2";
import ScreenOrder3 from"../screen/order/order3/ScreenOrder3";


const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}
     >
      <Tab.Screen
        name="Trang chủ"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/IconHome.png")}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused
                    ? Constants.COLOR.DARKRED
                    : Constants.COLOR.BLACK,
                }}
              />
            </View>
          ),
        }}
      />
        <Tab.Screen
        name="Tài khoản"
        component={AuthStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/IconProFile.png")}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused
                    ? Constants.COLOR.DARKRED
                    : Constants.COLOR.BLACK,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Gợi ý"
        component={SuggestScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/IconCatelog.png")}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused
                    ? Constants.COLOR.DARKRED
                    : Constants.COLOR.BLACK,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Thông báo"
        component={Notification}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/IconSearch.png")}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused
                    ? Constants.COLOR.DARKRED
                    : Constants.COLOR.BLACK,
                }}
              />
            </View>
          ),
        }}
      />
      

<Tab.Screen
        name="Giỏ hàng"
        component={ScreenCart}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/IconCart.png")}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused
                    ? Constants.COLOR.DARKRED
                    : Constants.COLOR.BLACK,
                }}
              />
            </View>
          ),
        }}
      />
    
    </Tab.Navigator>
  );
};

export default TabNavigation;
