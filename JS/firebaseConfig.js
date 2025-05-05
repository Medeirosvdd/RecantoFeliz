// JS/firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBFXzDDW10WPlJ4k7JOqT4ANGxat49VRfk",
  authDomain: "gremio-maior-do-brasil.firebaseapp.com",
  databaseURL: "https://gremio-maior-do-brasil-default-rtdb.firebaseio.com",
  projectId: "gremio-maior-do-brasil",
  storageBucket: "gremio-maior-do-brasil.firebasestorage.app",
  messagingSenderId: "766012455620",
  appId: "1:766012455620:web:22989a304fbda704f82791",
  measurementId: "G-WBYMVWVB0K"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
