import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'
import { getDecks } from '../utils/api'
import { white } from '../utils/colors'
import { styles } from '../utils/styles'
import { AppLoading } from 'expo'
import DeckInfo from './DeckInfo'
import { getDeckString } from '../utils/api'
class Decks extends Component {
  
  state = {
    ready: false,
  }
  
  componentDidMount () {
    getDecks()
      .then((decks) => this.props.receiveDecks(decks))
      .then(({decks}) => {decks})
      .then(() => this.setState(() => ({ready: true})))
  }

  render() {
    if (!this.state.ready) {
      return (<AppLoading />)
    }

    const { decks, viewDeck } = this.props
    const deckList = Object.values(decks)
    const deckStr = JSON.stringify(decks)

    return (
      <ScrollView style={styles.container}>
        {deckList.map((deck) => 
          (
            <View style={styles.container}>
              
              <TouchableOpacity
                style={styles.whiteButton}
                onPress={() => viewDeck(deck.title) }>
                <DeckInfo 
                  title={deck.title} 
                  count={deck.cards.length}
                />
              </TouchableOpacity>            

            </View>
          )
        )}
        
      </ScrollView>
    )
  }
}

function mapStateToProps (decks) {
  return { decks }
}

function mapDispatchToProps (dispatch, { navigation }) {
  return {
    receiveDecks: (decks) => dispatch(receiveDecks(decks)),
    viewDeck: (title) => navigation.navigate('DeckDetail', { title } ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Decks)