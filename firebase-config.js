// Firebase Configuration (CDN compat mode)
// NOTE: databaseURL is required for Realtime Database.
// Verify yours in Firebase Console > Realtime Database > Data tab (the URL shown there).
const firebaseConfig = {
    apiKey: "AIzaSyAlhzT5nqJ9WSlT1n5A5vBuWT1_XKV1E98",
    authDomain: "marwin-rubeus.firebaseapp.com",
    databaseURL: "https://marwin-rubeus-default-rtdb.firebaseio.com",
    projectId: "marwin-rubeus",
    storageBucket: "marwin-rubeus.firebasestorage.app",
    messagingSenderId: "127580569104",
    appId: "1:127580569104:web:d1f25e97d0cf66c7c69495",
    measurementId: "G-7BBTRXLJRL"
};

// Admin password
const ADMIN_PASSWORD = 'Rubeus2025%';

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const storage = firebase.storage();
