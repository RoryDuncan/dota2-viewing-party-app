
import { Store } from 'svelte/store';
import App from "./App.html";
import firebase from "helpers/firebase";

const db = firebase.database();
const ref = db.ref("/");
const screensRef = db.ref("/screens");

const store = new Store({
    name: "app",
    screens: [],
});


screensRef.on('value', (snapshot) => {
  
  // convert our screens dictionary into a list
  const dict = snapshot.val();
  if (dict) {
    const keys = Object.keys(dict);
    const screens = keys.map(id => {
      let value = dict[id];
      return Object.assign({ id, }, value);
    })
  
    console.log("screens in store:", screens)
    store.set({ screens, });
  }
  else {
    store.set({ screens: [], });
  }
});

const app = new App({
  target: document.querySelector('main'),
  store,
});