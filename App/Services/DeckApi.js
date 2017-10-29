import { AsyncStorage } from "react-native";
import Creators from "../Redux/AppRedux";

const KEY = "DECK";

export function getDecks() {
  //  AsyncStorage.setItem(KEY, '');
  return (dispatch, getState) => {
    AsyncStorage.getItem(KEY)
      .then(response => {
        let items = JSON.parse(response);
        let decks = Object.keys(items).map(item => items[item]);
        dispatch(Creators.decks(decks));
      })
      .catch(err => {
        dispatch(Creators.decks([]));
      });
  };
}

export function saveDeckTitle(title) {
  return (dispatch, getState) => {
    AsyncStorage.getItem(KEY)
      .then(response => {
        let decks = response ? JSON.parse(response) : {};
        if (decks.hasOwnProperty(title)) {
          return false;
        }

        decks[title] = { title };
        console.log("decks", decks);
        AsyncStorage.setItem(KEY, JSON.stringify(decks));

        dispatch(Creators.decks(decks));
      })
      .catch(err => {
        dispatch(Creators.decks([]));
      });
  };
}

export function addCardToDeck(title, card) {
   console.log("***********addCardToDeck addCardToDeck1", title, card);
  return (dispatch, getState) => {
    console.log("***********addCardToDeck getState");
    AsyncStorage.getItem(KEY)
      .then(response => {
        console.log("***********addCardToDeck response", response);
        let decks = response ? JSON.parse(response) : {};
 

        console.log("***********addCardToDeck decks", decks);

        let deck = null;
        Object.keys(decks).forEach((id, index) => {
          if (id == title) {
            deck = decks[id];
          }
        });
        console.log("***********addCardToDeck deck", deck);
        if (!deck.hasOwnProperty("questions")) {
          deck.questions = [];
        }
        deck.questions.push(card);
        decks[title] = deck;
        console.log("***********addCardToDeck decks", decks);
        AsyncStorage.setItem(KEY, JSON.stringify(decks));

        let d = Object.keys(decks).map(title => decks[title]);
        console.log('addCardToDeck d,', d);
        dispatch(Creators.decks(d));
      })
      .catch(err => {
         console.log("***********addCardToDeck err", err);
        dispatch(Creators.decks([]));
      });
  };
}
