import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from "./styles";

const Signup = ( props ) =>{
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [secure, setSecure] = React.useState(true)
  const [error, setError] = React.useState("")
  const [passerr, setPasserr] = React.useState("")
  const [shownumfield, setShownumfield] = React.useState(true)
  const [hidepassword, setHidepassword] = React.useState(true)
  const [option, setOption] = React.useState("Use your email address instead")
  const [Users, setUsers] = React.useState([]);

  React.useEffect(async () => {
    const items = await AsyncStorage.getItem('Users');
    const items1 = items == null ? [] : JSON.parse(items);
    setUsers(items1)
  },[]);

  const handlePress = () =>{
  setShownumfield(!shownumfield)
  {shownumfield?setOption("Use a phone number instead"):setOption("Use your email address instead")}  
  setEmail("")
  }

  const handleEmail = (email) =>{
    setEmail(email)
    setError("")
  }

  const handlePassword = (password) =>{
    setPassword(password)
    setPasserr("")
  }

  const handleNext = () =>{
    if(email == ""){
      setError("Field can't be blank")
    }
    else {
      setHidepassword(!hidepassword)
    }
  }

  const handleArrow = () =>{
    setHidepassword(!hidepassword)
    setEmail("")  
  }

  const handleSignup = () =>{
    if(email!=="" && password!==""){
      let fData={Email:email,Password:password}
      let data=Users;
      data.push(fData)
      setUsers(data)
      AsyncStorage.setItem('Users', JSON.stringify(Users))
      setEmail("")
      setPassword("")
       Alert.alert(
        "Signup",
        "Successfull",
        [
          { text: "Sign in", onPress: () => props.navigation.navigate('Signin') }
        ]
      );
    }
    else setPasserr("Field can't be blank")
  }
  return (
  	<ScrollView style={{backgroundColor: '#fff'}}>
    <View style={styles.container}>
      <View style={styles.logocontainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/Skype-logo-1.png')}
        />
      </View>
      <View style={styles.form}>
        <View style={styles.microsoft}>
          <Image
            style={styles.microsoftlogo}
            source={require('../../assets/microsoft.jpg')}
          />
          <Text style={styles.microsofttext}>Microsoft</Text>
        </View>
        {hidepassword && 
        <Text style={styles.signtext}>Create account</Text>}
        { error ? <Text style={{color: 'red', paddingTop: 10}}>{error}</Text> : null}
        {shownumfield ? hidepassword && <TextInput
          style={styles.inputfield}
          placeholderStyle={styles.placeholdertext}
          placeholderTextColor="#808080"
          onChangeText={(email)=>handleEmail(email)}
          placeholder="Phone number"
          value={email}
          keyboardType="numeric"
        /> : hidepassword && <TextInput
          style={styles.inputfield}
          placeholderStyle={styles.placeholdertext}
          placeholderTextColor="#808080"
          onChangeText={(email)=>handleEmail(email)}
          placeholder="someone@example.com"
          value={email}
        />}
        {hidepassword && <><TouchableOpacity onPress={handlePress}>
          <Text style={{color: '#00aff0'}}>{option}</Text>
        </TouchableOpacity>
        <View style={[styles.microsoft, {marginTop: 50, justifyContent: 'flex-end', marginRight: 20}]}>
          <TouchableOpacity style={styles.backbutton} onPress={() => props.navigation.navigate('Signin')}>
            <Text style={styles.backbuttontext}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextbutton} onPress={handleNext}>
            <Text style={styles.nextbuttontext}>Next</Text>
          </TouchableOpacity>
        </View></>}
        { !hidepassword && 
          <>
            <View style={[styles.microsoft, {marginTop: 30}]}>
              <TouchableOpacity onPress={handleArrow}>
                <Icon name="arrowleft" size={20} color="black" />
              </TouchableOpacity>
              <Text style={{marginLeft: 5, fontSize: 20}}>{email}</Text>
            </View>
            <Text style={styles.signtext}>Create Password</Text>
            <Text style={{marginLeft: 5, fontSize: 15}}>Enter the password you would like to use with your account</Text>
            { passerr ? <Text style={{color: 'red', paddingTop: 10}}>{passerr}</Text> : null}
            <TextInput
              style={styles.inputfield}
              placeholderStyle={styles.placeholdertext}
              placeholderTextColor="#808080"
              onChangeText={(password)=>{handlePassword(password)}}
              placeholder="Password"
              secureTextEntry={secure}
              value={password}
            />
            <TouchableOpacity onPress={()=>setSecure(!secure)}>
              <Text style={{color: '#808080'}}>Show password</Text>
            </TouchableOpacity>
            <View style={{ alignItems: 'flex-end', marginRight: 20 }}>
	            <TouchableOpacity style={[styles.nextbutton, { marginTop: 50 }]}>
	              <Text style={styles.nextbuttontext} onPress={handleSignup}>Sign Up</Text>
	            </TouchableOpacity>
	          </View>
          </>
        }
      </View>
    </View>
    </ScrollView>
  );
}

export default Signup;