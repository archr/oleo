import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import GameCard from './GameCard'

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor={'#23aeff'}/>

        <Icon.ToolbarAndroid
          title='Oleo'
          elevation={3}
          titleColor='white'
          style={{ backgroundColor: '#2eb2ff', height: 56 }}
        />

        <ScrollView style={styles.content}>
          <GameCard
            title='Recuerda la fruta'
            source={require('./img/card.jpg')}
            onPress={() => this.props.navigator.push({ fruits: true })}
          />
          <GameCard
            title='Juega con tu mente'
            source={require('./img/card2.jpg')}
            onPress={() => this.props.navigator.push({ boxes: true })}

          />
          <GameCard
            title='Locura'
            source={require('./img/card.jpg')}

          />
          <GameCard
            title='Fe'
            source={require('./img/card2.jpg')}

          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1
  },
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
