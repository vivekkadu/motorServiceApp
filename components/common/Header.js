
import React from 'react';
import { Text, View } from 'react-native';


//create a header function based component

const Header = (props) => {

const { textStyle, viewStyle } = styles;

	return (

		<View style={viewStyle}>
<Text style={textStyle}>{props.headerText}</Text>
    </View>
		);
};


const styles = {

  viewStyle: {
   backgroundColor: '#f8f8f8',
   shadowColor: '#000',
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 0.2,
   elevation: 2,
   position: 'relative'
  },


	textStyle: {
     color: 'black',
     marginTop: 7,
     marginBottom: 7,
     justifyContent: 'center',
		fontSize: 30,
    alignSelf: 'center'

	}
};

export { Header };
