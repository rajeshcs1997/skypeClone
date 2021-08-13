import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 20,
    flexDirection: 'row',
    borderBottomColor: '#808080',
    borderBottomWidth: 0.5,
    elevation: 2
  },
  container: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff', 
  },
  Settingstext: {
    marginLeft: 50,
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold'
  },
  rowview: {
    marginTop: 20,
    marginLeft: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  line: {
    borderBottomColor: '#808080',
    borderBottomWidth: 0.5,
    //width: 370,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
}); 

export default Settings;