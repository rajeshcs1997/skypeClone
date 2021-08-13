import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, TextInput, FlatList, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Calls = (props) =>{
  
  return (
    <View style={styles.container}>
      <MaterialIcons name="call" color='#00aff0' size={150} />
      <Text style={styles.calltext}>No recent calls</Text>
      <Text style={{color: '#808080'}}>Call anyone on Skype for free or open the dial pad to </Text>
      <Text style={{color: '#808080'}}>call mobiles and landlines</Text>
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
  calltext: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 25,
    fontWeight: 'bold'
  }
}); 

export default Calls;