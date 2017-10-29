import React, { Component } from "react";
import {
  FlatList,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import Deck from "../Components/Deck.js";
import { connect } from "react-redux";
import {getDecks} from "../Services/DeckApi.js";


class DeckListScreen extends Component {
  state = {};

  constructor(props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
  }

  componentDidMount() {
    
   this.props.loadDecks();
  }

  render() {
    
    
    let decks = this.props.decks;

    if (!decks) {
      return <Text>Nothing to see here</Text>;
    }
    

    const data = Object.keys(decks).map(name => decks[name]);

    

    return (
      <FlatList
        style={{ marginTop: 10 }}
        data={data}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index}
      />
    );
  }

  renderItem(item) {
    item = item.item;
    
    return (
      <TouchableOpacity onPress={() => this.onPress(item)}>
        <Deck
          title={item.title}
          numberOfCards={item.questions ? item.questions.length : 0}
          showBorder={true}
        />
      </TouchableOpacity>
    );
  }

  onPress = item => {
    
    this.props.navigation.navigate("IndividualDeckScreen", { title: item.title });
  };
}

const mapStateToProps = state => {
  let decks = state.app.decks;
    

  return { decks };
};

const mapDispatchToProps = dispatch => {
  return {
   loadDecks: () => dispatch(getDecks())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckListScreen);
