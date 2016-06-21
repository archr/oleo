import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Navigator, BackAndroid } from 'react-native'
import HomeScreen from './src/HomeScreen'
import FruitsScreen from './src/FruitsScreen'

class Oleo extends Component {

  constructor() {
    super()

    this.handleBackAndroid = this.handleBackAndroid.bind(this)
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.handleBackAndroid)
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBackAndroid)
  }

  handleBackAndroid() {
    const routes = this.navigator.getCurrentRoutes()
    if (routes.length >= 2) {
      this.navigator.pop()
      return true
    }

    return false
  }

  render() {
    return (
      <Navigator
        ref={(navigator) => this.navigator = navigator}
        initialRoute={{name: 'My First Scene', index: 0}}
        renderScene={(route, navigator) => {
          if (route.fruits) {
            return <FruitsScreen navigator={navigator}/>
          }

          return <HomeScreen navigator={navigator}/>
        }}
      />
    );
  }
}

AppRegistry.registerComponent('Oleo', () => Oleo);
