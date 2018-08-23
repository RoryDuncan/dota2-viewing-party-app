
import { Store } from 'svelte/store';
import App from "./App.html";
import firebase from "helpers/firebase";
import apps from "helpers/apps";

const db = firebase.database();
const ref = db.ref("/");
const screensRef = db.ref("/screens");

const store = new Store({
    name: "app",
    screens: [],
    ready: false,
});



screensRef.on('value', (snapshot) => {
  const ready = true;
  // convert our screens dictionary into a list
  const dict = snapshot.val();
  if (dict) {
    const keys = Object.keys(dict);
    const screens = keys.map(id => {
      let screen = dict[id];
      let app;
      // ensure we have anapp reference
      if (!screen.app) {
        app = app.getDefaultApp();
        screen.app = app;
      }
      else {
        app = apps.getAppByID(screen.app.id);
      }
      
      screen.app.settings = screen.app.settings || app.settings || {};
      
      return Object.assign({ id, }, screen);
    })
  
    console.log("screens in store:", screens)
    store.set({ screens, ready });
  }
  else {
    store.set({ screens: [], ready });
  }
});

const app = new App({
  target: document.querySelector('main'),
  store,
});