/* global fetch */

const openDotaAPI = "https://api.opendota.com/api/";
const openDota = (action) => fetch(`${openDotaAPI}${action}`)

const getHeroes = () =>  {
  return openDota("heroStats")
    .then(response => response.json())
    .catch(err => console.log(err))
}


export default {
  getHeroes,
}