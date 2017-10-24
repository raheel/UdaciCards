import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet } from 'react-native'
import Button from '../Components/Button'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'


class NewDeckScreen extends Component {
  render () {
    return (
      <View style={{flex:1, justifyContent: "center", alignItems: "center", paddingBottom: 150}}>
        <Text
          style={{fontSize: 36, paddingLeft: 20, paddingRight: 20, textAlign: 'center' }}
        >
        What is the title of your new deck?
        </Text>
        <TextInput
          style={styles.textInput}
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
    marginTop:20,
    marginBottom: 20,
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

export default connect(mapStateToProps, mapDispatchToProps)(NewDeckScreen)
