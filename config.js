import * as firebase from 'firebase'

require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBNlbbgDjfe-8S3-PP5cPsCcEU1a_kEZPA",
    authDomain: "the-library-app-10ac8.firebaseapp.com",
    databaseURL: "https://the-library-app-10ac8.firebaseio.com",
    projectId: "the-library-app-10ac8",
    storageBucket: "the-library-app-10ac8.appspot.com",
    messagingSenderId: "1016406305311",
    appId: "1:1016406305311:web:5a9dcc84b75302d8ffc32a"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()
  