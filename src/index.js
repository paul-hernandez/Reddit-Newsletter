import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAnbUZVtoxzxyOR8uK5U4plWvgTJOTI3NQ",
    authDomain: "reddit-newsletter-d0ccc.firebaseapp.com",
    databaseURL: "https://reddit-newsletter-d0ccc.firebaseio.com",
    projectId: "reddit-newsletter-d0ccc",
    storageBucket: "reddit-newsletter-d0ccc.appspot.com",
    messagingSenderId: "370461869861"
}

firebase.initializeApp(config);



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
