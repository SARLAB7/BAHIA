import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

// Tu configuración de Firebase para la app web
const firebaseConfig = {
  apiKey: "AIzaSyAtYHzd4Hzj1krcFnR849Nuo-IHul84aHM",
  authDomain: "bahia-9f8e1.firebaseapp.com",
  projectId: "bahia-9f8e1",
  storageBucket: "bahia-9f8e1.firebasestorage.app",
  messagingSenderId: "453483653610",
  appId: "1:453483653610:web:729540fac06994e3172a93",
  measurementId: "G-WNGFM9R53C"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// --- LAS EXPORTACIONES CRÍTICAS QUE HACÍAN FALTA ---
export const db = getFirestore(app);
export const auth = getAuth(app);
