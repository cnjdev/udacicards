import React, { Component } from 'react'
import { Text, TextInput, View, Platform, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { black, white, gray } from '../utils/colors'
import FormButton from './FormButton'
import { createCard } from '../utils/api'
import { addCard } from '../actions'
import { styles } from '../utils/styles'

class AddCard extends Component {
  state = {
    question: '',
    answer: '',
  }

  submitCard() {
    const { title, goBack, addCard } = this.props
    const { question, answer } = this.state

    if (question && answer){
      addCard(title, question, answer)
      createCard(title, question, answer)
      goBack()
    }
  }

  resetCard() {
    this.setState({ question: '', answer: '' })
    this.props.goBack()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
        <TextInput style={styles.question} editable={true} maxLength={150} 
            placeholder="Question" 
            onChangeText={(text) => this.setState({question: text})}
        />
        <TextInput style={styles.answer} editable={true} maxLength={300} multiline={true} 
            placeholder="Answer" 
            onChangeText={(text) => this.setState({answer: text})}
        />
        <FormButton onPress={this.submitCard} text={'Add'} />
        <FormButton onPress={this.resetCard} text={'Cancel'} />
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
    goBack: () => navigation.goBack(),
    addCard: (title, question, answer) => dispatch(addCard(title, question, answer))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCard)