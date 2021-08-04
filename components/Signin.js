import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signin = ( props ) =>{
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showemail, setShowemail] = React.useState(true);
  const [showpassword, setShowpassword] = React.useState(false);
  const [error, setError] = React.useState("");
  const [loginerror, setLoginerror] = React.useState("");
  const [Users, setUsers] = React.useState([]);

  React.useEffect(async () => {
    const items = await AsyncStorage.getItem('Users');
    const items1 = items == null ? [] : JSON.parse(items);
    setUsers(items1)
  },[]);

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
  //
  const handleSignin = () =>{
    let data=Users;
    data.map(value => {
      if (value.Email===email && value.Password===password) {
        setLoginerror("")
        props.navigation.navigate('Dashboard')
      }
      if (value.Email!==email || value.Password!==password) {
        setLoginerror("user not exist")
      }
    });
    
  }
  console.log("users", Users)
  return (
    <View style={styles.container}>
      <View style={styles.logocontainer}>
        <Image
          style={styles.logo}
          source={require('../assets/Skype-logo-1.png')}
        />
      </View>
      <View style={styles.emailform}>
        <View style={styles.microsoft}>
          <Image
            style={styles.microsoftlogo}
            source={require('../assets/microsoft.png')}
          />
          <Text style={styles.microsofttext}>Microsoft</Text>
        </View>

        {showemail &&
          <>
            <Text style={styles.signtext}>Sign in</Text>
            <Text>to continue to skype</Text>
            <TextInput
              style={styles.inputfield}
              placeholderStyle={styles.placeholdertext}
              placeholderTextColor="#808080"
              onChangeText={(email)=>handleEmail(email)}
              placeholder="Skype, phone or email"
            />
            { error ? <Text style={{color: 'red', paddingBottom: 20}}>{error}</Text> : null}
            <View style={styles.microsoft}>
            <Text>No account?</Text>
              <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
                <Text style={{marginLeft: 5, color: '#00aff0'}}>Create one!</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.microsoft, {marginTop: 50, marginLeft: 120}]}>
              <TouchableOpacity style={styles.backbutton} onPress={() => props.navigation.navigate('Splash')}>
                <Text style={styles.backbuttontext}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.nextbutton} onPress={handleNext}>
                <Text style={styles.nextbuttontext}>Next</Text>
              </TouchableOpacity>
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
            <TextInput
              style={styles.inputfield}
              placeholderStyle={styles.placeholdertext}
              placeholderTextColor="#808080"
              onChangeText={(password)=>setPassword(password)}
              placeholder="Password"
              secureTextEntry={true}
            />
            <Text style={{color: "red"}}>{loginerror}</Text>
            <TouchableOpacity>
              <Text style={{color: '#00aff0'}}>Forgotten your password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.nextbutton, {marginLeft: 250, marginTop: 50}]}
            onPress={handleSignin}>
              <Text style={styles.nextbuttontext}>Sign In</Text>
            </TouchableOpacity>
          </>
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    height: 50,
    width: 50,
  },
  logocontainer: {
    marginTop: 50,
    alignItems: 'center', 
  },
  emailform: {
    marginLeft: 20,
    marginTop:30
  },
  microsoft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  microsoftlogo: {
    width:25,
    height:25,
  },
  microsofttext: {
    marginLeft:10,
    fontSize:20,
    fontWeight: 'bold',
    color: '#808080'
  },
  signtext: {
    marginTop: 15,
    marginBottom:5,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000'
  },
  inputfield: {
    borderBottomColor: '#00aff0',
    borderBottomWidth: 2,
    marginRight:20,
    fontSize:20,
    marginBottom: 20
  },
  placeholdertext: {
    fontSize:30
  },
  backbutton: {
    backgroundColor: "#dcdcdc",
    width: 120,
    height:40,
    justifyContent:'center',
    alignItems:'center'
  },
  backbuttontext: {
    fontSize: 20
  },
  nextbutton: {
    marginLeft: 10,
    backgroundColor: "#00aff0",
    width: 120,
    height:40,
    justifyContent:'center',
    alignItems:'center' 
  },
  nextbuttontext: {
    fontSize: 20,
    color: '#fff'
  },
});

export default Signin;