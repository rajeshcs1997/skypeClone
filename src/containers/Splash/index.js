import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from "./styles";
import Button from '../../components/Button/Button'

const Splash = ( props ) =>{
  return (
    <>
      <StatusBar
        backgroundColor="#fff"
        barStyle="dark-content"
      />
      <ScrollView>
      <View style={styles.container}>
        <Image
        style={styles.logo}
        source={require('../../assets/Skype-logo-1.png')}
        />
        <Text style={styles.starttext}>Let's get Started</Text>
        {/*<TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('Signin')}
          >
          <Text style={styles.buttontext}>Sign in or create</Text>
          </TouchableOpacity>*/}
        <Button buttonStyle={styles.button} buttontextStyle={styles.buttontext} buttonText={"Sign in or create"} onHandle= {()=> props.navigation.navigate('Signin')}/>
        <Text style={styles.helptext}>Use your skype or microsoft account. <Text style={styles.helptext1}>need any help?</Text></Text>
        <View style={styles.microsoft}>
          <Image
            style={styles.microsoftlogo}
            source={require('../../assets/microsoft.jpg')}
          />
          <Text style={styles.microsofttext}>Microsoft</Text>
        </View>
        <Text style={styles.helptext}>Skype cannot be use for emergency calling.</Text>
        <Text style={styles.helptext1}>Term of Use <Text style={styles.helptext1}>Privacy and cookies</Text></Text>
      </View>
      </ScrollView>
    </>
  );
}

export default Splash;