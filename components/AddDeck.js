import React, { Component } from 'react'
import { Text, TextInput, View, Platform, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { black, white, gray } from '../utils/colors'
import FormButton from './FormButton'
import { createDeck } from '../utils/api'
import { addDeck } from '../actions'
import { styles } from '../utils/styles'

class AddDeck extends Component {
  state = {
    title: '',
  }

  submitDeck(){
    const { title } = this.state
    const { addDeck } = this.props
    
    if (title){
      addDeck(title)
      createDeck(title)
      this.setState({ title: '' })
      this.goBack()
    }
  }

  resetDeck(){
    this.setState({ title: '' })
    this.goBack()
  }

  goBack() {
    this.props.navigation.dispatch(NavigationActions.back({key: 'AddDeck'}))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Enter title:</Text>
        <TextInput editable={true} maxLength={50} 
            placeholder="Title" 
            value={this.state.title}
            onChangeText={(text) => this.setState({ title: text })}/>
        <FormButton onPress={this.submitDeck.bind(this)} text={'Add'} />
        <FormButton onPress={this.resetDeck.bind(this)} text={'Cancel'} />
      </View>
    )
  }
}

function mapStateToProps(decks){
  return decks
}


function mapDispatchToProps(dispatch, { navigation }){
  return {
    goBack: () => navigation.goBack(),
    addDeck: (title) => dispatch(addDeck(title)),
  }
}

export default connect(mapStateToProps, {addDeck})(AddDeck)