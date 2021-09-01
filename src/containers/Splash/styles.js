import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  logo: {
  	marginTop: 80,
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
    bottom:0,
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
