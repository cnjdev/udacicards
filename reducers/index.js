import { RECEIVE_DECKS, ADD_DECK, ADD_CARD, REMOVE_DECK } from '../actions'

export default function decks (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
      return {
        ...state,
        ...action.decks,
      }
    case ADD_DECK : {
      if (state[action.title])
        return state
      return {
        ...state,
        [action.title]: {
          title: action.title,
          cards: []
        }
      }
    }
    case ADD_CARD : {
      const { title, question, answer } = action
      return {
        ...state,
        [title]: {
          title,
          cards: [
            ...state[title].cards,
            { question, answer }
          ]
        }
      }
    }
    case REMOVE_DECK : {
      let newState = state
      newState[action.title] = undefined
      delete newState[action.title]
      return newState
    }
    default :
      return state
  }
}
