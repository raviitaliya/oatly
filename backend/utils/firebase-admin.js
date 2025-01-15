import admin from "firebase-admin";

import fs from 'fs';

const serviceAccount = JSON.parse(fs.readFileSync(new URL('../firebase-service-account.json', import.meta.url)));

// Initialize Firebase Admin SDK

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const messaging = admin.messaging();

export default messaging;
