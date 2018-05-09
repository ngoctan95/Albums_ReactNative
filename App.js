/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {styles} from './style/styleSheet';
import Header from './components/header';
import AlbumList from './components/AlbumList';
import log from './log/log'
export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Header title={"Albums"} style={styles.container}/> 
        <AlbumList />
      </View>
    );
  }
}


