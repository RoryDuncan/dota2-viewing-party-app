/*
 fetches the dota 2 list of in-game items from the steam API, then adds them to our firebase RTDB
*/

require('dotenv-safe').config()
const firebaseApp = require("./firebase.js");
const db = firebaseApp.database();


const env = require('dotenv-safe').config();
const fetch = require("node-fetch")
const steamAPIKey = process.env.dota2webapikey;

if (steamAPIKey) getItems();
else throw new Error("Missing Steam API Key")

async function getItems() {
  const result = await fetch(`https://api.steampowered.com/IEconDOTA2_570/getGameItems/v0001/?key=${steamAPIKey}`)
    .then(response => response.json())
    .then(json => json.result.items)
    .then(items => db.ref("dota2/items").set(items))
    .then(() => console.log("Items added."))
    .catch(err => console.log(err));
    
  console.log("Done.");
  process.exit();
}