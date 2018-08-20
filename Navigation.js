import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Home from './screens/Home';
import Account from './screens/Account';
import LogIn from './screens/LogIn';


const AuthStack = createStackNavigator({ SignIn: LogIn });
const AppStack = createStackNavigator({ Home: Home, Account: Account });





export default createSwitchNavigator(
    {
      App: AppStack,
      Auth: AuthStack,
    },
    {
       initialRouteName: 'Auth',
    }
  );
