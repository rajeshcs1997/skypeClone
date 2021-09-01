import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Platform, FlatList, TextInput} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Contacts from 'react-native-contacts';
import { PermissionsAndroid } from 'react-native';
import { styles } from "./styles";

const Search = (props) =>{
  const [details, setDetails] = React.useState("")
  const [filterdetail, setFilterdetail] = React.useState("")
  const [text, onChangeText] = React.useState("");
  React.useEffect(()=>{
    getData()  
  },[])

  React.useEffect( () => {
    if(text && details){
      let filterdata = details && details.filter(item => {
        return item && item.displayName && item.displayName.toLowerCase().indexOf(text.toLowerCase()) !== -1;
      });
      setFilterdetail(filterdata)
      //debugger
    }else{
      getData()
      setFilterdetail("")
    }
  }, [text]);

  const renderItem = ({ item, key }) => {
    const a=  item && item.phoneNumbers[0] && item.phoneNumbers[0].number && item.phoneNumbers[0].number
    let b=  a && a.slice(0,a.length-4)
    let c= "XXXX"
    let d = b && b.concat(" ",c);
    let contactname = item.displayName.toLowerCase()
    let name1= text && contactname.split(text.toLowerCase())
    //debugger
    return(
      <View style={styles.container}>
        {/*<Text style={styles.name}>{item.displayName}</Text>*/}
        {text ? <Text style={styles.name}><Text>{name1[0]}</Text><Text style={{color: '#00aff0'}}>{text.toLowerCase()}</Text><Text>{name1[1]}</Text></Text> : <Text style={styles.name}>{item.displayName}</Text>}
        <Text style={styles.number}>{d}</Text>
        <View style = {styles.lineStyle} />
      </View>
    )
  }

  const getData = async()=>{
    // Contacts.getAll().then(contacts => {
   //    setDetails(contacts)
    // })  
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
  }

  let data1 = ""
  if(filterdetail){
    data1 = filterdetail
  }
  else{
    data1 = details
   }
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" color= '#fff' size={35} style={{marginLeft: 20, paddingTop: 20}}/>
        </TouchableOpacity>
        <View style={{flexDirection: 'row',}}>
          <TextInput
            style={styles.input}
            onChangeText={(text)=>{onChangeText(text)}}
            value={text}
            placeholder="Search"
          />
          {text ? <TouchableOpacity onPress={() => onChangeText("")}>
            <MaterialCommunityIcons name="close-circle-outline" color= '#fff' size={35} style={{marginLeft: 20, paddingTop: 20, marginRight: 20,}}/>
          </TouchableOpacity> : null}
        </View>
      </View>
      <Text style={styles.people}>PEOPLE</Text>
      { data1 ? <FlatList
              data={data1}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              key={item => item.key}
            /> : null}
    </View>
  );
}

export default Search; 
