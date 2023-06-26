import { View, Text } from 'react-native'
import React from 'react'

import { SafeAreaView } from 'react-native-safe-area-context';
import Address1 from './src/screen/addrees/address1';
// import RootStack from './src/navigation/RootStack';

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      {/* <RootStack/> */}
      <Address1/>
    </SafeAreaView>
   
  )
}

export default App
