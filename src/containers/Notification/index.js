import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from "./styles";

const Notification = (props) =>{
  return (
    <>
    <View style={styles.header}>
      <View>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <MaterialCommunityIcons name="arrow-left" color= '#808080' size={30} style={{marginLeft: 10, marginTop: 10,}}/>
      </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.notificationtext}>Notifications</Text>  
      </View>
    </View>
    <View style={styles.container}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>No new notifications</Text>
      <Text style={{color: '#808080', textAlign: 'center', marginLeft: 60, marginRight: 60, marginTop: 10}}>Check back to see @ mentions, reactions, quotes and much more.</Text>  
    </View>
    </>
  );
}

export default Notification;