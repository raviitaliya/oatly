import admin from "firebase-admin";
import fs from "fs";

let messaging = null;
try {
  let serviceAccount = null;
  if (process.env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON);
  } else if (process.env.FIREBASE_SERVICE_ACCOUNT_PATH && fs.existsSync(process.env.FIREBASE_SERVICE_ACCOUNT_PATH)) {
    serviceAccount = JSON.parse(fs.readFileSync(process.env.FIREBASE_SERVICE_ACCOUNT_PATH, "utf8"));
  }
  if (serviceAccount && !admin.apps.length) admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
  if (admin.apps.length) messaging = admin.messaging();
} catch (error) {
  console.warn("Firebase Admin is not configured. Notifications requiring Firebase are disabled.", error.message);
}

export default messaging;
