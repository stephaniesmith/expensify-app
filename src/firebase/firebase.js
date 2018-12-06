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

const onValueChange = database()
  .ref()
  .on('value', snapshot => {
    console.log(snapshot.val());
  }, err => {
    console.error(err);
  });

setTimeout(() => {
  database().ref('age').set(29);
}, 3500);

setTimeout(() => {
  database().ref().off(onValueChange);
}, 7000);

setTimeout(() => {
  database().ref('age').set(31);
}, 10500);
  
// database()
//   .ref('location/city')
//   .once('value')
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(err => {
//     console.error(err);
//   });

// database().ref().set({
//   name: 'Stephanie Smith',
//   stressLevel: 5,
//   age: 28,
//   job: {
//     title: 'Dev',
//     company: 'Google'
//   },
//   location: {
//     city: 'Salem',
//     country: 'United States'
//   }
// })
//   .then(() => {
//     console.log('Data is saved!!! ');
//   })
//   .catch(err => {
//     console.error(err);
//   });

// database().ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Portland'
// });

// database()
//   .ref()
//   .remove()
//   .then(() => {
//     console.log('Data is Removed!!! ');
//   })
//   .catch(err => {
//     console.error(err);
//   });
