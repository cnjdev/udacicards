import React from 'react'
import { View, Text } from 'react-native'
import { white, black } from '../utils/colors'
import { styles } from '../utils/styles'

function DeckInfo ({ title, count }) {
  return (
    <View style={styles.container}>
      <Text style={styles.deckTitle}>
        {title}
      </Text>
      <Text style={styles.deckCount}>
        {count} cards
      </Text>
    </View>
  )
}

export default DeckInfo