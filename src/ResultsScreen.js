import React, { Component } from 'react'
import { Modal, View, Text, StyleSheet } from 'react-native'
import Button from 'apsl-react-native-button'

export default class ResultsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.subtitle}>Tiempo Terminado</Text>
        <Text style={styles.points}>{parseInt(this.props.points)} puntos realizados</Text>

        <View style={{ marginTop: 100 }}>
          <Button
            style={{ marginLeft: 10, width: 300, backgroundColor:'#23aeff', marginRight: 10, borderColor: '#007dc6' }}
            textStyle={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}
            onPress={() => this.props.navigator.resetTo({ fruits: true }) }>
            Volver a jugar
          </Button>

          <Button
            style={{ marginLeft: 10, backgroundColor:'#23aeff', marginRight: 10, borderColor: '#007dc6' }}
            textStyle={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}
            onPress={() => this.props.navigator.resetTo({ home: true }) }>
            Inicio
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'column'
  },
  subtitle: {
    color: 'black',
    fontSize: 24,
    marginTop: 100
  },
  points: {
    fontSize: 18,
    marginTop: 20
  }
})