import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCr5Qczhkw7LbLPMhaaGeV9-ehLAHi2sD4",
    authDomain: "my-dashboard-f9d63.firebaseapp.com",
    databaseURL: "https://my-dashboard-f9d63.firebaseio.com",
    projectId: "my-dashboard-f9d63",
    storageBucket: "my-dashboard-f9d63.appspot.com",
    messagingSenderId: "645517698081",
    appId: "1:645517698081:web:0d6093e7d1e1509c596f60",
    measurementId: "G-RSXZP9TCBE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase