importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js");

const firebaseConfig = {
    apiKey: "AIzaSyDH7yEvsKQF9zXGXgPpG5pdYGi0OOHPnHI",
    authDomain: "netcoredemo-baeb7.firebaseapp.com",
    projectId: "netcoredemo-baeb7",
    storageBucket: "netcoredemo-baeb7.appspot.com",
    messagingSenderId: "818088670354",
    appId: "1:818088670354:web:247c94e25c9ea7cb88e24b",
    measurementId: "G-S8LDSZRQNH"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload,
    );
    // Customize notification here
    const notificationTitle = "Notification";
    const notificationOptions = {
        body: "Please check, you have notification.",
    };

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions,
    );
});