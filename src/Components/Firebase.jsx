// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkZEVwW0OfrCZ2DyP90-InNYu58J5-nfY",
  authDomain: "productosde2da.firebaseapp.com",
  projectId: "productosde2da",
  storageBucket: "productosde2da.appspot.com",
  messagingSenderId: "1060373255893",
  appId: "1:1060373255893:web:9c51a972fccd8ef4f3f45c",
  measurementId: "G-FXBL98K551",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
