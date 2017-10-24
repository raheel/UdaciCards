import React, { Component } from "react";
import { ScrollView, Text, View, KeyboardAvoidingView } from "react-native";
import { connect } from "react-redux";
import Deck from "../Components/Deck";
import Button from '../Components/Button'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from "./Styles/IndividualDeckScreenStyle";

class IndividualDeckScreen extends Component {
  render() {
    const deck = this.props.deck;
    if (deck == null) {
      return <View />;
    }

    return <View style={{flex: 1}}> 
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center'}}>
        <Deck
          title={deck.title}
          numberOfCards={deck.questions.length}
          showBorder="false"
        />
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button style={{width: 100}} title="Add Card" backgroundColor="black" textColor="white"/>

        <Button style={{width: 100}} title="Start Quiz" backgroundColor="white" borderColor="black" textColor="black"/>
            </View>
    </View>;
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
