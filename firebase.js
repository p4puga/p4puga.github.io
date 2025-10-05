
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDgc1Vn0WDPT9a6xZr_t_Qni8NdiH5EejE",
    authDomain: "sigmagame-9858a.firebaseapp.com",
    projectId: "sigmagame-9858a",
    storageBucket: "sigmagame-9858a.firebasestorage.app",
    messagingSenderId: "305980813593",
    appId: "1:305980813593:web:ed25bd118d2b29ba595588",
    measurementId: "G-PN90HB388K"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);