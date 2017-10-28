import React, { Component } from "react";
import { ScrollView, Text, View, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { connect } from "react-redux";
import Deck from "../Components/Deck";
import Button from '../Components/Button'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from "./Styles/IndividualDeckScreenStyle";

class IndividualDeckScreen extends Component {
  render() {
    const deck = this.props.navigation.state.params.deck;
    console.log('deck', deck);
        console.log('this.props.navigation.state', this.props.navigation.state);

    if (deck == null) {
      return <TouchableOpacity onPress={()=>{
    console.log('onpress');
    this.props.navigation.navigate('DeckListScreen', {'deck': deck});
   // this.state.nav.push();
  }}><Text>test</Text></TouchableOpacity>;
    }

    return <View style={{flex: 1}}> 
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center'}}>
        <Deck
          title={deck.title}
          numberOfCards={deck.questions ? deck.questions.length : 0}
          showBorder="false"
        />
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button style={{width: 100}} onPress={()=>this.addCard(deck)} title="Add Card" backgroundColor="black" textColor="white"/>

        <Button style={{width: 100}} onPress={this.startQuiz}  title="Start Quiz" backgroundColor="white" borderColor="black" textColor="black"/>
            </View>
    </View>;
  }

  addCard(deck){
    console.log('--------deck', deck.title);
   this.props.navigation.navigate('NewQuestionScreen', {'title': deck.title});

  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(
  IndividualDeckScreen
);
