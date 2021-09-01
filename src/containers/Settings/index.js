import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { styles } from "./styles";

const Settings = (props) =>{
  return (
    <>
    <View style={styles.header}>
      <View>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <MaterialCommunityIcons name="arrow-left" color= '#808080' size={30} style={{marginLeft: 10, marginTop: 10,}}/>
      </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.Settingstext}>Settings</Text>  
      </View>
    </View>
    <ScrollView style={{backgroundColor: '#fff'}}>
    <View style={styles.container}>
      <View style={styles.rowview}>
        <View style={{flexDirection: 'row'}}>
          <SimpleLineIcons name="user" color= '#000' size={25}/>
          <Text style={{fontSize: 14, marginLeft: 30, color: '#000', fontWeight: 'bold'}}>Account and Profile</Text>
        </View>
        <MaterialIcons name="arrow-forward-ios" color= '#808080' size={25} style={{marginRight: 20}}/>
      </View>
      <View style={styles.line}></View>
      <View style={styles.rowview}>
        <View style={{flexDirection: 'row'}}>
          <Ionicons name="settings-outline" color= '#000' size={25}/>
          <Text style={{fontSize: 14, marginLeft: 30, color: '#000', fontWeight: 'bold'}}>General</Text>
        </View>
        <MaterialIcons name="arrow-forward-ios" color= '#808080' size={25} style={{marginRight: 20}}/>
      </View>
      <View style={styles.line}></View>
      <View style={styles.rowview}>
        <View style={{flexDirection: 'row'}}>
          <SimpleLineIcons name="lock" color= '#000' size={25}/>
          <Text style={{fontSize: 14, marginLeft: 30, color: '#000', fontWeight: 'bold'}}>Privacy</Text>
        </View>
        <MaterialIcons name="arrow-forward-ios" color= '#808080' size={25} style={{marginRight: 20}}/>
      </View>
      <View style={styles.line}></View>
      <View style={styles.rowview}>
        <View style={{flexDirection: 'row'}}>
          <SimpleLineIcons name="pencil" color= '#000' size={25}/>
          <Text style={{fontSize: 14, marginLeft: 30, color: '#000', fontWeight: 'bold'}}>Appearance</Text>
        </View>
        <MaterialIcons name="arrow-forward-ios" color= '#808080' size={25} style={{marginRight: 20}}/>
      </View>
      <View style={styles.line}></View>
      <View style={styles.rowview}>
        <View style={{flexDirection: 'row'}}>
          <Ionicons name="call-outline" color= '#000' size={25}/>
          <Text style={{fontSize: 14, marginLeft: 30, color: '#000', fontWeight: 'bold'}}>Calling</Text>
        </View>
        <MaterialIcons name="arrow-forward-ios" color= '#808080' size={25} style={{marginRight: 20}}/>
      </View>
      <View style={styles.line}></View>
      <View style={styles.rowview}>
        <View style={{flexDirection: 'row'}}>
          <MaterialCommunityIcons name="message-text-outline" color= '#000' size={25}/>
          <Text style={{fontSize: 14, marginLeft: 30, color: '#000', fontWeight: 'bold'}}>Messaging</Text>
        </View>
        <MaterialIcons name="arrow-forward-ios" color= '#808080' size={25} style={{marginRight: 20}}/>
      </View>
      <View style={styles.line}></View>
      <View style={styles.rowview}>
        <View style={{flexDirection: 'row'}}>
          <Ionicons name="notifications-outline" color= '#000' size={25}/>
          <Text style={{fontSize: 14, marginLeft: 30, color: '#000', fontWeight: 'bold'}}>Notifications</Text>
        </View>
        <MaterialIcons name="arrow-forward-ios" color= '#808080' size={25} style={{marginRight: 20}}/>
      </View>
      <View style={styles.line}></View>
      <View style={styles.rowview}>
        <View style={{flexDirection: 'row'}}>
          <AntDesign name="contacts" color= '#000' size={25}/>
          <Text style={{fontSize: 14, marginLeft: 30, color: '#000', fontWeight: 'bold'}}>Contacts</Text>
        </View>
        <MaterialIcons name="arrow-forward-ios" color= '#808080' size={25} style={{marginRight: 20}}/>
      </View>
      <View style={styles.line}></View>
      <View style={styles.rowview}>
        <View style={{flexDirection: 'row'}}>
          <Ionicons name="ios-help-circle-outline" color= '#000' size={25}/>
          <Text style={{fontSize: 14, marginLeft: 30, color: '#000', fontWeight: 'bold'}}>Help & feedback</Text>
        </View>
        <MaterialIcons name="arrow-forward-ios" color= '#808080' size={25} style={{marginRight: 20}}/>
      </View>
      <View style={styles.line}></View>
    </View>
    </ScrollView>
    </>
  );
}

export default Settings;