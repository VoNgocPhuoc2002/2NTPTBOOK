import {Image, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React,{useState} from 'react';
import styles from './Styles';
import Login from './component/login/Login';
import Signup from './component/signup/Signup';

const LoginScreen = () => {
  const [activeTab, setActiveTab] = useState('Tab 1');
  const handleTabPress = activeTab => {
    setActiveTab(activeTab);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/Logo.png')} />
        <View style={styles.groupMoveScreen}>
          <View style={styles.viewLogin}>
          <TouchableOpacity
            style={[
              styles.tabContent,
              activeTab === 'Tab 1' ? styles.activeTab : null,
            ]}
            onPress={() => handleTabPress('Tab 1')}>
            <Text style={ activeTab === 'Tab 1' ?styles.isTextLogin:styles.textLogin}>Login</Text>
            </TouchableOpacity>
            {activeTab === 'Tab 1' ? (
              <View style={styles.line}></View>
            ) : null}
          </View>
          <View style={styles.viewSignup}>
            <TouchableOpacity onPress={() => handleTabPress('Tab 2')}>
                <Text style={ activeTab === 'Tab 2' ?styles.isTextLogin:styles.textLogin}>Sign-up</Text>
            </TouchableOpacity>
            {activeTab === 'Tab 2' ? (
              <View style={styles.line}></View>
            ) : null}
          </View>
        </View>
      </View>
      <View style={styles.body}>
      {activeTab === 'Tab 1' ? (
         <View>
            <Login/>
          </View>
        ) : activeTab === 'Tab 2' ? (
          <View >
            <Signup/>
          </View>
        ) :null}
      </View>
    </View>
  );
};

export default LoginScreen;
