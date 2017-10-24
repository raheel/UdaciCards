import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet } from 'react-native'
import Button from '../Components/Button'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'


class NewQuestionScreen extends Component {
  render () {
    return (
      <View style={{flex:1,  alignItems: "center", paddingTop: 15}}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter question."
          onChangeText={(text) => this.setState({question: text})}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter answer."
          onChangeText={(text) => this.setState({answer: text})}
        />    
        <Button title="Submit" backgroundColor="black" borderColor="black" textColor="white"/>    
        </View>
    )
  }
}

var styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    width: 250
  }
});


const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestionScreen)
