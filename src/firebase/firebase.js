import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const { database } = firebase;
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };


// database()
//   .ref('expenses')
//   .on('child_removed', snapshot => {
//     console.log(snapshot.key, snapshot.val());
//   });

// database()
//   .ref('expenses')
//   .on('child_changed', snapshot => {
//     console.log(snapshot.key, snapshot.val());
//   });

// database()
//   .ref('expenses')
//   .on('child_added', snapshot => {
//     console.log(snapshot.key, snapshot.val());
//   });


// database()
//   .ref('expenses')
//   .on('value', snapshot =>{
//     const expenses = [];

//     snapshot.forEach(child => {
//       expenses.push({
//         id: child.key,
//         ...child
//       });
//     });

//     console.log(expenses);
//   });


// database()
//   .ref('expenses')
//   .once('value')
//   .then(snapshot => {
//     const expenses = []

//     snapshot.forEach(child => {
//       expenses.push({
//         id: child.key,
//         ...child
//       });
//     });

//     console.log(expenses);
//   });


// database().ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 100,
//   createdAt: 29347923
// });

// database().ref('expenses').push({
//   description: 'Train',
//   note: '',
//   amount: 23000,
//   createdAt: 182739812
// });

// database().ref('expenses').push({
//   description: 'Food',
//   note: '',
//   amount: 1234800,
//   createdAt: 1112391287391
// });

// database().ref('notes/-LT4i_A_ottk-wn2UkAw').remove();

// database().ref('notes').push({
//   title: 'To Do',
//   body: 'Hello!'
// });

// database().ref('notes').push({
//   title: 'Another!',
//   body: 'Hello!'
// });

// const firebaseNotes = {
//   notes: {
//     sjdhflakh: {
//       title: 'First Note!',
//       body: 'This is a note'
//     }
//     askdfjlas: {
//       title: 'Another Note!',
//       body: 'This is another note'
//     }
//   }
// }



// database()
//   .ref()
//   .on('value', snapshot => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//   });



// const onValueChange = database()
//   .ref()
//   .on('value', snapshot => {
//     console.log(snapshot.val());
//   }, err => {
//     console.error(err);
//   });

// setTimeout(() => {
//   database().ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//   database().ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database().ref('age').set(31);
// }, 10500);
  
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
