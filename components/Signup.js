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

const Signup = ( props ) =>{
	const [email, setEmail] = React.useState("")
	const [password, setPassword] = React.useState("")
	const [secure, setSecure] = React.useState(true)
	const [error, setError] = React.useState("")
	const [shownumfield, setShownumfield] = React.useState(true)
	const [hidepassword, setHidepassword] = React.useState(true)
	const [option, setOption] = React.useState("Use your email address instead")

	const handlePress = () =>{
	setShownumfield(!shownumfield)
	{shownumfield?setOption("Use a phone number instead"):setOption("Use your email address instead")}	
	setEmail("")
	}
	const handleEmail = (email) =>{
		setEmail(email)
		setError("")
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
	console.log("hjdrajesh=====",email )
  return (
    <View style={styles.container}>
    	<View style={styles.logocontainer}>
	      <Image
	        style={styles.logo}
	        source={require('../assets/Skype-logo-1.png')}
	      />
      </View>
      <View style={styles.form}>
	      <View style={styles.microsoft}>
	        <Image
	          style={styles.microsoftlogo}
	          source={require('../assets/microsoft.png')}
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
	      <View style={[styles.microsoft, {marginTop: 50, marginLeft: 120}]}>
		      <TouchableOpacity style={styles.backbutton} onPress={() => props.navigation.navigate('Signin')}>
		      	<Text style={styles.backbuttontext}>Back</Text>
		      </TouchableOpacity>
		      <TouchableOpacity style={styles.nextbutton} onPress={handleNext}>
		      	<Text style={styles.nextbuttontext}>Next</Text>
		      </TouchableOpacity>
		    </View></>}
	      {	!hidepassword && 
	      	<>
				  	<View style={[styles.microsoft, {marginTop: 30}]}>
					  	<TouchableOpacity onPress={handleArrow}>
					      <Icon name="arrowleft" size={20} color="black" />
					    </TouchableOpacity>
					    <Text style={{marginLeft: 5, fontSize: 20}}>{email}</Text>
					  </View>
				  	<Text style={styles.signtext}>Create Password</Text>
				  	<Text style={{marginLeft: 5, fontSize: 15}}>Enter the password you would like to use with your account</Text>
		        <TextInput
			        style={styles.inputfield}
			        placeholderStyle={styles.placeholdertext}
			        placeholderTextColor="#808080"
			        onChangeText={(password)=>setPassword(password)}
			        placeholder="Password"
			        secureTextEntry={secure}
			      />
			      <TouchableOpacity onPress={()=>setSecure(!secure)}>
			      	<Text style={{color: '#808080'}}>Show password</Text>
			      </TouchableOpacity>
			      <TouchableOpacity style={[styles.nextbutton, {marginLeft: 250, marginTop: 50}]}>
			      	<Text style={styles.nextbuttontext}>Sign Up</Text>
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
  form: {
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

export default Signup;