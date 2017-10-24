import { StackNavigator, TabNavigator } from 'react-navigation'
import NewQuestionScreen from '../Containers/NewQuestionScreen'
import NewDeckScreen from '../Containers/NewDeckScreen'
import QuizScreen from '../Containers/QuizScreen'
import IndividualDeckScreen from '../Containers/IndividualDeckScreen'
import DeckListScreen from '../Containers/DeckListScreen'
import LaunchScreen from '../Containers/LaunchScreen'


// Manifest of possible screens
const PrimaryNav = StackNavigator({
  NewQuestionScreen: { screen: NewQuestionScreen },
  QuizScreen: { screen: QuizScreen },
  IndividualDeckScreen: { screen: IndividualDeckScreen },
  DeckListScreen: { screen: DeckListScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'DeckListScreen',
  navigationOptions: {
    headerStyle: {backgroundColor: '#FFFFFF'}
  }
})

const Tabs = TabNavigator({
  PrimaryNav: {
    screen: PrimaryNav,
    navigationOptions: {
      tabBarLabel: 'Decks'    },
  },
  NewDeck: {
    screen: NewDeckScreen,
    navigationOptions: {
      tabBarLabel: 'New Deck'
    },
  },
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    style: {
      height: 56,
      backgroundColor: 'white',
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})


export default Tabs
