import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, StatusBar, TouchableNativeFeedback } from 'react-native'
import { padStart } from 'lodash'
import Button from 'apsl-react-native-button'

const fruits = [
  { name: 'Platano', photo: require('./img/banana.png'), isFruit: true },
  { name: 'Uvas', photo: require('./img/grape.png'), isFruit: true },
  { name: 'Naranja', photo: require('./img/orange.png'), isFruit: true },
  { name: 'Durazno', photo: require('./img/peach.png'), isFruit: true },
  { name: 'Pera', photo: require('./img/pear.png'), isFruit: true },
  { name: 'Piña', photo: require('./img/pineapple.png'), isFruit: true },
  { name: 'Fresa', photo: require('./img/strawberry.png'), isFruit: true },
  { name: 'Sandia', photo: require('./img/watermelon.png'), isFruit: true }
]

export default class FruitsScreen extends Component {
  constructor() {
    super()

    this.state = {
      isFruit: this.getRandomBoolean(),
      fruitIndex: this.getRandomFruit(),
      points: padStart(0, 5, '0')
    }
  }

  getRandomBoolean() {
    return Math.floor(Math.random() * 2) > 0
  }

  getRandomFruit() {
    return Math.floor(Math.random() * fruits.length)
  }

  validate(option) {
    const isValid = option === this.state.isFruit
    const points = parseInt(this.state.points)
    const newPoints = padStart(isValid ? (points + 100) : points, 5, '0')

    this.setState({
      isFruit: this.getRandomBoolean(),
      fruitIndex: this.getRandomFruit(),
      points: newPoints
    })
  }

  render() {
    const { fruitIndex, isFruit, points } = this.state

    return (
      <View style={styles.background}>
        <StatusBar backgroundColor={'#fefdcc'} hidden/>

        <View style={styles.content}>
          <Text style={styles.points}>Puntos {points}</Text>

          <Image
            style={styles.fruit}
            source={fruits[fruitIndex].photo}/>

            <Text style={styles.subTitle}>
              {isFruit ? `¿Es una fruta?` : '¿Es una verdura?'}
            </Text>
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button style={{backgroundColor: '#23aeff', marginRight: 10, marginLeft: 10, borderColor: '#007dc6' }} textStyle={{ fontSize: 20, color: 'white', fontWeight: 'bold' }} onPress={this.validate.bind(this, true)}>
              Si
            </Button>
          </View>

          <View style={styles.button}>
            <Button style={{ marginLeft: 10, backgroundColor:'#23aeff', marginRight: 10, borderColor: '#007dc6' }} textStyle={{ fontSize: 20, color: 'white', fontWeight: 'bold' }} onPress={this.validate.bind(this, false)}>
              No
            </Button>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  buttonContainer: {
    left: 0,
    right: 0,
    position: 'absolute',
    bottom: 50,
    flex: 1,
    height: 60,
    flexDirection: 'row'
  },
  button: {
    flex: .5,
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    flex: 1,
    textAlign: 'center'
  },
  fruit: {
    width: 200,
    height: 200
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  subTitle: {
    color: '#000',
    fontSize: 24,
    marginTop: 30
  },
  points: {
    color: '#000',
    fontWeight: 'bold',
    position: 'absolute',
    right: 0,
    top: 0,
    fontSize: 16
  }
})