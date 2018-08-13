
import firebase from "helpers/firebase";

const db = firebase.database();
const screensRef = db.ref("screens");


const add = (data) => {
  const ref = screensRef.push();
  return ref.set(data)
};


const remove = (screenRefID) => {
  return db.ref(`screens/${screenRefID}`).remove();
};

const update = (screenRefID, data) => {
  return db.ref(`screens/${screenRefID}`).update(data);
};

const setApp = (screenRefID, appname) => {
  return db.ref(`screens/${screenRefID}/app`).set(appname);
}

export default {
  add,
  remove,
  update,
  setApp,
}