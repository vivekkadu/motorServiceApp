import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  StatusBar,
  Dimensions
} from  'react-native';
import axios from 'axios';
import { Card, CardItem, Header } from 'native-base';
import { Spinner } from '../components/common';




const {height, width} = Dimensions.get('window');


class LogIn extends Component {

    static navigationOptions =  {
       header: null
      };

  state = {email: '', password: '', token: '', renderButton: true, error: '', modalVisible:  false};

  renderButton() {
    if(this.state.renderButton) {
      return <TouchableOpacity
              style={styles.buttonStyle}
              onPress={this.onPress}
         >
         <Text style={styles.buttonLabel}> Log In</Text>
      </TouchableOpacity>
    }else {
      return <View style={styles.SpinnerStyle}>
               <Spinner />
           </View>
    }
  }

   onPress = () => {
     this.setState({ renderButton: false});


    //  axios({
    // method: 'post',
    // url: 'https://shrouded-cliffs-62043.herokuapp.com/rest-auth/login/',
    // data: JSON.stringify({
    //   username: this.state.phone,
    //   password: this.state.password
    // }),
    // config: {
    //   headers:
    //    {
    //      Accept: 'application/json',
    //     'Content-Type': 'application/json'
    //     }}
    // })
    // .then((response) =>{
    //      this.props.navigation.navigate('Home');
    //      console.log(response);
    // })
    // .catch((response) => {
    //      this.setState({modalVisible: true , renderButton: true})
    //     console.log(response);
    // });

    fetch('http://gentle-castle-35975.herokuapp.com/users/login', {
       method: 'POST',
       headers: {
         Accept: 'application/json',
        'Content-Type': 'application/json',
        },
     body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
   }).then((response) => {
        // const token = response.headers.map.xauth[0];
        this.props.navigation.navigate('Home');
        console.log(response);
      })
      .catch((error) => {
        this.setState({modalVisible: true , renderButton: true})
        console.log(error);
      });
    }

  render() {
    return (
         <Card transparent >

         <StatusBar
           backgroundColor="#0B2D64"
            barStyle="light-content"
          />

          <View style={styles.titleStyle}>
             <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black', fontStyle: 'italic' }}>MotoService</Text>
          </View>

         <View style={styles.ContainerStyle}>
               <TextInput
                 placeholder= "email No"
                 underlineColorAndroid="transparent"
                 // keyboardType="phone-pad"
                 style={styles.textInputStyle}
                 onChangeText={(email) => this.setState({email})}
                 value={this.state.email}
              />




              <TextInput
                      placeholder= "Password"
                      underlineColorAndroid="transparent"
                        style={styles.textInputStyle}
                        secureTextEntry
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                        />

                  {this.renderButton()}


                </View>

                <Modal
                //animationType="slide"
                transparent={true}
                onRequestClose={() => { this.setState({ modalVisible: false }); }}
                visible={this.state.modalVisible}
                >
                 <View style={styles.modalStyle}>


                   <Text style={styles.errorMessage}>
                        Invalide Email or Password{"\n"}
                      Try Again with correct details
                   </Text>

                   <TouchableOpacity
                   onPress= {() => this.setState({ modalVisible: false })}
                    style={styles.buttonStyle}
                   >
                      <Text style={styles.buttonLabel}> OK</Text>
                   </TouchableOpacity>

                  </View>
                </Modal>

             </Card>
    );
  }
}

const styles = {
  titleStyle: {
   alignSelf: 'center',
    marginTop: width/5,

  },
  ContainerStyle: {
    flex: 1,
    marginTop:  width/5
    //justifyContent: 'center',

  },
  labelStyle: {
    fontSize:18,
    color: 'black',
  },
  textInputStyle: {
    height: 50,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: width/17,
    marginLeft: width/15,
    marginRight: width/15,
    borderRadius:  width/22,
    paddingLeft: width/20
  },
  buttonStyle: {
    alignSelf:'stretch',
    backgroundColor:'#0B2D64',
    borderRadius:width/22,
    borderWidth:1,
    borderColor:'white',
    marginLeft:width/15,
    marginRight:width/15
  },
  buttonLabel: {
    alignSelf:'center',
    color:'white',
    fontSize:16,
    fontWeight:'600',
    paddingTop:15,
    paddingBottom:15
  },
  SpinnerStyle: {
    alignSelf:'stretch',
    // backgroundColor:'white',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius:width/22,
    borderWidth:1,
    borderColor:'#0B2D64',
    marginLeft:width/15,
    marginRight:width/15
  },
  modalStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
   position: 'relative',
   flex: 1,
   justifyContent: 'center',
   // paddingLeft: width/15,
   // paddingRight: width/15,

 }, errorMessage: {
   fontSize: 18,
   backgroundColor: 'white',
   padding: 20,
   paddingLeft: 40,
   paddingRight: 40,
   color: 'black',
   borderColor: 'grey',
   borderWidth: 1,
   borderRadius: 7,
   justifyContent: 'center',
   alignSelf: 'center',
   marginBottom: 5
 }
};

export default LogIn;
