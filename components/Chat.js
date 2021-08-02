import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export const Chat = (props) =>{
  return (
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
});

export default Chat; 
