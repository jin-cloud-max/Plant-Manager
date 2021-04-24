import React from 'react';


import { createStackNavigator } from '@react-navigation/stack'

import colors from '../styles/colors'

import { Welcome } from '../screens/Welcome';
import { UserIdentification } from '../screens/UserIdentification';
import { Confirmation } from '../screens/Confirmation';
import { SelectPlant } from '../screens/SelectPlant';
import { SavePlant } from '../screens/SavePlant';
import { MyPlants } from '../screens/MyPlants';
import { AuthRoutes } from './tab.routes';

const Stack = createStackNavigator()

export function StackNavigator() {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.white
        }
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
      />

      <Stack.Screen
        name="UserIdentification"
        component={UserIdentification}
      />

      <Stack.Screen
        name="Confirmation"
        component={Confirmation}
      />

      <Stack.Screen
        name="SelectPlant"
        component={AuthRoutes}
      />

      <Stack.Screen
        name="SavePlant"
        component={SavePlant}
      />

      <Stack.Screen
        name="MyPlants"
        component={AuthRoutes}
      />
      
    </Stack.Navigator>
  )
}
