import React, { Component } from 'react'
import { Image, StyleSheet } from 'react-native'

export default class Heart extends Component {
  render() {
    const source = this.props.isGood ? require('./img/sonrisa.png') : require('./img/triste.png')

    return (
      <Image
        style={[styles.heart, this.props.style]}
        source={source}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  heartWrap: {
      position: 'absolute',
      bottom: 30,
      backgroundColor: 'transparent'
  },
  heart: {
    width: 50,
    height: 50,
    backgroundColor: 'transparent'
  },
  heartShape: {
    width: 30,
    height: 45,
    position: 'absolute',
    top: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#6427d1',
  },
  leftHeart: {
    transform: [
        {rotate: '-45deg'}
    ],
    left: 5
  },
  rightHeart: {
    transform: [
        {rotate: '45deg'}
    ],
    right: 5
  }
});