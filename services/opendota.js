
// this is mostly the same as the `helpers/opendota`, 
// except not isomorphic and whatnots
const fetch = require("node-fetch");
const openDotaAPI = "https://api.opendota.com/api/";
const openDota = (action) => fetch(`${openDotaAPI}${action}`)

const getHeroes = () =>  {
  return openDota("heroStats")
    .then(response => response.json())
    .catch(err => console.log(err))
}


module.exports = {
  endpoint: openDotaAPI,
  api: openDota,
  getHeroes,
}