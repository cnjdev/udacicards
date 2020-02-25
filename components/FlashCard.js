import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { styles } from '../utils/styles'
import FormButton from './FormButton'
import { white, black } from '../utils/colors'

class FlashCard extends Component {
  state = {
    answer: false
  }

  switchCard(value){
    this.setState({answer: value})
  }

  render() {
    const { numQ, totalQ, question, answer, onCorrect, onIncorrect } = this.props;

    return (
      <View style={styles.container}>
        <Text>Card {numQ} of {totalQ}</Text>
        
        {this.state.answer 
          ? <TouchableOpacity onPress={() => this.switchCard(false) }>
              <Text style={styles.largeText}>
                {answer}
              </Text>
              <Text style={styles.smallText}>
                (click to view question)
              </Text>
            </TouchableOpacity>
          : <TouchableOpacity onPress={() => this.switchCard(true) }>
              <Text style={styles.largeText}>
                {question}?
              </Text>
              <Text style={styles.smallText}>
                (click to view answer)
              </Text>
            </TouchableOpacity>
        }

        <FormButton text='Correct' style={styles.greenButton} 
            onPress={onCorrect} />
        <FormButton text='Incorrect' style={styles.redButton} 
            onPress={onIncorrect} />
      </View>
    )
  }
}

export default FlashCard