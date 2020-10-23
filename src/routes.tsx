import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import Profile from './pages/Profile';
import RegisterMap from './pages/RegisterMap';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerStyle: {
              backgroundColor: '#F9FAFC',
            },
            headerTitleAlign: 'center',
            headerTitle: 'Orfanato',
            headerTitleStyle: {
              color: '#8FA7B2',
            },
            headerTintColor: '#15B6D6',
          }}
        />
        <Stack.Screen
          name="RegisterMap"
          component={RegisterMap}
          options={{
            headerStyle: {
              backgroundColor: '#F9FAFC',
            },
            headerTitleAlign: 'center',
            headerTitle: 'Adicione um orfanato',
            headerTitleStyle: {
              color: '#8FA7B2',
            },
            headerTintColor: '#15B6D6',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
