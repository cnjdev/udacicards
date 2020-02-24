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

  static navigationOptions = ({navigation}) => {
    const { title } = navigation.state.params
    return { title }
  }

  switchCard(value){
    this.setState({answer: value})
  }

  render() {
    const { numQ, totalQ, question, answer, onCorrect, onIncorrect } = this.props;

    return (
      <View style={styles.container}>
        <View>
          <Text>Card {numQ} of {totalQ}</Text>
        </View>

        {this.state.answer 
          ? <TouchableOpacity onPress={() => this.switchCard(false) }>
              <Text style={{fontSize: 30, color: black}}>
                {answer}
              </Text>
              <Text style={{fontSize: 15, color: black}}>
                (click to view question)
              </Text>
            </TouchableOpacity>
          : <TouchableOpacity onPress={() => this.switchCard(true) }>
              <Text style={{fontSize: 30, color: black}}>
                {question}?
              </Text>
              <Text style={{fontSize: 15, color: black}}>
                (click to view answer)
              </Text>
            </TouchableOpacity>
        }

        <View>
          <FormButton text='Correct' style={styles.blackButton} 
              onPress={onCorrect} />
          <FormButton text='Incorrect' style={styles.whiteButton} 
              onPress={onIncorrect} />
        </View>
      </View>
    )
  }
}

export default FlashCard