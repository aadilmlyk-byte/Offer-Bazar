// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAwBFn62WfItc7fdEUxHHbmErkNDEs25gw",
  authDomain: "offer-bazzar-8462a.firebaseapp.com",
  projectId: "offer-bazzar-8462a",
  storageBucket: "offer-bazzar-8462a.firebasestorage.app",
  messagingSenderId: "779882696060",
  appId: "1:779882696060:web:0a6f3efb39218b680928f9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
