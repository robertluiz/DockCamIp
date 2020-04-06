import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './pages/Main';

const Stack = createStackNavigator();

const styledHeader = {
    headerTitleAlign: 'center',
    headerBackTitleVisible: false,
    headerStyle :{
        backgroundColor: '#7159c1'
    },
    headerTintColor: '#FFF'
}

function Routes() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" options={{ ...Main.Options, ...styledHeader }} component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
