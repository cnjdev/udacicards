import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'
import { getDecks } from '../utils/api'
import { white } from '../utils/colors'
import { styles } from '../utils/styles'
import { AppLoading } from 'expo'
import DeckInfo from './DeckInfo'

class Decks extends Component {
  
  state = {
    ready: false,
  }
  

  componentDidMount () {
    const { dispatch } = this.props

    getDecks()
      .then((decks) => dispatch(receiveDecks(decks)))
      .then(() => this.setState(() => ({ready: true})))
  }

  render() {
    const { decks } = this.props
    const { ready } = this.state

    if (ready === false) {
      return <AppLoading />
    }

    const titles = Object.keys(decks);

    return (
      <View style={styles.container}>
        {titles.map(title => {
          <Text>{title} ({decks[title].cards.length} cards)</Text>

          /*
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('DeckDetail', { title } ) }>
            <DeckInfo 
              title={title} 
              count={decks[title].cards.length}
            />
          </TouchableOpacity>     
          */     
        })}    
      </View>
    )
  }
}

function mapStateToProps (decks) {
  return { decks }
}

export default connect(mapStateToProps)(Decks)