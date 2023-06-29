import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Constants } from "../Constant";
import LoginScreen from "../screen/screenAuthStack/Login/LoginScreen";
import ProfileScreen from "../screen/screenAuthStack/profile/ProfileScreen";
import LoadingScreen from "../screen/screenAuthStack/loading/LoadingScreen";
const Stack = createNativeStackNavigator();

const AuthStack = () => {
   
    return (
        <Stack.Navigator>
          <Stack.Screen
            name="LoadingScreen"
            component={LoadingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      );
    };

export default AuthStack;
