import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({  
  header: {
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#808080',
    borderBottomWidth: 0.5,
    elevation: 2
  },
  profile: {
    backgroundColor: '#F0F0F0',
    height: 50,
    width: 50,
    borderRadius: 50,
    marginLeft: 55,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dot: {
    backgroundColor: 'green',
    width: 10,
    height: 10,
    borderRadius: 10,
    marginBottom: -5,
    marginLeft: 30
  }
}); 