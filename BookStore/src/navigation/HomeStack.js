import React from "react";
import { Constants } from "../Constant";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./TabNavigation";
import HomeScreen from "../screen/screenHomeStack/home/HomeScreen";
import ProductDetail from "../screen/screenHomeStack/catelog/ProductDetail";
import Catelogcreen from "../screen/screenHomeStack/catelog/Catelogcreen";
import AuthStack from "./AuthStack";
const Stack = createNativeStackNavigator();

const HomeStack = () => {
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
        name="Catelogcreen"
        component={Catelogcreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{ headerShown: false }}
      />
   
    </Stack.Navigator>
  );
};

export default HomeStack;
