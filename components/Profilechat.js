import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, TextInput, FlatList, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Emoji from 'react-native-emoji';
import EmojiSelector from "react-native-emoji-selector";
import moment from 'moment';

const Profilechat = (props) =>{
  const [hisection, setHisection] = React.useState(true)
  const [wavesection, setWavesection] = React.useState(true)
  const [inputtext, setInputtext] = React.useState("")
  const [keyboardshow, setKeyboardshow] = React.useState(false)
  const [message, setMessage] = React.useState([])

  const handleInput = (text) =>{
    setKeyboardshow(false)
    setInputtext(text)
    //setMessage()
  }
  const handleEmoji = (emoji) =>{
    setInputtext(emoji)
  }
  const handleMessage = () =>{
    let fdata = {name:inputtext, date: Date.now()}
    let data=message;
    data.push(fdata);
    setMessage(data);
    setInputtext("")
    setHisection(false)
    setWavesection(false)
  }
  return (
    <>
    <View style={styles.header}>
      <View style={{flexDirection: 'row',}}>
        <View>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" color= '#808080' size={30} style={{marginLeft: 10, marginTop: 10,}}/>
        </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.profiletext}>Rajesh</Text>  
        </View>
      </View>
      <View style={{flexDirection: 'row',marginTop: 10,paddingRight: 10}}>
        <View>
          <Feather name="video" color= '#808080' size={30} style={{marginRight: 20}}/>
        </View>
        <View>
          <Ionicons name="call-outline" color= '#808080' size={30} />
        </View>
      </View>
    </View>
    <ScrollView style={{backgroundColor: '#fff',}}>
    <View style={styles.container}>
      <Image
        style={styles.profilelogo}
        source={require('../assets/profile.jpg')}
      />
      <Text style={styles.screenprofiletext}>Rajesh</Text>
      <Text style={{marginTop: 10, color: '#808080'}}><Ionicons name="people-outline" color= '#808080' size={15} />No Mutual Contacts</Text>
      {hisection ? <View style={styles.hiiview}>
        <Emoji name="wave" style={{fontSize: 50}} />
        <Text>Say hi to Rajesh with wave</Text>
        <TouchableOpacity style={styles.hibutton} onPress={()=>setHisection(false)}>
          <Text style={{fontSize: 20,fontWeight: 'bold', color: '#fff'}}>Say hi</Text>
        </TouchableOpacity>
      </View> : null}
      {(wavesection && !hisection) ? <Emoji name="wave" style={{fontSize: 50, marginTop: 100}} />: null}
    </View>
    {
      message && message.map((val,key)=>{
        return(
        <View style={{backgroundColor: '#fff'}}>
          <Text style={styles.datetext}>{moment(val.date).format('H:mm:ss')}</Text>
          <Text style={styles.messagetext}>{val.name}</Text>
        </View>
        )
      })
    }
     </ScrollView> 
    <View style={styles.footer}>
      <AntDesign name="pluscircle" color= '#00aff0' size={35} style={{marginRight: 20}}/>
      <View style={{flexDirection: 'row',}}>
        <TextInput
          style={!inputtext? styles.input : styles.input1}
          onChangeText={(text)=>{handleInput(text)}}
          value={inputtext}
          placeholder="Type a message"
        />
        {/*<TouchableOpacity style={styles.inputbutton} onPress={()=> setKeyboardshow(!keyboardshow)}>
          <Emoji name="smile" style={{color: '#808080'}} />
        </TouchableOpacity>*/}
      </View>
      { !inputtext ? <>
          <Ionicons name="mic-outline" color= '#808080' size={30} />
          <Ionicons name="md-camera-outline" color= '#808080' size={30} />
        </>
      : <TouchableOpacity onPress={()=> handleMessage()}>
          <MaterialCommunityIcons name="arrow-right-bold-circle" color= '#00aff0' size={35}/>
        </TouchableOpacity>}
    </View>
    {/*keyboardshow ? <EmojiSelector columns={12} onEmojiSelected={emoji => handleEmoji(emoji)} /> : null*/}
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
    alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: '#fff', 
  },
  profiletext: {
    marginLeft: 30,
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold'
  },
  profilelogo: {
    height: 100,
    width: 100,
    borderRadius: 100,
    paddingTop: 20
  },
  screenprofiletext: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10
  },
  hibutton: {
    backgroundColor: '#00aff0',
    width: 120,
    height: 40,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  hiiview: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#b3e0f5',
    width: '95%',
    borderRadius: 10,
    padding: 15
  },
  input: {
    height: 40,
    backgroundColor: '#f0f0f0',
    borderRadius: 30,
    // borderTopLeftRadius: 30,
    // borderBottomLeftRadius: 30,
    width: 200,
    padding: 10,
    paddingLeft: 20,
    fontSize: 15,
    marginRight: 0
  },
  input1: {
    height: 40,
    backgroundColor: '#f0f0f0',
    borderRadius: 30,
    // borderTopLeftRadius: 30,
    // borderBottomLeftRadius: 30,
    width: 280,
    padding: 10,
    paddingLeft: 20,
    fontSize: 15,
    marginRight: 20
  },
  inputbutton: {
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:0
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingBottom: 10
  },
  messagetext: {
    marginLeft: 300,
    textAlign: 'center',
    height: 50,
    paddingTop:10,
    fontSize: 18,
    color: '#000',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    marginRight: 20,
    marginBottom: 10,
    backgroundColor: '#fff',
    backgroundColor: '#b3e0f5',
  },
  datetext: {
    marginLeft: 310,
    textAlign: 'center',
    color: '#000',
    marginBottom: 5,
  }
}); 

export default Profilechat;