import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({  
  container: {
    flex: 1,
    marginTop: 150,
    marginBottom: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#fff"  
  },
  logo: {
    width:140,
    height:120,
    backgroundColor:"#fff"
  },
  starttext: {
    fontSize: 30,
    //color: '#555756',
    color: '#000'
  },
  profilecontainer: {
    paddingTop: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  profilelogo: {
    height: 60,
    width: 60,
    borderRadius: 60,
    paddingTop: 20
  },
  profiletext: {
    fontSize: 20,
    marginLeft: 20,
    paddingTop: 10
  },
  line: {
    borderBottomColor: '#808080',
    borderBottomWidth: 0.5,
    width: '100%',
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20,
  }
});