import { AsyncStorage } from 'react-native'

export const DECK_STORAGE_KEY = "UdaciCards:decks";

function parseDecks(decks){
  return (decks === null) ? setTestData() : JSON.parse(decks)
}

export function getDecks () {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(parseDecks)
}

export function setDecks (decks) {
  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks))
}

export function getDeck (title) {
  let decks = getDecks()
  return decks[title]
}

export function createDeck (title) {
  let decks = getDecks()
    
  if (! decks[title]){
    decks[title] = { 
      title, 
      cards: [] 
    }
    setDecks(decks)
  }
    
  return decks
}

export function createCard (title, question, answer) {
  let decks = getDecks()
  
  decks[title].cards.push({ question, answer })
  setDecks(decks)
  
  return decks
}

export function deleteDeck (title) {
  let decks = getDecks()
  
  decks[title] = undefined
  delete decks[title]
  setDecks(decks)

  return decks
}

function setTestData() {
  let testDecks = testData()

  setDecks(testDecks)
  
  return testDecks
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