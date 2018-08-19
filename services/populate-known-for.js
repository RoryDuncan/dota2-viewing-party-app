const firebaseApp = require("./firebase.js");
const db = firebaseApp.database();
const fetch = require("node-fetch")

const heroRef = db.ref("/dota2/heroes")

const ref = db.ref("/dota2/known-for")

const byPassSafety = process.argv[2] === "-f" || process.argv[2] === "--force"

main();

async function main(){
  
  console.log("Checking if this is safe to run...");
  const hasKeys = await ref.once("value")
    .then(snapshot => snapshot.val() || {})
    .then(dict => Object.keys(dict))
    .then(keys => Promise.resolve(keys.length > 0))
    .catch(err => console.log(err));
  
  if (hasKeys && !byPassSafety) {
    console.log("Not Safe to Run: Reference already has keys, exiting to prevent overwrites.");
    console.log("If you still need to run it, pass the argument '--force'.\nThis will overwrite all data.\n");
    process.exit();
  }
  
  if (byPassSafety) {
    console.log("\nRan with force. I hope you know what you're doing.\n");
  }
  
  console.log("Getting heroes...");
  const heroes = await heroRef.once("value")
    .then(snapshot => Promise.resolve(snapshot.val()))
    .catch(err => console.log(err))
  
  console.log("Generating known-fors...");
  const tips = {};
  Object.keys(heroes).forEach((name) => {
    tips[name] = { hero: name, tip: "TODO", videoURL: "", imageURL: "", };
  });
  
  console.log("Saving...");
  await ref.set(tips).catch(err => console.log(err))
  
  console.log("Done.");
  process.exit();
}