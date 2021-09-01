import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
