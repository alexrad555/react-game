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
  export const fire = firebase;
  export const database = fire.database();

  export default database;