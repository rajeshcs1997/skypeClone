import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 20,
    flexDirection: 'row',
    borderBottomColor: '#808080',
    borderBottomWidth: 0.5,
    elevation: 2
  },
  container: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff', 
  },
  Settingstext: {
    marginLeft: 50,
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold'
  },
  rowview: {
    marginTop: 20,
    marginLeft: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  line: {
    borderBottomColor: '#808080',
    borderBottomWidth: 0.5,
    //width: 370,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
}); 
