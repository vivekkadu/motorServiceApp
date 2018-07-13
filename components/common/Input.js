import React from 'react';
import { View, TextInput, Text } from 'react-native';


const Input = ({ label, text, onChangeText, placeholder, secureTextEntry }) => {
const { labelStyle, InputStyle, containerStyle} = styles;
return (

<View style={containerStyle}>
          <Text style={labelStyle}>{label}</Text>
          <TextInput
          secureTextEntry={secureTextEntry}
          style={InputStyle}
          placeholder={placeholder}
          autoCorrect={false}
          value={text}
          onChangeText={onChangeText}/>

</View>


);
  };
// here flex is use to define size in view of input and label 2/3 for input and 1/3 for label

const styles = {

InputStyle: {
   fontSize: 18,
   paddingRight: 5,
   paddingLeft: 5,
   color: '#000',
   lineHeight: 23, //sapcing between lines
   flex: 2
 },

   labelStyle:{


   flex:1,
   fontSize:18,
   paddingLeft:20,
   color: 'black'
},
containerStyle:{
  //flex:1 to use total space available to ContainerStyle
  flex:1,
  height:40,
  flexDirection:'row',
  alignItems:'center'

}


};

export {Input};
