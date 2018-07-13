import React, { Component } from 'react';
import {  View, Text, } from 'react-native';

export default class Account extends Component {
    
  render() {
    const { navigation } = this.props;
    const arr = navigation.getParam('arr', []);

    return (
      <View>
        {
         arr.map((item) => {
            return (
            <View>
              <Text>{item.name}</Text>
            </View>
            );
            })
        }
      </View>
    );
  }
}
