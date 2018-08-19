import firebase from "helpers/firebase";

const db = firebase.database();
const dotaRef = db.ref("/dota2");
const heroesRef = db.ref("/dota2/heroes");
const itemsRef = db.ref("/dota2/items");


const getHeroes = () => {
  return heroesRef.once("value")
    .then( snapshot => snapshot.val())
    .catch( err => console.error(err))
}

const getHeroesAsList = () => getHeroes().then( heroesDictionary => Object.values(heroesDictionary));

export default {
  getHeroes,
  getHeroesAsList,
}