import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'

import Splash from './src/pages/Splash'
import Home from './src/pages/Home'
import Describe from './src/pages/describe'

export default function App() {

  const Stack  = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Stack.Screen name='splash' component={Splash}></Stack.Screen>
        <Stack.Screen name='Home' component={Home}></Stack.Screen>
        <Stack.Screen name='Describe' component={Describe}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
