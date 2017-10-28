import React, { Component } from "react";
import { FlatList, Text, View, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import Deck from "../Components/Deck.js";
import { connect } from "react-redux";
import DeckApi from "../Services/DeckApi";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

class DeckListScreen extends Component {
state = {};

  constructor(props) {
    super(props);

   this.renderItem = this.renderItem.bind(this);
  }

componentDidMount() {
      DeckApi.getDecks().then(decks => {
      let data = decks;
      console.log("data---------abc: ", data);

      const items = Object.keys(data).map(name => data[name]);

      this.setState({items});


    });
}

  render() {
    console.log('this.state', this.state)
    console.log('this.props', this.props.navigation)
    let items = this.state.items;

      if (!items) {
        
        return <Text>Nothing to see here</Text>;
      }
      console.log("data---------data____1234: ", items);


      const data = Object.keys(items).map(name => items[name]);

      console.log("data---------items1234: ", data);


      return <FlatList style={{marginTop: 10}} data={data} renderItem={this.renderItem}
      keyExtractor={(item, index) => index}
       />;


  }

  renderItem(item) {     
   item = item.item; 
     console.log("renderItem---------item1234: ", item);
return (
      <TouchableOpacity onPress={() => this.onPress(item)}>
        <Deck 
          title={item.title}
          numberOfCards={item.questions ? item.questions.length : 0
          }
          showBorder={true}
        />
      </TouchableOpacity>
)
  }

  onPress = (item)=>{
    console.log('onpress', item);
    this.props.navigation.navigate('IndividualDeckScreen', {'deck': item});
  }
}

const mapStateToProps = state => {
  console.log('---state', state.nav);
  let nav = state.nav;
  return {nav};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckListScreen);
