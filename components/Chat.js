import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export const Chat = (props) =>{
  return (
    <>
    <TouchableOpacity  onPress={()=>props.navigation.navigate('Profilechat')}>
      <View style={styles.profilecontainer}>
        <View>
          <Image
            style={styles.profilelogo}
            source={require('../assets/profile.jpg')}
          />
        </View>
        <View>
          <Text style={styles.profiletext}>Rajesh</Text>
          <View style={styles.line}></View>
        </View>
      </View>
    </TouchableOpacity>
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/chat.png')}
      />
      <Text style={styles.starttext}>Start chatting on Skype</Text>
      <Text style={{color: '#555756', fontSize: 17,}}><EvilIcons name="search" color= '#555756'  size={20}/>Use Search to find anyone on skype</Text>
      <TouchableOpacity style={{color: '#555756', fontSize: 17, marginLeft: 50, marginRight: 30, marginTop: 20}} onPress={() => {
        props.navigation.navigate('Contacts')}}>
        <Text style={{color: '#555756', fontSize: 17}}><FontAwesome name="user-o" color= '#555756'  size={20}/> Go to contacts to see your skype and device contacts</Text>
      </TouchableOpacity>
    </View>
    </>
  );
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#fff"  
  },
  logo: {
    width:140,
    height:120,
    backgroundColor:"#fff"
  },
  starttext: {
    fontSize: 30,
    //color: '#555756',
    color: '#000'
  },
  profilecontainer: {
    paddingTop: 10,
    paddingLeft: 10,
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
    paddingTop: 10
  },
  line: {
    borderBottomColor: '#808080',
    borderBottomWidth: 0.5,
    width: 350,
    marginTop: 25,
    marginLeft: 20,
  }
});

export default Chat; 
