import React from "react";
import { Constants } from "../Constant";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./TabNavigation";
import HomeScreen from "../screen/home/HomeScreen";
import EditProfile from "../screen/profile/editProfile/EditProfile";
import ProfileScreen from "../screen/profile/ProfileScreen";
import ListProducts from "../screen/home/listProducts/ListProducts";
import DetailProducts from "../screen/home/detailProducts/DetailProducts";
import SearchScreen from "../screen/home/search/SearchScreen";
import ScreenCart from "../screen/cart/screenCart/ScreenCart";
import ScreenOrder1 from "../screen/order/order1/ScreenOrder1";
import ScreenOrder2 from "../screen/order/order2/ScreenOrder2";
import ScreenOrder3 from "../screen/order/order3/ScreenOrder3";
import ScreenOrderDetail from "../screen/order/orderDetails/ScreenOrderDetail";
const Stack = createNativeStackNavigator();

const AppStack = () => {

  return (
    <Stack.Navigator>
        <Stack.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
          <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        name="ListProducts"
        component={ListProducts}
        options={{ headerShown: false }}
      /> 
      <Stack.Screen
        name="DetailProducts"
        component={DetailProducts}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
          <Stack.Screen
        name="ScreenCart"
        component={ScreenCart}
        options={{ headerShown: false }}
      />
         <Stack.Screen
        name="ScreenOrder1"
        component={ScreenOrder1}
        options={{ headerShown: false }}
      />    
      <Stack.Screen
        name="ScreenOrder2"
        component={ScreenOrder2}
        options={{ headerShown: false }}
      />    
      <Stack.Screen
        name="ScreenOrder3"
        component={ScreenOrder3}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ScreenOrderDetail"
        component={ScreenOrderDetail}
        options={{ headerShown: false }}
      />
    
    
   
    </Stack.Navigator>
  );
};

export default AppStack;
