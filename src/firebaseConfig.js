import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB9XBlvR-oqxgiLhOPdjg30amg0EJKqjyo",
    authDomain: "katya-recipe.firebaseapp.com",
    databaseURL: "https://katya-recipe.firebaseio.com",
    projectId: "katya-recipe",
    storageBucket: "katya-recipe.appspot.com",
    messagingSenderId: "54663969634",
    appId: "1:54663969634:web:24bab487fe3d5d10f5ca3b",
    measurementId: "G-SEZJ84VYQR"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase