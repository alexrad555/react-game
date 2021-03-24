import firebase from "firebase/app";
import 'firebase/database';

const firebaseConfig = {
	apiKey: "AIzaSyCk9gznzzgnoLCI-G577gohcVhhhTGdNPA",
	authDomain: "react-game-d3339.firebaseapp.com",
	databaseURL: "https://react-game-d3339-default-rtdb.firebaseio.com",
	projectId: "react-game-d3339",
	storageBucket: "react-game-d3339.appspot.com",
	messagingSenderId: "1619753954",
	appId: "1:1619753954:web:eed104feaf158b94e1d7bb"
  };
  firebase.initializeApp(firebaseConfig);
class Firebase {
    constructor(){
        
        this.fire = firebase;
        this.database = this.fire.database();
    }

    offPokemonSoket = () => {
        this.database.ref('pokemons').off();
    }

    getPokemonSoket = (cb) => {
        this.database.ref('pokemons').on('value', (snapshot) => {
            cb(snapshot.val());
        })
    }

    getPokemonsOnce = async () => {
        return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val());
    }

    postPokemon = (key, pokemon) => {
        this.database.ref(`pokemons/${key}`).set(pokemon);
    }

    addPokemon = (newPokemon, cb) => {
        const newKey = this.database.ref().child('pokemons').push().key;
        this.database.ref('pokemons/' + newKey).set(newPokemon).then(() => cb());
    }
}

 
  export default Firebase;
