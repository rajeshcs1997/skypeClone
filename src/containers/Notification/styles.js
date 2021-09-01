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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff', 
  },
  notificationtext: {
    marginLeft: 50,
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold'
  }
});