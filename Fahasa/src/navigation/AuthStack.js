import React ,{useContext}from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screen/Login/LoginScreen';
import EditProfile from '../screen/profile/editProfile/EditProfile';
import { AppContext } from '../ultil/AppContext';
import Login from '../screen/Login/component/login/Login';
import ProfileScreen from '../screen/profile/ProfileScreen';
import Signup from '../screen/Login/component/signup/Signup';

const Stack = createNativeStackNavigator();
const AuthStack = () => {

  const {isLogin} = useContext(AppContext);
console.log('====================================');
console.log(isLogin);
console.log('====================================');
  return (
    <Stack.Navigator>
      {isLogin ? (
        <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      ) : (
        <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      )}
         <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
         <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
