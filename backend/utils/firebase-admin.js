import admin from "firebase-admin";

import serviceAccount from "../firebase-service-account.json" assert { type: "json" };

// Initialize Firebase Admin SDK

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const messaging = admin.messaging();

export default messaging;
