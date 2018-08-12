
import { Store } from 'svelte/store';
import App from "./App.html";
import firebase from "helpers/firebase";

const store = new Store({
    name: "app"
});

const app = new App({
  target: document.querySelector('main'),
  store,
});