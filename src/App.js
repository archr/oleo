import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Icon.ToolbarAndroid
          title='Retos'
          elevation={3}
          titleColor='white'
          style={{ backgroundColor: '#2eb2ff', height: 56 }}
        />

        <View style={{ flex: 1 }}>
          <View style={styles.game}>
            <Text>Hello</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  game: {
    backgroundColor: 'red',
    height: 60
  }
})
