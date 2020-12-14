// *** Eventually would like to migrate this content to .env file for security purposes ***
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
    apiKey: "AIzaSyCAjvSVcC7lunWWK86LuZnJXyibgrQqFHs",
    authDomain: "following-the-travel-bug.firebaseapp.com",
    databaseURL: "https://following-the-travel-bug.firebaseio.com",
    projectId: "following-the-travel-bug",
    storageBucket: "following-the-travel-bug.appspot.com",
    messagingSenderId: "835468731673",
    appId: "1:835468731673:web:3fc245ca37c49c6e619188",
    measurementId: "G-4JSD2CFZZ6"
};
    // Initialize Firebase
class Firebase {
    constructor() {
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();

        this.auth = firebase.auth();
        this.db = firebase.database();
    }

    //*** AUTH API ***
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

    // *** Merging Auth and DB ***
    onAuthUserListener = (next, fallback) =>
        this.auth.onAuthStateChanged(authUser => {
            if (authUser) {
                this.user(authUser.uid)
                    .once('value')
                    .then(snapshot => {
                        const dbUser = snapshot.val();

                        // default empty roles
                        if (!dbUser.roles) {
                            dbUser.roles = {};
                        }

                        // merge auth and db user
                        authUser = {
                            uid: authUser.uid,
                            email: authUser.email,
                            ...dbUser,
                        };

                        next(authUser);
                    });
            } else {
                fallback();
            }
        });

    // *** User information ***
    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');
}

    export default Firebase;
