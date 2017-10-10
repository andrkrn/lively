import * as firebase from 'firebase';
import sectionModel from './models/section';
import todoModel from './models/todo';

let database;

export const init = () => {
  let config = {
    apiKey: "AIzaSyDMYDtTzTlnhpOVtSBuknM7hOJs5NY55LQ",
    authDomain: "lively-9d6fd.firebaseapp.com",
    databaseURL: "https://lively-9d6fd.firebaseio.com",
    projectId: "lively-9d6fd",
    storageBucket: "lively-9d6fd.appspot.com",
    messagingSenderId: "744983381167"
  };

  firebase.initializeApp(config);

  database = firebase.database();
}

export const getDataFromPath = (path) => {
  return database.ref(path).once('value');
}

export const addSection = (name) => {
  let key = database.ref('/sections/').push().key;
  let model = sectionModel(key, name, firebase.database.ServerValue.TIMESTAMP);

  return database.ref('/sections/' + key).set(model);
}

export const addTodoItem = (id, name) => {
  return new Promise((resolve, reject) => {
    database.ref(`/sections/${ id }`).once('value').then((todo) => {
      let todos = todo.val().todos || [];
      let key = database.ref(`/sections/${ id }`).push().key
      let model = todoModel(key, name, firebase.database.ServerValue.TIMESTAMP);

      todos.push(model);
      database.ref(`/sections/${ id }/todos`).set(todos)
        .then((res) => { resolve(res) })
        .catch((err) => { reject(err) })
    });
  });
}
