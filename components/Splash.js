import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Splash = ( props ) =>{
  return (
    <>
      <StatusBar
        backgroundColor="#fff"
        barStyle="dark-content"
      />
      <View style={styles.container}>
        <Image
        style={styles.logo}
        source={require('../assets/Skype-logo-1.png')}
        />
        <Text style={styles.starttext}>Let's get Started</Text>
        <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('Signin')}
        >
        <Text style={styles.buttontext}>Sign in or create</Text>
        </TouchableOpacity>
        <Text style={styles.helptext}>Use your skype or microsoft account. <Text style={styles.helptext1}>need any help?</Text></Text>
        <View style={styles.microsoft}>
          <Image
            style={styles.microsoftlogo}
            source={require('../assets/microsoft.jpg')}
          />
          <Text style={styles.microsofttext}>Microsoft</Text>
        </View>
        <Text style={styles.helptext}>Skype cannot be use for emergency calling.</Text>
        <Text style={styles.helptext1}>Term of Use <Text style={styles.helptext1}>Privacy and cookies</Text></Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  logo: {
    width:100,
    height:100,
    marginBottom:50
  },
  starttext: {
    fontSize: 40,
    color: '#555756',
    marginBottom:50,
    marginTop: 100
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aff0',
    height: 40,
    borderRadius: 30,
    paddingLeft: 50,
    paddingRight: 50,
    marginBottom: 30
  },
  buttontext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  helptext: {
    fontSize: 13
  },
  helptext1: {
    fontSize: 13,
    textDecorationLine: 'underline',
    marginLeft: 5
  },
  microsoft: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 250,
    bottom:0
  },
  microsoftlogo: {
    width:50,
    height:50,
  },
  microsofttext: {
    fontSize:30,
    fontWeight: 'bold',
    color: '#808080'
  },
});

export default Splash;