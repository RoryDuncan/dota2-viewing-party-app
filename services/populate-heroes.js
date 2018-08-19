/*
  Fetches the heros from opendota.com's API and the abilities from some dota2.com feed
*/

const firebaseApp = require("./firebase.js");
const db = firebaseApp.database();
const opendota = require("./opendota.js");
const fetch = require("node-fetch")

// hero abilities are kind of finicky to get..
// found on the forum /shrug
// https://dev.dota2.com/showthread.php?t=104192
const heroAbilitiesEndpoint = "http://www.dota2.com/jsfeed/abilitydata?language=en";
const dota2heroprefix = "npc_dota_hero_";
const talentAbilityNamePrefix = "DOTA_Tooltip_ability_special_bonus_unique";
const openDotaHeroIconOrigin = `https://api.opendota.com/apps/dota2/images/abilities/`

// transforms

const transform = {
  
  indexOnHeroID: (list, hero) => {
    console.log(`transforming ${hero.localized_name}`)
    list[hero.id] = hero;
    return list;
  },

  removeNPCFromHeroName: hero => hero.name = hero.name.replace(dota2heroprefix, ""),
  
  mergeAbilitiesToHero: (abilityData) => {
    return (hero) => {
      var abilities = Object.keys(abilityData)
        .filter( key => key.includes(hero.name))
        
        // fetch the data from the key
        .map(key => abilityData[key])
        
        // don't include talent ability upgrades
        .filter(ability => !ability.desc.includes(talentAbilityNamePrefix))
        
        // fetch the keys we care about
        .map(({ dname, hurl, desc, lore }) => ({ 
          name: dname, 
          hero: hurl, 
          description: desc, 
          lore: lore,
          icon: null,
        }))
        // build the url
        .map(ability => {
          // turn Mana Break in mana_break
          let name = ability.name.toLowerCase().replace(/ /gi, "_");
          const host = openDotaHeroIconOrigin
          const filetype = "png";
          const size = "lg"
          ability.icon = `${host}${ability.hero}_${name}_${size}.${filetype}`;
          return ability;
        })
        
      hero.abilities = abilities;
        
      return hero;
    }
  },
  
  buildAbilityIcon: (ability) => {
    
  }
};


main();

function getHeroAbilities() {
  return fetch(heroAbilitiesEndpoint)
    .then(response => response.json())
    .catch(err => console.log(err))
}


async function main() {
  
  console.log("Fetching all Hero Abilities.");
  const heroAbilities = await getHeroAbilities()
    .then(data => data.abilitydata)
  
  console.log("Fetching all Heroes.");
  await opendota.getHeroes()
    .then( heroes => (heroes.forEach(transform.removeNPCFromHeroName), heroes) )
    .then( heroes => heroes.map(transform.mergeAbilitiesToHero(heroAbilities)) )
    .then( heroes => heroes.reduce(transform.indexOnHeroID, {}) )
    .then( heroMap => db.ref("dota2/heroes").set(heroMap) )
    .then(() => Promise.resolve())
    .catch(err => console.log(err));
    
  console.log("Done.");
  process.exit();
}
