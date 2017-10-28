import {AsyncStorage} from 'react-native'

const KEY = "DECK";

export default class DeckApi {

    static async getDecks(){
             console.log('****in here 1');
             let response;

        try {

            //  AsyncStorage.setItem(KEY, '');
             response = await AsyncStorage.getItem(KEY);
                          console.log('***********response 1', response);

            console.log('***********response', response);
            let items = JSON.parse(response);

                        console.log('items', items);

            let decks = Object.keys(items).map(item => items[item]);
                                    console.log('decks', decks);

            return decks;
       } catch (error) {
            console.log('in error', error);
        }
console.log('returning empty')

return [];


    }

    static async getDeck(id){
        try {
            let decks = getDecks();
            decks.filter(deck => deck.title===id);
            return decks.length > 0 ? decks[0] : {};
        } catch (error) {
        }
    }

    static async saveDeckTitle(title){
        try {
            console.log('saveDeckTitle');
            let response = await AsyncStorage.getItem(KEY);
            console.log('response', response)
            let items =  response ? JSON.parse(response) : {};
            items[title]={title};
            console.log('items', items)
            await AsyncStorage.setItem(KEY, JSON.stringify(items));
        } catch (error) {
        }
    }

    static async addCardToDeck(title, card){
        try {
            let deck = getDeck(title);
            deck.questions.push(card);
            items[title] = deck;
            await AsyncStorage.setItem(KEY, items);
        } catch (error) {
        }
    }
}
