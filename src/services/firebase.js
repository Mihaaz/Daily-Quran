
import { FirebaseApp, getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyA3C_N1Baq3AFfbfcqktAh4xpn7cEsg4hI",
    authDomain: "daily-quran-6e74d.firebaseapp.com",
    projectId: "daily-quran-6e74d",
    storageBucket: "daily-quran-6e74d.appspot.com",
    messagingSenderId: "450870358610",
    appId: "1:450870358610:web:adff992d9c1ccdd80ea58b",
    measurementId: "G-RK1VJREFZR"
}

let firebaseApp: FirebaseApp

if (!getApps.length) {
    firebaseApp = initializeApp(firebaseConfig)
}

const fireStore = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)
const storage = getStorage(firebaseApp)

export { fireStore, auth, storage }