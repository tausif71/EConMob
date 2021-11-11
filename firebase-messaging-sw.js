
importScripts('https://www.gstatic.com/firebasejs/7.20.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.20.0/firebase-messaging.js');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyAk9WlTOnd335XjcAHw8B3_FYtbvHXVW4o",
      authDomain: "attendancepwav2.firebaseapp.com",
      projectId: "attendancepwav2",
      storageBucket: "attendancepwav2.appspot.com",
      messagingSenderId: "1004105438817",
      appId: "1:1004105438817:web:6d5513156f909d547dfc20",
      measurementId: "G-B2PMKBGD5R"
  };

  const messaging = firebase.messaging();