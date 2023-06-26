import { StyleSheet, Text, View,Image,TextInput, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import styles from './Styles'

const Signup = () => {
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setReShowPassword] = useState(false);
    const handleShowPassword = () => {
      setShowPassword(!showPassword);
    };
    const handleShowRePassword = () => {
        setReShowPassword(!showRePassword);
      };

      const [textEmail, setTextEmail] = useState('');
      const [textName, setTextName] = useState('');
      const handleClearTextEmail = () => {
        setTextEmail('');
      };  const handleClearTextName = () => {
        setTextName('');
      };
    
  return (
    <View style={styles.container}>
       <View style={styles.groupInput}>
        <View style={styles.viewInput}>
          <TextInput placeholder='Your Email'
            value={textEmail}
            onChangeText={setTextEmail}
          />
          <TouchableOpacity onPress={handleClearTextEmail}>
          <Image style={styles.iconImage} source={require("../../../assets/IconDelete.png")}/>
          </TouchableOpacity>
        </View>
        <View style={styles.viewInput}>
          <TextInput placeholder='Your Email'
          value={textName}
            onChangeText={setTextName}
          />
          <TouchableOpacity onPress={handleClearTextName}>
          <Image style={styles.iconImage} source={require("../../../assets/IconDelete.png")}/>
          </TouchableOpacity>
        </View>
        
        <View style={styles.viewInput}>
        <TextInput 
            secureTextEntry={!showPassword}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}/>
            <TouchableOpacity onPress={handleShowPassword}>
          <Image style={styles.iconImage} source={require("../../../assets/IconEye.png")}/>
          </TouchableOpacity>
        </View>
        <View style={styles.viewInput}>
          <TextInput 
            secureTextEntry={!showRePassword}
            placeholder="Re-enter the password"
            value={rePassword}
            onChangeText={setRePassword}/>
            <TouchableOpacity onPress={handleShowRePassword}>
          <Image style={styles.iconImage} source={require("../../../assets/IconEye.png")}/>
          </TouchableOpacity>

        </View>
      </View>
      <View style={styles.viewBTNLogin}>
          <Text style={styles.textBTN}>Create Acount</Text>
        </View>
        <View style={styles.viewFooter}>
            <Text style={styles.textLeft}>Already have an account?</Text>
            <Text style={styles.textRight}>Log in here</Text>
        </View>
    </View>
  )
}

export default Signup
