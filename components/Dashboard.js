import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Chat from './Chat'
import Contactspage from './Contacts'
import Calls from './Calls'

const Tab = createBottomTabNavigator();

const Menu = (props) =>{
  return (
    <>
    <View style={styles.header}>
      <View>
      <TouchableOpacity onPress={() => props.navigation.navigate('Notification')}>
        <Ionicons name="notifications-outline" color= '#808080' size={30} style={{ marginLeft: 10, marginTop: 10, } }/>
      </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.profile} onPress={() => props.navigation.navigate('Profile')}>
        <Text style={{color: '#00aff0', fontSize: 20, fontWeight: 'bold',marginTop:5,
        marginLeft: 3}}>RP</Text>
        <View style={styles.dot}></View>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', alignItems: 'center',}}>
        <MaterialCommunityIcons name="video-outline" color= '#808080' size={30} />
        <TouchableOpacity onPress={() => props.navigation.navigate('Search')}>
          <EvilIcons name="search" color= '#808080'  size={30} style={{ marginRight: 5, marginLeft: 5}}/>
        </TouchableOpacity>
        <MaterialCommunityIcons name="dots-vertical" color= '#808080'  size={30} style={{ marginRight: 10}}/>
      </View>
    </View>
    <Tab.Navigator
    initialRouteName="HomeScreen"
    tabBarOptions={{
      activeTintColor: '#00aff0',
    }}
  >
    <Tab.Screen
      name="Chats"
      component={Chat}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="chat" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Calls"
      component={Calls}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="call" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Contacts"
      component={Contactspage}
      options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="contacts" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
  </>
  );
}

const styles = StyleSheet.create({  
  header: {
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#808080',
    borderBottomWidth: 0.5,
    elevation: 2
  },
  profile: {
    backgroundColor: '#F0F0F0',
    height: 50,
    width: 50,
    borderRadius: 50,
    marginLeft: 55,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dot: {
    backgroundColor: 'green',
    width: 10,
    height: 10,
    borderRadius: 10,
    marginBottom: -5,
    marginLeft: 30
  }
}); 

export default Menu;