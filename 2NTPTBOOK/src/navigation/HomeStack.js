import React from "react";
import { Constants } from "../Constant";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screen/home/HomeScreen";
import Catelogcreen from "../screen/catelog/Catelogcreen";
import ProductDetail from "../screen/catelog/ProductDetail";
import TabNavigation from "./TabNavigation";
import SearchNoItem from "./../screen/search/SearchNoItem"
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

      <Stack.Screen
        name="Search"
        component={SearchNoItem}
        options={{ headerShown: false }}
      />
   
    </Stack.Navigator>
  );
};

export default HomeStack;
