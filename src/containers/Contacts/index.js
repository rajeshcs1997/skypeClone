import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Platform, FlatList} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Contacts from 'react-native-contacts';
import { PermissionsAndroid } from 'react-native';
import { styles } from "./styles";

const Contactspage = () =>{
  const [details, setDetails] = React.useState("")

  React.useEffect(async ()=>{
	  let status = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS)
	  if (status === 'denied' || status === 'never_ask_again') {
	    throw Error('Permissions not granted to access Contacts')
	  }

	  PermissionsAndroid.request(
	  PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
	    {
	      'title': 'Contacts',
	      'message': 'This app would like to view your contacts.',
	      'buttonPositive': 'Please accept bare mortal'
	    }
	  )
	  .then(Contacts.getAll().then(contacts => {
	    setDetails(contacts)
	  }))

  },[])

  const renderItem = ({ item, key }) => {
    const a=  item && item.phoneNumbers[0] && item.phoneNumbers[0].number && item.phoneNumbers[0].number
    let b=  a && a.slice(0,a.length-4)
    let c= "XXXX"
    let d = b && b.concat(" ",c);
    return(
      <View style={styles.container}>
        <Text style={styles.name}>{item.displayName}</Text>
        <Text style={styles.number}>{d}</Text>
        <View style = {styles.lineStyle} />
      </View>
    )
  }

  return (
    <View>
      {details ?<FlatList
        data={details}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        key={item => item.key}
      /> : null}
    </View>
  );
}

export default Contactspage; 
