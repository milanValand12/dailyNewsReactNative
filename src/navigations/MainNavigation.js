import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NewsStackNavigation from './stacks/NewsStackNavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const MainStack = createNativeStackNavigator();
export default function MainNavigation() {
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{headerShown: false}}>
        <MainStack.Screen name="news" component={NewsStackNavigation} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
