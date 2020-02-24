import React from 'react'
import { View, Text } from 'react-native'
import { white, black } from '../utils/colors'

function DeckInfo ({ title, count }) {
  return (
    <View>
      <Text style={{fontSize: 20, color: black}}>
        {title}
      </Text>
      <Text style={{fontSize: 16, color: black}}>
        {count} cards
      </Text>
    </View>
  )
}

export default DeckInfo