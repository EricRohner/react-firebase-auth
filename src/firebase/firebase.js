import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBERJliCpaLN9ISU6fg6Cd7FxY20sriPwI",
    authDomain: "fir-test-1653a.firebaseapp.com",
    databaseURL: "https://fir-test-1653a.firebaseio.com",
    projectId: "fir-test-1653a",
    storageBucket: "fir-test-1653a.appspot.com",
    messagingSenderId: "615265698397"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
    auth,
};