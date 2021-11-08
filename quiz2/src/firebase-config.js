const firebaseConfig = {
    "[REEMPLAZAR_CON_SU_FIREBASECONFIG]"
};

export function getFirebaseConfig(){
    if (!firebaseConfig || !firebaseConfig.apiKey){
        throw new Error("Firebase configuration error");
    } else {
        return firebaseConfig;
    }
}
