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
    justifyContent: 'flex-start',
    backgroundColor: '#fff', 
  },
  logtext: {
    marginRight: 50,
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000'
  },
  profilecontainer: {
    paddingTop: 10,
    paddingLeft: 30,
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
  },
  numtext: {
    marginLeft: 20,
    fontSize:12,
  },
  dot: {
    backgroundColor: 'green',
    width: 10,
    height: 10,
    borderRadius: 10,
    marginTop: 7
  },
  rowview: {
    marginTop: 20,
    marginLeft: 30,
    flexDirection: 'row'
  },
  line: {
    borderBottomColor: '#808080',
    borderBottomWidth: 0.5,
    //width: 370,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  managesection: {
    backgroundColor: '#b3e0f5',
    height: 40,
    marginTop: 20,
    paddingLeft: 20,
    paddingTop: 10
  }
}); 