import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { styles } from "./styles";

export const Chat = (props) =>{
  return (
    <>
    <ScrollView style={{backgroundColor: '#fff'}}>
    <TouchableOpacity  onPress={()=>props.navigation.navigate('Profilechat')}>
      <View style={styles.profilecontainer}>
        <View>
          <Image
            style={styles.profilelogo}
            source={require('../../assets/profile.jpg')}
          />
        </View>
        <View style={{width: '100%', marginRight: 20}}>
          <Text style={styles.profiletext}>Rajesh</Text>
          <View style={styles.line}></View>
        </View>
      </View>
    </TouchableOpacity>
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/chat.png')}
      />
      <Text style={styles.starttext}>Start chatting on Skype</Text>
      <Text style={{color: '#555756', fontSize: 17,}}><EvilIcons name="search" color= '#555756'  size={20}/>Use Search to find anyone on skype</Text>
      <TouchableOpacity style={{color: '#555756', fontSize: 17, marginLeft: 50, marginRight: 30, marginTop: 20}} onPress={() => {
        props.navigation.navigate('Contacts')}}>
        <Text style={{color: '#555756', fontSize: 17}}><FontAwesome name="user-o" color= '#555756'  size={20}/> Go to contacts to see your skype and device contacts</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
    </>
  );
}

export default Chat; 
