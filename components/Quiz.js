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
    question: '',
    answer: ''
  }

  loadNextQuestion(){
    let { numQ } = this.state
    const { deck } = this.props
    let totalQ = deck.cards.length

    if (totalQ > 0 && totalQ > numQ){
      let card = deck.cards[numQ]
      this.setState({
        numQ: numQ+1,
        question: card.question,
        answer: card.answer,
      })
    }
  }

  restartQuiz(){
    this.setState({
      numQ: 0, 
      correctQ: 0
    })

    this.loadNextQuestion()
  }

  onCorrect() {
    let { correctQ } = this.state
    this.setState({
      correctQ: correctQ+1
    })
    this.loadNextQuestion()
  }

  onIncorrect() {
    this.loadNextQuestion()
  }

  render() {
    const { deck, goBack } = this.props
    const { numQ, correctQ, question, answer } = this.state
    const totalQ = deck.cards.length

    if (totalQ === 0){
      return (
        <View>
          <Text>Sorry, there are no cards in this deck.</Text>
          <FormButton text='Back' style={styles.blackButton} 
            onPress={() => goBack()} />
        </View>
      )
    }

    if (numQ > deck.cards.length){
      return (
        <View>
          <Text>Score: {correctQ} </Text>
          <FormButton text='Restart' style={styles.blackButton} 
            onPress={() => this.restartQuiz()} />
          <FormButton text='Back' style={styles.whiteButton} 
            onPress={() => goBack()} />        
        </View>
      )
    }
    
    return (
      <View>
        <FlashCard 
            numQ={numQ} totalQ={totalQ}
            question={question} answer={answer} 
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