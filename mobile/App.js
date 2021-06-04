import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'

import Splash from './src/pages/Splash'

export default function App() {

  const Stack  = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='splash' component={Splash}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
