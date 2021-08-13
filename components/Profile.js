import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';

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
    <View style={styles.container}>
      <View style={styles.profilecontainer}>
        <View>
          <Image
            style={styles.profilelogo}
            source={require('../assets/profile.jpg')}
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
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#808080',
    borderBottomWidth: 0.5,
    elevation: 2
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fff', 
  },
  logtext: {
    marginRight: 50,
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000'
  },
  profilecontainer: {
    paddingTop: 10,
    paddingLeft: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  profilelogo: {
    height: 60,
    width: 60,
    borderRadius: 60,
    paddingTop: 20
  },
  profiletext: {
    fontSize: 20,
    marginLeft: 20,
  },
  numtext: {
    marginLeft: 20,
    fontSize:12,
  },
  dot: {
    backgroundColor: 'green',
    width: 10,
    height: 10,
    borderRadius: 10,
    marginTop: 7
  },
  rowview: {
    marginTop: 20,
    marginLeft: 30,
    flexDirection: 'row'
  },
  line: {
    borderBottomColor: '#808080',
    borderBottomWidth: 0.5,
    //width: 370,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  managesection: {
    backgroundColor: '#b3e0f5',
    height: 40,
    marginTop: 20,
    paddingLeft: 20,
    paddingTop: 10
  }
}); 

export default Profile;