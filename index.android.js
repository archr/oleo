import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Navigator } from 'react-native';
import App from './src/App'

class Oleo extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{name: 'My First Scene', index: 0}}
        renderScene={(route, navigator) =>
          <App/>
        }
      />
    );
  }
}

AppRegistry.registerComponent('Oleo', () => Oleo);
