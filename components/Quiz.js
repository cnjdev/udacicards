import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Animated } from 'react-native'
import { connect } from 'react-redux'
import FormButton from './FormButton'
import FlashCard from './FlashCard'
import { styles } from '../utils/styles'

class Quiz extends Component {

  state = {
    numQ: 0,
    correctQ: 0,
  }

  restartQuiz(){
    this.setState({
      numQ: 0, 
      correctQ: 0
    })
  }

  onCorrect() {
    this.setState((state) => {
      return {
        numQ: state.numQ + 1,
        correctQ: state.correctQ + 1,
      }
    })
  }

  onIncorrect() {
    this.setState((state) => {
      return {
        numQ: state.numQ + 1,
        correctQ: state.correctQ,
      }
    })
  }

  render() {
    const { deck, goBack } = this.props
    const { numQ, correctQ } = this.state
    const totalQ = deck.cards.length

    if (totalQ === 0){
      return (
        <View style={styles.container}>
          <Text>Sorry, there are no cards in this deck.</Text>
          <FormButton text='Back' style={styles.whiteButton} 
            onPress={() => goBack()} />
        </View>
      )
    }

    if (numQ >= deck.cards.length){
      return (
        <View style={styles.container}>
          <Text>Score: {correctQ} </Text>
          <FormButton text='Restart' style={styles.whiteButton} 
            onPress={() => this.restartQuiz()} />
          <FormButton text='Back' style={styles.whiteButton} 
            onPress={() => goBack()} />        
        </View>
      )
    }
    
    let card = deck.cards[numQ]
    return (
      <View style={styles.container}>
        <FlashCard 
          numQ={numQ+1} totalQ={totalQ}
          question={card.question} answer={card.answer} 
          onCorrect={() => this.onCorrect()}
          onIncorrect={() => this.onIncorrect()}  
        />
      </View>
    )
  }
}

function mapStateToProps(decks, { navigation }){
  const { title } = navigation.state.params
  return {
    deck: decks[title] || {}
  } 
}

function mapDispatchToProps(dispatch, { navigation }){
  const { title } = navigation.state.params
  return {
    goBack: () => navigation.goBack()
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)