import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewsCategoryScreen from '../../screens/news/category';
import NewsListScreen from '../../screens/news/list';

const Stack = createNativeStackNavigator();

function NewsStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NewsCategoryScreen"
        component={NewsCategoryScreen}
        options={{title: 'Categories'}}
      />
      <Stack.Screen name="NewsListScreen" component={NewsListScreen} />
    </Stack.Navigator>
  );
}

export default NewsStackNavigation;
