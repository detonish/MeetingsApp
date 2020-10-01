import Firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcAdh40x7BDa3bU7o90YNYMnidhJltnO4",
  authDomain: "vue-spas-2.firebaseapp.com",
  databaseURL: "https://vue-spas-2.firebaseio.com",
  projectId: "vue-spas-2",
  storageBucket: "vue-spas-2.appspot.com",
  messagingSenderId: "368696766106",
  appId: "1:368696766106:web:415ba032857842be74b923"
};
// Initialize Firebase

const firebaseApp = Firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
