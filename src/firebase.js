import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnx8dEUlrVDjqcYSoGtSl3kpgYBbNF4xU",
  authDomain: "my-todo-s-52522.firebaseapp.com",
  projectId: "my-todo-s-52522",
  storageBucket: "my-todo-s-52522.appspot.com",
  messagingSenderId: "1080191448748",
  appId: "1:1080191448748:web:899729a854303f9e691109",
  measurementId: "G-6Z1RS0NCGE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
