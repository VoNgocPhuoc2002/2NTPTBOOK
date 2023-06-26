import { View, Text } from 'react-native'
import React from 'react'

import { SafeAreaView } from 'react-native-safe-area-context';
import RootStack from './src/navigation/RootStack';


const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <RootStack/>
    </SafeAreaView>
   
  )
}

export default App
