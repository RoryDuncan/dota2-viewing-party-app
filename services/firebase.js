const firebase = require("firebase");

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDC5VEjW1UTMERr6r8q0yx6ScLGqVmFV9k",
  authDomain: "dota2-viewing-party-app.firebaseapp.com",
  databaseURL: "https://dota2-viewing-party-app.firebaseio.com",
  projectId: "dota2-viewing-party-app",
  storageBucket: "dota2-viewing-party-app.appspot.com",
  messagingSenderId: "772379726857"
};
const app = firebase.initializeApp(config);
  
module.exports = app;
  