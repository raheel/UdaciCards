import React, { Component } from "react";
import { FlatList, Text, View, KeyboardAvoidingView } from "react-native";
import Deck from "../Components/Deck.js";
import { connect } from "react-redux";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

class DeckListScreen extends Component {
  render() {
    const data = this.props.data;
    console.log("data: ", data);

    if (!data) {
      return <Text>Nothing to see here</Text>;
    }
    const items = Object.keys(data).map(name => data[name]);
    return <FlatList data={items} renderItem={this.renderItem} />;
  }

  renderItem({ item }) {
    <View>
      <View>
        <Deck
          title={item.title}
          numberOfCards={item.questions.length}
          showBorder="false"
        />
      </View>
      <View />
    </View>;
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckListScreen);
