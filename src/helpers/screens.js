
import firebase from "helpers/firebase";

const db = firebase.database();
const screensRef = db.ref("screens");


const add = (data) => {
  const ref = screensRef.push();
  return ref.set(data)
};


const remove = (screenRef) => {
  return screensRef.ref(screenRef).remove();
  
  // todo
  
};

const update = (screenRef, data) => {
  return screensRef.ref(screenRef).update(data);
};

export default {
  add,
  remove,
  update,
}