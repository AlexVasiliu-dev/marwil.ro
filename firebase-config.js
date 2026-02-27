// =========================================================
// FIREBASE CONFIGURATION
// 1. Go to https://console.firebase.google.com/
// 2. Create a new project
// 3. Add a Web App and paste your config values below
// 4. Enable Realtime Database (start in test mode)
// 5. Enable Storage (start in test mode)
// =========================================================
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Admin password — change this before going live!
const ADMIN_PASSWORD = 'Rubeus2025%';

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const storage = firebase.storage();
