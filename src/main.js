
import { Store } from 'svelte/store';
import App from "./App.html";

const store = new Store({
    name: "app"
});

const app = new App({
  target: document.querySelector('main'),
  store,
});