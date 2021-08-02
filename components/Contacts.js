import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Platform, FlatList} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Contacts from 'react-native-contacts';
import { PermissionsAndroid } from 'react-native';

const Contactspage = () =>{
  const [details, setDetails] = React.useState("")
  React.useEffect(()=>{
    Contacts.getAll().then(contacts => {
      const a= contacts.sort((a, b) => a.displayName.localeCompare(b.displayName));
      setDetails(a)
    //console.log("contact====",contacts.[1].phoneNumbers)
  })
  },[])

  const renderItem = ({ item, key }) => (
    <View style={styles.container}>
      <Text style={styles.name}>{item.displayName}</Text>
      <Text style={styles.number}>{item && item.phoneNumbers[0] && item.phoneNumbers[0].number && item.phoneNumbers[0].number}</Text>
      <View style = {styles.lineStyle} />
    </View>
  );

  return (
    <View>
      <FlatList
        data={details}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
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
  lineStyle:{
    borderWidth: 0.3,
    borderColor:'#000',
    margin:5,
    width: '100%'
   },
  name: {
    fontWeight: 'bold',
    fontSize: 15
  },
  number: {
    color: '#808080'
  }
});

export default Contactspage; 
