import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#fff"  
  },
  lineStyle:{
    borderWidth: 0.3,
    borderColor:'#000',
    margin:5,
    width: '100%'
   },
  name: {
    fontWeight: 'bold',
    fontSize: 15
  },
  number: {
    color: '#808080'
  }
});
