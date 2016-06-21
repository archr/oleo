import React, { Component } from 'react'
import { View, Image, StatusBar, Text } from 'react-native'
import Button from 'apsl-react-native-button'

export default class BoxScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <StatusBar hidden/>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Recuerda la imagen</Text>
        <Image source={require('./img/box1.png')} style={{ width: 300, height: 300, marginTop: 50 }} />

        <Button
          style={{ marginLeft: 60, marginRight: 60, backgroundColor:'#23aeff', marginTop: 40, borderColor: '#007dc6' }}
          textStyle={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}
          onPress={() => this.props.navigator.push({ optionsBoxes: true  })}>
          Listo
        </Button>
      </View>
    );
  }
}
