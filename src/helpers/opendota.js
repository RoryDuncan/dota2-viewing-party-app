/* global fetch */

const openDotaAPI = "https://api.opendota.com/api/";
const openDota = (action) => fetch(`${openDotaAPI}${action}`)

const getHeroes = () =>  {
  console.warn("opendata.getHeroes is DEPRECATED. use dotadata.js instead")
  return openDota("heroStats")
    .then(response => response.json())
    .catch(err => console.log(err))
}


export default {
  getHeroes,
}