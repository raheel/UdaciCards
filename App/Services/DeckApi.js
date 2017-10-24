import {syncStorage} from 'react-native'

const KEY = "DECK";

export default class DeckApi{

    getDecks(){
        try {
            let response = await AsyncStorage.getItem(KEY);
            let items = await JSON.parse(response);
            let decks = Object.keys(items).map(item => items[item]);
            return decks;
        } catch (error) {
        }

        return [];
    }

    getDeck(id){
        try {
            let decks = getDecks();
            decks.filter(deck => deck.title===id);
            return decks.length > 0 ? decks[0] : {};
        } catch (error) {
        }
    }

    saveDeckTitle(title){
        try {
            let response = await AsyncStorage.getItem(KEY);
            let items = await JSON.parse(response);
            items[title]={title};
            await AsyncStorage.setItem(KEY, );
        } catch (error) {
        }
    }

    addCardToDeck(title, card){
        try {
            let deck = getDeck(title);
            deck.questions.push(card);
            items[title] = deck;
            await AsyncStorage.setItem(KEY, items);
        } catch (error) {
        }
    }
}
