importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js");

const firebaseConfig = {
  apiKey: "AIzaSyDBc8LTaBkEJfOmwkHj66trC3mWGLnVrDU",
  authDomain: "oatly-3771e.firebaseapp.com", 
  projectId: "oatly-3771e",
  storageBucket: "oatly-3771e.firebasestorage.app",
  messagingSenderId: "85464735488",
  appId: "1:85464735488:web:eadec637190319cc2e5de5",
  measurementId: "G-PMYRZQ6GHC"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message:", payload);
  const notificationTitle = payload.notification?.title ;
  const notificationOptions = {
    body: payload.notification?.body ,
    icon: payload.notification?.image
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});