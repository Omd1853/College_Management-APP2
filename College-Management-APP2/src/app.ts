import * as React from 'react';
import * as ReactNativeScript from 'react-nativescript';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { LoginScreen } from './components/LoginScreen';
import { StatsScreen } from './components/StatsScreen';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen 
        name="Login" 
        component={LoginScreen}
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen 
        name="Stats" 
        component={StatsScreen}
        options={{ title: 'College Statistics' }}
      />
      <Stack.Screen 
        name="PublicStats" 
        component={() => <StatsScreen isPublic={true} />}
        options={{ title: 'Public Statistics' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

ReactNativeScript.start(React.createElement(App, {}, null));