import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoadingScreen from "../screen/loading/LoadingScreen";
import { Constants } from "../Constant";
import LoginScreen from "../screen/Login/LoginScreen";
import Login from "../screen/Login/component/login/Login";

const Stack = createNativeStackNavigator();

const AuthStack = ({handleLogin}) => {
   
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
        </Stack.Navigator>
      );
    };

export default AuthStack;
