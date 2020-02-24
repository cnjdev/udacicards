import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { styles } from '../utils/styles'
import FormButton from './FormButton'
import DeckInfo from './DeckInfo'
import { deleteDeck } from '../utils/api'
import { removeDeck } from '../actions'

class DeckDetail extends Component {
  static navigationOptions = ({navigation}) => {
    const { title } = navigation.state.params
    return { title }
  }

  eliminateDeck(){
    const { title, removeDeck, goBack } = this.props
    
    if (title){
      removeDeck(title)
      deleteDeck(title)
      goBack()
    }
  }

  render() {
    const { title, count, goAddCard, goStartQuiz } = this.props;

    return (
      <View style={styles.container}>
        <DeckInfo title={title} count={count} />
        <View>
          <FormButton text='Add Card' style={styles.whiteButton} 
              onPress={() => goAddCard(title)} />
          <FormButton text='Start Quiz' style={styles.blackButton} 
              onPress={() => goStartQuiz(title)} />
          <FormButton text='Delete Deck' style={styles.whiteButton} 
              onPress={this.eliminateDeck} />
        </View>
      </View>
    )
  }
}

function mapStateToProps(state, { navigation }) {
  const { title } = navigation.state.params
  return { title }
}

function mapDispatchToProps (dispatch, { navigation }) {
  const { title } = navigation.state.params

  return {
    goBack: () => navigation.goBack(),
    goAddCard: (title) => navigation.navigate('AddCard', {title}),
    goStartQuiz: (title) => navigation.navigate('Quiz', {title})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckDetail);