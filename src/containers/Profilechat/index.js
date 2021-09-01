import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, TextInput, FlatList, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Emoji from 'react-native-emoji';
import EmojiSelector from "react-native-emoji-selector";
import moment from 'moment';
import { styles } from "./styles";

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
        source={require('../../assets/profile.jpg')}
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
      { !inputtext ? <>
          <AntDesign name="pluscircle" color= '#00aff0' size={35} style={{marginRight: 20, marginLeft: 20}}/>
        </>
      : <AntDesign name="pluscircle" color= '#00aff0' size={35} style={{marginRight: 20, marginLeft: 20}}/>}
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
      { !inputtext ? <View style={{flexDirection: 'row', marginLeft: 10, marginRight: 20}}>
          <Ionicons name="mic-outline" color= '#808080' size={30} />
          <Ionicons name="md-camera-outline" color= '#808080' size={30} style={{marginLeft: 10}}/>
        </View>
      : <TouchableOpacity onPress={()=> handleMessage()}>
          <MaterialCommunityIcons name="arrow-right-bold-circle" color= '#00aff0' size={35} style={{marginRight: 30}}/>
        </TouchableOpacity>}
    </View>
    {/*keyboardshow ? <EmojiSelector columns={12} onEmojiSelected={emoji => handleEmoji(emoji)} /> : null*/}
    </>
  );
}

export default Profilechat;