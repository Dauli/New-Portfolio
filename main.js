// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "....",
    authDomain: "alexis-dauli.firebaseapp.com",
    databaseURL: "https://alexis-dauli.firebaseio.com",
    projectId: "alexis-dauli",
    storageBucket: "alexis-dauli.appspot.com",
    messagingSenderId: "...",
    appId: "...",
    measurementId: "G-WN88VQE09X"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Select our Form ID
const contactForm = document.querySelector('#contactForm');

let name = document.querySelector('#name');
let email = document.querySelector('#email');
let message = document.querySelector('#message');

// Lets grab on to the collection folder
const db = firebase.firestore().collection("formData");

// Listen for submit form and send message
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get value of each input
    let nameInput = name.value;
    let emailInput = email.value;
    let messageInput = message.value;

    // Accessing database collection to save data
    db.doc().set({
        name: nameInput,
        email: emailInput,
        message: messageInput
    }).then(() => {
        document.querySelector('.alert').style.display = 'block';
        setTimeout(() => {
            document.querySelector('.alert').style.display = 'none';
        }, 3000);
    }).catch(() => {
        document.querySelector('.danger').style.display = 'block';
        setTimeout(() => {
            document.querySelector('.danger').style.display = 'none';
        }, 3000);
    });

    // clear input form
    contactForm.reset();
});
