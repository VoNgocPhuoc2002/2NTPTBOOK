import React from 'react'

import { SafeAreaView } from 'react-native-safe-area-context';
import { AppContextProvider } from './src/ultil/AppContext';
import AppStack from './src/navigation/AppStack';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <SafeAreaView style={{flex:1}}>
          <AppStack/>
          </SafeAreaView>
      </NavigationContainer>
    </AppContextProvider>
 
   
  )
}

export default App


