const firebaseConfig = {
    apiKey: "AIzaSyAcCRtJ-qhrVvNQGOTq36HXH3Q6-ZBW6PY",
    authDomain: "proyecto1-bd2cb.firebaseapp.com",
    databaseURL: "https://proyecto1-bd2cb-default-rtdb.firebaseio.com",
    projectId: "proyecto1-bd2cb",
    storageBucket: "proyecto1-bd2cb.appspot.com",
    messagingSenderId: "788444783292",
    appId: "1:788444783292:web:7f8e8ea6088f696b1526b9",
    measurementId: "G-C04FQNHQ4X"
  };
  
export function getFirebaseConfig(){
    if (!firebaseConfig || !firebaseConfig.apiKey){
        throw new Error("Firebase configuration error");
    } else {
        return firebaseConfig;
    }
}
