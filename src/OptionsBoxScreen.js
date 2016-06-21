import React, { Component } from 'react'
import { View, Image, StatusBar, Text, TouchableOpacity, Alert } from 'react-native'
import Button from 'apsl-react-native-button'

export default class OptionsBoxScreen extends Component {


  constructor() {
    super()

    this.state = {
      isCorrect: false
    }
  }

  validate(option) {
    if (option === 2) {
      Alert.alert('WOW', 'Bien Hecho', [
        { text: 'Inicio', onPress: () => this.props.navigator.resetTo({ home: true }) }
      ])
      return
    }

    Alert.alert('Respuesta incorrecta', 'Sigue participando', [
      { text: 'Ver Imagen', onPress: () => this.props.navigator.pop() },
      { text: 'Intentar', onPress: () => console.log('KK') }
    ])
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'column', alignItems: 'center'  }}>
        <StatusBar hidden/>
        <Text style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center', marginTop: 40 }}>Selecciona la imagen que es igual a la interior:</Text>

        <TouchableOpacity onPress={this.validate.bind(this, 1)}>
          <Image source={require('./img/box2.png')} style={{ width: 100, height: 100, marginTop: 30 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.validate.bind(this, 2)}>
          <Image source={require('./img/box1.png')} style={{ width: 100, height: 100, marginTop: 30 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.validate.bind(this, 3)}>
          <Image source={require('./img/box3.png')} style={{ width: 100, height: 100, marginTop: 30 }} />
        </TouchableOpacity>

      </View>
    );
  }
}
