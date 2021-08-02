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
import Splash from './components/Splash';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
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
	      </Stack.Navigator>
	    </NavigationContainer>
  );
};

export default App;
