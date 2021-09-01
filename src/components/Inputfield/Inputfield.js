import React from 'react';
import {
  TextInput
} from 'react-native';

const Inputfield = ( props ) =>{
  return (
    <TextInput
      style={props.inputfieldStyle}
      placeholderStyle={props.placeholdertextStyle}
      placeholderTextColor="#808080"
      onChangeText={(text)=>props.onInputChange(text)}
      placeholder= {props.placeholderText}
      secureTextEntry={props.secure}
    />
  );
}

export default Inputfield;