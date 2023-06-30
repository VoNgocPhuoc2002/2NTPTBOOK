import React from "react";
import { Constants } from "../Constant";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthTab from "./AuthTab";
import HomeScreen from "../screen/screenHomeStack/home/HomeScreen";
import Catelogcreen from "../screen/screenHomeStack/suggest/SuggestScreen";
import HomeTab from "./HomeTab";
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
         <Stack.Screen
        name="HomeTab"
        component={HomeTab}
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
    
   
    </Stack.Navigator>
  );
};

export default HomeStack;
