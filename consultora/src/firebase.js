import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getDatabase} from 'firebase/database'
import {getAuth} from 'firebase/auth'
import { getStorage } from "firebase/storage";
import { getMessaging } from "firebase/messaging/sw";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOc9WUCR4REswejK1IAmBd3dCPXuy2L-Y",
  authDomain: "consultora-a681e.firebaseapp.com",
  projectId: "consultora-a681e",
  storageBucket: "consultora-a681e.appspot.com",
  messagingSenderId: "130275470151",
  appId: "1:130275470151:web:07556fc552a056ed427a62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db= getFirestore(app)
const auth = getAuth(app)
const rtdb = getDatabase(app)
const storage = getStorage(app)
const mensage = getMessaging(app)

//const marcadetiempo = firebase.firestore.fieldValue.serverTimestamp

export { db,auth,rtdb,storage,mensage}
