/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import LoginForm from './components/login';
import HomeScreen from './components/home';
import PhotoDetails from './components/details';
import PhotoDetailsDog from './components/details_dog';
import MapComponent from './components/map';
import StartPage from './components/startpage';
import PhotosComponent from './components/photos';
import { Container, Header, Content, Footer, FooterTab, Icon, Text } from 'native-base';
import {
  Platform,
  StyleSheet,
  View,
  Button
} from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
     <RootStack />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const PhotosStack = createStackNavigator({
  Photos:PhotosComponent,
  Details:PhotoDetails,
  DetailsDog:PhotoDetailsDog
  },{
    headerMode: 'none',
    navigationOptions: {
    headerVisible: false,
    }
  })
const RootStack = createBottomTabNavigator(
  {
    General: StartPage,
    Home: HomeScreen,
    Photos: PhotosStack,
    Maps: MapComponent,
    Contact: LoginForm
  },
  {
    navigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'Photos') {
          iconName = `photos`;
        } else if (routeName === 'Home') {
          iconName = `home`;
        } else if (routeName === 'Maps') {
          iconName = `map`
        } else if (routeName === 'Contact') {
          iconName = 'contact'
        } else if (routeName === 'General') {
          iconName = 'grid'
        }

        return <Icon name={iconName} />
      }
    })
  },
  {
    initialRouteName:'General'
  }
);
