import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';
import ProductList from '../components/ProductList';
import ProductDetail from '../components/ProductDetail';
import {RootStackParamList} from '../types';

const Stack = createNativeStackNavigator<RootStackParamList>();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ProductList"
        screenOptions={{
          headerShown: true,
        }}>
        <Stack.Screen
          name="ProductList"
          component={ProductList}
          options={{headerShown: true, headerTitleAlign: 'center'}}
        />

        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{headerShown: true, headerTitleAlign: 'center'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
