import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, TouchableNativeFeedback } from 'react-native'

export default class GameCard extends Component {
  render() {
    return (
      <TouchableNativeFeedback onPress={this.props.onPress}>
        <View style={styles.game}>
          <Image source={this.props.source} style={styles.gameImage}/>
          <View style={styles.gameContent}>
            <Text style={styles.gameTitle}>{this.props.title}</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    )
  }
}

const styles = StyleSheet.create({
  game: {
    marginTop: 6,
    marginLeft: 6,
    marginRight: 6,
    backgroundColor: '#ffffff',
    borderRadius: 2,
    borderColor: '#EEE',
    borderWidth: 1,
    shadowColor: 'rgba(0, 0, 0, 0.12)',
    shadowOpacity: 0.7,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 2,
    },
  },
  gameImage: {
    height: 80,
    width: undefined,
    resizeMode: 'cover',
  },
  gameContent: {
    padding: 15
  },
  gameTitle: {
    fontSize: 16,
    color: '#3f51b5'
  }
})
