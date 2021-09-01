import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

const Button = ( props ) =>{
  return (
    <TouchableOpacity
	    style={props.buttonStyle}
	    onPress={() => props.onHandle()}
	    >
	    <Text style={props.buttontextStyle}>{props.buttonText}</Text>
    </TouchableOpacity>
  );
}

export default Button;