import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screen/home/HomeScreen";
import Catelogcreen from "../screen/catelog/Catelogcreen";
import CartNoItem from "../screen/cart/CartNoItem";
import ProfileScreen from "../screen/profile/ProfileScreen";
import { Constants } from "../Constant";
import SearchNoItem from "../screen/search/SearchNoItem";

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "bold",
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
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
                    ? Constants.COLOR.FILLBTN
                    : Constants.COLOR.BLACK,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Catelogcreen"
        component={Catelogcreen}
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
                    ? Constants.COLOR.FILLBTN
                    : Constants.COLOR.BLACK,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="SearchNoItem"
        component={SearchNoItem}
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
                    ? Constants.COLOR.FILLBTN
                    : Constants.COLOR.BLACK,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="CartNoItem"
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
                    ? Constants.COLOR.FILLBTN
                    : Constants.COLOR.BLACK,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
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
                    ? Constants.COLOR.FILLBTN
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
