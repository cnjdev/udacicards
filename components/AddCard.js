import React, { Component } from 'react'
import { Text, TextInput, View, Platform, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
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
      this.setState({ question: '', answer: '' })
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
        <Text>{this.props.title}</Text>
        <TextInput editable={true} maxLength={150} 
            placeholder="Question" 
            value={this.state.question}
            onChangeText={(text) => this.setState({question: text})}
        />
        <TextInput editable={true} maxLength={300} multiline={true} 
            placeholder="Answer" 
            value={this.state.answer}
            onChangeText={(text) => this.setState({answer: text})}
        />
        <FormButton onPress={this.submitCard.bind(this)} text={'Add'} />
        <FormButton onPress={this.resetCard.bind(this)} text={'Cancel'} />
      </View>
    )
  }
}

function mapStateToProps(decks, { navigation }){
  const { title } = navigation.state.params
  return {
    title,
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