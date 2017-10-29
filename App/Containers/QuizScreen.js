import React, { Component } from "react";
import { ScrollView, Text, View, TouchableHighlight } from "react-native";
import { connect } from "react-redux";
import Deck from "../Components/Deck";
import Button from "../Components/Button";

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

class QuizScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {deck: props.deck, questionNumber: props.questionNumber, numberCorrect: 0, numberIncorrect: 0, questionMode: true};
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 

  render() {
        

    const { deck, questionNumber } = this.state;
    
    if (deck == null) {
      //  return  <View />;
    }

    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "flex-start",
            paddingTop: 10,
            paddingLeft: 10
          }}
        >
          <Text style={{ fontSize: 20 }}>{questionNumber}/{deck.questions.length}</Text>
        </View>
        <View
          style={{
            flex: 3,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 36, paddingLeft: 20, paddingRight: 20, textAlign: 'center' }}>
                       {this.state.questionMode 
                        ? deck.questions[questionNumber-1].question
                        : deck.questions[questionNumber-1].answer
                       }
          </Text>

          <TouchableHighlight onPress={this.onPressAnswer} underlayColor="#fff">
            <Text
              style={{
                fontSize: 20,
                color: "red",
                fontWeight: "bold",
                paddingTop: 20
              }}
            >
              {this.state.questionMode ? "Answer" : "Question"}
            </Text>
          </TouchableHighlight>

        </View>
        <View
          style={{
            flex: 2,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
    <Button title="Correct" onPress={this.onPressCorrect} backgroundColor="green" textColor="white"/>

    <Button title="Incorrect" onPress={this.onPressIncorrect} backgroundColor="red" textColor="white"/>
         
        </View>
      </View>
    );
  }

  onPressAnswer = ()=>{
    this.setState({questionMode: !this.state.questionMode})
  }


  onPressCorrect = ()=>{
    let numberCorrect = this.state.numberCorrect + 1;
    let questionNumber = this.state.questionNumber + 1;
    this.setState({numberCorrect, questionNumber, questionMode: true})
  } 

  onPressIncorrect = ()=>{
    let numberIncorrect = this.state.numberIncorrect + 1;
    let questionNumber = this.state.questionNumber + 1;
    this.setState({numberIncorrect, questionNumber, questionMode: true})
  } 
}




const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizScreen);
