import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from "./styles";
import Button from '../../components/Button/Button'
import Inputfield from '../../components/Inputfield/Inputfield'

const Signin = ( props ) =>{
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showemail, setShowemail] = React.useState(true);
  const [showpassword, setShowpassword] = React.useState(false);
  const [error, setError] = React.useState("");
  const [loginerror, setLoginerror] = React.useState("");
  const [Users, setUsers] = React.useState("");

  React.useEffect(async () => {
    const items = await AsyncStorage.getItem('Users');
    const items1 = items == null ? [] : JSON.parse(items);
    setUsers(items1)
  },[Users]);

  const handleNext = () =>{
    if(email == ""){
      setError("Field can't be blank")
    }
    else {
      setShowemail(!showemail)
      setShowpassword(!showpassword)
    }
  }

  const handleArrow = () =>{
    setShowemail(!showemail)
    setShowpassword(!showpassword)
    setEmail("")
    setLoginerror("")
  }
  const handleEmail = (email) =>{
    setEmail(email)
    setError("")
  }
  
  const handleSignin = () =>{
    let data=Users;
    data.map(value => {
      if (value.Email===email && value.Password===password) {
        setLoginerror("")
        setPassword("")
        setEmail("")
        setShowemail(!showemail)
        setShowpassword(!showpassword)
        props.navigation.navigate('Dashboard')
      }
      if (value.Email!==email || value.Password!==password) {
        setLoginerror("user not exist")
      }
    });
    Users=="" &&  setLoginerror("Please create one before signin")
  }
  //console.log("users", Users)
  return (
  	<ScrollView style={{backgroundColor: '#fff'}}>
    <View style={styles.container}>
      <View style={styles.logocontainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/Skype-logo-1.png')}
        />
      </View>
      <View style={styles.emailform}>
        <View style={styles.microsoft}>
          <Image
            style={styles.microsoftlogo}
            source={require('../../assets/microsoft.jpg')}
          />
          <Text style={styles.microsofttext}>Microsoft</Text>
        </View>

        {showemail &&
          <>
            <Text style={styles.signtext}>Sign in</Text>
            <Text>to continue to skype</Text>
            {/*<TextInput
              style={styles.inputfield}
              placeholderStyle={styles.placeholdertext}
              placeholderTextColor="#808080"
              onChangeText={(email)=>handleEmail(email)}
              placeholder="Skype, phone or email"
            />*/}
            <Inputfield
            	inputfieldStyle={styles.inputfield}
            	placeholdertextStyle={styles.placeholdertext}
            	onInputChange={(email)=>handleEmail(email)}
            	placeholderText={"Skype, phone or email"}
            	secure={false}
            />
            { error ? <Text style={{color: 'red', paddingBottom: 20}}>{error}</Text> : null}
            <View style={styles.microsoft}>
            <Text>No account?</Text>
              {/*<TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
                <Text style={{marginLeft: 5, color: '#00aff0'}}>Create one!</Text>
              </TouchableOpacity>*/}
              <Button buttontextStyle={{marginLeft: 5, color: '#00aff0'}} buttonText={"Create one!"} onHandle= {()=> props.navigation.navigate('Signup')}/>
            </View>
            <View style={[styles.microsoft, {marginTop: 50, justifyContent: 'flex-end', marginRight: 20}]}>
              {/*<TouchableOpacity style={styles.backbutton} onPress={() => props.navigation.navigate('Splash')}>
                <Text style={styles.backbuttontext}>Back</Text>
              </TouchableOpacity>*/}
              <Button buttonStyle={styles.backbutton} buttontextStyle={styles.backbuttontext} buttonText={"Back"} onHandle= {()=> props.navigation.navigate('Splash')}/>
              {/*<TouchableOpacity style={styles.nextbutton} onPress={handleNext}>
                <Text style={styles.nextbuttontext}>Next</Text>
              </TouchableOpacity>*/}
              <Button buttonStyle={styles.nextbutton} buttontextStyle={styles.nextbuttontext} buttonText={"Next"} onHandle= {()=> handleNext()}/>
            </View>
          </>
        }
        { showpassword &&
          <>
            <View style={[styles.microsoft, {marginTop: 30}]}>
              <TouchableOpacity onPress={handleArrow}>
                <Icon name="arrowleft" size={20} color="black" />
              </TouchableOpacity>
              <Text style={{marginLeft: 5, fontSize: 20}}>{email}</Text>
            </View>
            <Text style={styles.signtext}>Enter Password</Text>
            {/*<TextInput
              style={styles.inputfield}
              placeholderStyle={styles.placeholdertext}
              placeholderTextColor="#808080"
              onChangeText={(password)=>setPassword(password)}
              placeholder="Password"
              secureTextEntry={true}
            />*/}
            <Inputfield
            	inputfieldStyle={styles.inputfield}
            	placeholdertextStyle={styles.placeholdertext}
            	onInputChange={(password)=>setPassword(password)}
            	placeholderText={"Password"}
            	secure={true}
            />
            <Text style={{color: "red"}}>{loginerror}</Text>
            <TouchableOpacity>
              <Text style={{color: '#00aff0'}}>Forgotten your password?</Text>
            </TouchableOpacity>
            <View style={{ alignItems: 'flex-end', marginRight: 20 }}>
	            {/*<TouchableOpacity style={[styles.nextbutton, {marginTop: 50}]}
	            onPress={handleSignin}>
	              <Text style={styles.nextbuttontext}>Sign In</Text>
	            </TouchableOpacity>*/}
	            <Button buttonStyle={[styles.nextbutton, {marginTop: 50}]} buttontextStyle={styles.nextbuttontext} buttonText={"Sign In"} onHandle= {()=> handleSignin()}/>
	          </View>
          </>
        }
      </View>
    </View>
    </ScrollView>
  );
}

export default Signin;