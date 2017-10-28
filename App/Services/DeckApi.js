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
            let decks = DeckApi.getDecks().
            then(decks =>{
            console.log('----getDeck', id, decks);
            decks.filter(deck => deck.title===id);
            return decks.length > 0 ? decks[0] : {};
            })
        } catch (error) {
             console.log('in error', error);

        }

    }

    static async saveDeckTitle(title){
        try {
            console.log('saveDeckTitle');
            let response = await AsyncStorage.getItem(KEY);
            console.log('response', response)
            let items =  response ? JSON.parse(response) : {};
            if (items.hasOwnProperty(title)){
                return false;
            }
            items[title]={title};
            console.log('items', items)
            await AsyncStorage.setItem(KEY, JSON.stringify(items));
            return true;
        } catch (error) {
        }
    }

    static async addCardToDeck(title, card){
        console.log('addCard', title, card)
        try {
                        let response = await AsyncStorage.getItem(KEY);

            let decks = JSON.parse(response);
            console.log('***********items', decks);
            let deck = null;

            Object.keys(decks).forEach((id, index) => {
                if (id == title) {
                    deck = decks[id];
                }
            });

            console.log('***********1234deck1234asdfasfadfasf', deck);

            if (!deck.hasOwnProperty('questions')){
                deck.questions=[];
            }

            deck.questions.push(card);
            decks[title] = deck;
                        console.log('***********decks1234', decks);

            await AsyncStorage.setItem(KEY, JSON.stringify(decks));

        } catch (error) {
                        console.log('in error', error);

        }
    }
}
