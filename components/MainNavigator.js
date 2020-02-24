import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { black, white } from '../utils/colors';
import TabNav from './TabNav';
import DeckDetail from './DeckDetail';
import AddCard from './AddCard';
import Quiz from './Quiz';

const MainNavigator = createAppContainer(
  createStackNavigator({
    home: {
      screen: TabNav,
      navigationOptions: {
        header: null,
      },
    },
    DeckDetail: {
      screen: DeckDetail,
      navigationOptions: ({ navigation }) => ({
        headerTintColor: white,
        headerStyle: {
          backgroundColor: black,
        },
      }),
    },
    AddCard: {
      screen: AddCard,
      navigationOptions: ({ navigation }) => ({
        headerTintColor: white,
        headerStyle: {
          backgroundColor: black,
        },        
        title: "Add Card",
      }),
    },
    Quiz: {
      screen: Quiz,
      navigationOptions: ({ navigation }) => ({
        headerTintColor: white,
        headerStyle: {
          backgroundColor: black,
        },        
        title: "Quiz",
      }),      
    }
  })
);

export default MainNavigator