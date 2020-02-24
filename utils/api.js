import { AsyncStorage } from 'react-native'

export const DECK_STORAGE_KEY = "UdaciCards:decks";

function parseDecks(decks){
  return (decks && decks.length > 0) ? JSON.parse(decks) : testData()
}

export function getDecks () {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(parseDecks)
}

export function setDecks (decks) {
  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks))
}

export function getDeck (title) {
  return getDecks().then(decks => decks[title])
}

export function createDeck (title) {
  getDecks().then(decks => {
    if (! decks[title]){
      decks[title] = { 
        title, 
        cards: [] 
      }
      setDecks(decks)
    }
    return decks
  })
}

export function createCard (title, question, answer) {
  getDecks().then(decks => {
    decks[title].cards.push({ question, answer })
    setDecks(decks)
    return decks
  })
}

export function deleteDeck (title) {
  getDecks().then(decks => {
    decks[title] = undefined
    delete decks[title]
    setDecks(decks)
    return decks
  })
}

function testData() {
  return {
    React: {
      title: 'React',
      cards: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      cards: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  }
}