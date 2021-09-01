import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Splash from './src/containers/Splash/index';
import Signin from './src/containers/Signin/index';
import Signup from './src/containers/Signup/index';
import Dashboard from './src/containers/Dashboard/index';
import Search from './src/containers/Search/index';
import Notification from './src/containers/Notification/index';
import Profilechat from './src/containers/Profilechat/index';
import Profile from './src/containers/Profile/index';
import Settings from './src/containers/Settings/index';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}/>
          <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }}/>
          <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }}/>
          <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }}/>
          <Stack.Screen name="Search" component={Search} options={{ headerShown: false }}/>
          <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }}/>
          <Stack.Screen name="Profilechat" component={Profilechat} options={{ headerShown: false }}/>
          <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
          <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
