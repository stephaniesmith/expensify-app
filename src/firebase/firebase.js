import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCE-3GEsZkdPkAdDl4PHUHv5Lr0jSqGEhM',
  authDomain: 'alchemy-expensify.firebaseapp.com',
  databaseURL: 'https://alchemy-expensify.firebaseio.com',
  projectId: 'alchemy-expensify',
  storageBucket: 'alchemy-expensify.appspot.com',
  messagingSenderId: '614558370242'
};

firebase.initializeApp(config);

const { database } = firebase;

database().ref().set({
  name: 'Stephanie Smith',
  stressLevel: 5,
  age: 28,
  job: {
    title: 'Dev',
    company: 'Google'
  },
  location: {
    city: 'Salem',
    country: 'United States'
  }
})
  .then(() => {
    console.log('Data is saved!!! ');
  })
  .catch(err => {
    console.error(err);
  });

database().ref().update({
  stressLevel: 9,
  'job/company': 'Amazon',
  'location/city': 'Portland'
});

// database()
//   .ref()
//   .remove()
//   .then(() => {
//     console.log('Data is Removed!!! ');
//   })
//   .catch(err => {
//     console.error(err);
//   });
