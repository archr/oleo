import React, { Component } from 'react'
import { Dimensions, Animated, StyleSheet } from 'react-native'
import Heart from './Heart'

const {
  width: deviceWidth,
  height: deviceHeight
} = Dimensions.get('window');

var ANIMATION_END_Y = Math.ceil(deviceHeight * .5);
var NEGATIVE_END_Y = ANIMATION_END_Y * -1;

export default class AnimatedHeart extends Component {
  constructor() {
    super()

    this.state = {
      position: new Animated.Value(0)
    }
  }

  componentWillMount() {
    this._yAnimation = this.state.position.interpolate({
      inputRange: [NEGATIVE_END_Y, 0],
      outputRange: [ANIMATION_END_Y, 0]
    });

    this._opacityAnimation = this._yAnimation.interpolate({
      inputRange: [0, ANIMATION_END_Y],
      outputRange: [1, 0]
    });

    this._scaleAnimation = this._yAnimation.interpolate({
      inputRange: [0, 15, 30],
      outputRange: [0, 1.2, 1],
      extrapolate: 'clamp'
    });

    this._xAnimation = this._yAnimation.interpolate({
      inputRange: [0, ANIMATION_END_Y/2, ANIMATION_END_Y],
      outputRange: [0, 15, 0]
    })

    this._rotateAnimation = this._yAnimation.interpolate({
      inputRange: [0, ANIMATION_END_Y/4, ANIMATION_END_Y/3, ANIMATION_END_Y/2, ANIMATION_END_Y],
      outputRange: ['0deg', '-2deg', '0deg', '2deg', '0deg']
    });
  }

  componentDidMount() {
    Animated.timing(this.state.position, {
      duration: 1000,
      toValue: NEGATIVE_END_Y
    }).start(this.props.onComplete);
  }

  getHeartAnimationStyle() {
    return {
      transform: [
        {translateY: this.state.position},
        {translateX: this._xAnimation},
        {scale: this._scaleAnimation},
        {rotate: this._rotateAnimation}
      ],
      opacity: this._opacityAnimation
    }
  }

  render() {
    return (
      <Animated.View style={[styles.heartWrap, this.getHeartAnimationStyle(), this.props.style]}>
        <Heart isGood={this.props.isGood} />
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  heartWrap: {
    position: 'absolute',
    bottom: 100,
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