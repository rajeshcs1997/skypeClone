import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { styles } from "./styles";

const Profile = (props) =>{
  return (
    <>
    <View style={styles.header}>
      <View>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <MaterialCommunityIcons name="arrow-left" color= '#808080' size={30} style={{marginLeft: 10, marginTop: 10,}}/>
      </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => props.navigation.navigate('Signin')}>
          <Text style={styles.logtext}>Sign out</Text>
        </TouchableOpacity>  
      </View>
    </View>
    <ScrollView style={{backgroundColor: '#fff'}}>
    <View style={styles.container}>
      <View style={styles.profilecontainer}>
        <View>
          <Image
            style={styles.profilelogo}
            source={require('../../assets/profile.jpg')}
          />
        </View>
        <View>
          <Text style={styles.profiletext}>Rajesh</Text>
          <Text style={styles.numtext}>+91 1234567890</Text>
        </View>
      </View> 
      <View style={styles.rowview}>
        <View style={styles.dot}></View>
        <Text style={{fontSize: 15, marginLeft: 30}}>Active</Text>
      </View>
      <View style={styles.line}></View>
      <View style={styles.rowview}>
        <Ionicons name="megaphone-outline" color= '#808080' size={25}/>
        <Text style={{fontSize: 15, marginLeft: 30, color: '#808080'}}>Share what you are up to</Text>
      </View>
      <View style={styles.line}></View>
      <View style={styles.rowview}>
        <Ionicons name="bookmark-outline" color= '#808080' size={25}/>
        <Text style={{fontSize: 15, marginLeft: 30}}>Bookmarks</Text>
      </View>
      <View style={styles.line}></View>
      <View style={styles.rowview}>
        <Ionicons name="people" color= '#000' size={25}/>
        <Text style={{fontSize: 15, marginLeft: 30, fontWeight: 'bold'}}>Invite Friends</Text>
      </View>
      <View style={styles.managesection}>
        <Text style={{color: '#808080'}}>MANAGE</Text>
      </View>
      <View style={styles.rowview}>
        <SimpleLineIcons name="user" color= '#000' size={25}/>
        <Text style={{fontSize: 15, marginLeft: 30, color: '#000'}}>Skype profile</Text>
      </View>
      <View style={styles.line}></View>
      <View style={styles.rowview}>
        <Entypo name="old-phone" color= '#000' size={25}/>
        <Text style={{fontSize: 15, marginLeft: 30, color: '#000'}}>Skype to Phone</Text>
      </View>
      <View style={styles.line}></View><View style={styles.rowview}>
        <MaterialCommunityIcons name="phone-outgoing-outline" color= '#000' size={25}/>
        <Text style={{fontSize: 15, marginLeft: 30, color: '#000'}}>Skype Number</Text>
      </View>
      <View style={styles.line}></View>
      <TouchableOpacity onPress={() => props.navigation.navigate('Settings')}>
        <View style={styles.rowview}>
          <Ionicons name="settings-outline" color= '#000' size={25}/>
          <Text style={{fontSize: 15, marginLeft: 30, color: '#000'}}>Settings</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.line}></View><View style={styles.rowview}>
        <Ionicons name="bulb-outline" color= '#000' size={25}/>
        <Text style={{fontSize: 15, marginLeft: 30, color: '#000'}}>Whats new</Text>
      </View>
      <View style={styles.line}></View>
    </View>
    </ScrollView>
    </>
  );
}

export default Profile;