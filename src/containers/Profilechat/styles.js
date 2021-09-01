import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#808080',
    borderBottomWidth: 0.5,
    elevation: 2
  },
  container: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: '#fff', 
  },
  profiletext: {
    marginLeft: 30,
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold'
  },
  profilelogo: {
    height: 100,
    width: 100,
    borderRadius: 100,
    paddingTop: 20
  },
  screenprofiletext: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10
  },
  hibutton: {
    backgroundColor: '#00aff0',
    width: 120,
    height: 40,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  hiiview: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#b3e0f5',
    width: '95%',
    borderRadius: 10,
    padding: 15
  },
  input: {
    height: 40,
    backgroundColor: '#f0f0f0',
    borderRadius: 30,
    // borderTopLeftRadius: 30,
    // borderBottomLeftRadius: 30,
    width: 235,
    padding: 10,
    paddingLeft: 20,
    fontSize: 15,
    marginRight: 0
  },
  input1: {
    height: 40,
    backgroundColor: '#f0f0f0',
    borderRadius: 30,
    // borderTopLeftRadius: 30,
    // borderBottomLeftRadius: 30,
    width: 270,
    padding: 10,
    paddingLeft: 20,
    fontSize: 15,
    marginRight: 15
  },
  inputbutton: {
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:0
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingBottom: 10
  },
  messagetext: {
    marginLeft: 300,
    textAlign: 'center',
    height: 50,
    paddingTop:10,
    fontSize: 18,
    color: '#000',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    marginRight: 20,
    marginBottom: 10,
    backgroundColor: '#fff',
    backgroundColor: '#b3e0f5',
  },
  datetext: {
    marginLeft: 310,
    textAlign: 'center',
    color: '#000',
    marginBottom: 5,
  }
});