import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Constants} from '../Constant';
import LoginScreen from '../screen/screenAuthStack/Login/LoginScreen';
import ProfileScreen from '../screen/screenAuthStack/profile/ProfileScreen';
import LoadingScreen from '../screen/screenAuthStack/loading/LoadingScreen';
import Notification from '../screen/screenAuthStack/notification/Notification';
import SuggestScreen from '../screen/screenAuthStack/suggest/SuggestScreen';
import AuthTab from './AuthTab';
import CartNoItem from '../screen/screenHomeStack/cart/CartNoItem';
import HomeScreen from '../screen/screenHomeStack/home/HomeScreen';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AuthTab"
        component={AuthTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SuggestScreen"
        component={SuggestScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CartNoItem"
        component={CartNoItem}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
