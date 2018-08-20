import firebase from "helpers/firebase";

const db = firebase.database();
const dotaRef = db.ref("/dota2");
const heroesRef = db.ref("/dota2/heroes");
const itemsRef = db.ref("/dota2/items");
const knownForRef = db.ref("/dota2/known-fors");


const getHeroes = () => {
  return heroesRef.once("value")
    .then( snapshot => snapshot.val())
    .catch( err => console.error(err))
}

const getAllHeroData = () => {
  return dotaRef.once("value")
    .then(snapshot => snapshot.val())
    .then(data => {
      
      const knownFor = data["known-for"];
      const heroes = Object.values(data.heroes);
      
      heroes.forEach(hero => {
        hero.knownFor = knownFor[hero.name];
      });
      
      return heroes;
    })
}


const getHeroesAsList = () => getHeroes().then( heroesDictionary => Object.values(heroesDictionary));

export default {
  getHeroes,
  getHeroesAsList,
  getAllHeroData,
}