import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAU1BR8bbeWbB0JDnyw9LPikbgrrjTnjcg",
    authDomain: "hack-violet-413019.firebaseapp.com",
    projectId: "hack-violet-413019",
    storageBucket: "hack-violet-413019.appspot.com",
    messagingSenderId: "161905241602",
    appId: "1:161905241602:web:9ae17132068ed9b5d6c11b",
    measurementId: "G-JM84VG10MF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
