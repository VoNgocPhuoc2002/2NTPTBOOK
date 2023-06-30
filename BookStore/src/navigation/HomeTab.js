import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Constants } from "../Constant";
import HomeScreen from "../screen/screenHomeStack/home/HomeScreen";
import CartNoItem from "../screen/screenHomeStack/cart/CartNoItem";
import SuggestScreen from "../screen/screenAuthStack/suggest/SuggestScreen";
import Notification from "../screen/screenAuthStack/notification/Notification";
import ProfileScreen from "../screen/screenHomeStack/profile/ProfileScreen";
const Tab = createBottomTabNavigator();
const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel:false,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
        },
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
        component={ProfileScreen}
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
        component={CartNoItem}
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

export default HomeTab;
