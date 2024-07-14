// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4nr3RH9GtNmhgaVvclcrUHTUD3b8SuuM",
  authDomain: "ztm-react-738a7.firebaseapp.com",
  projectId: "ztm-react-738a7",
  storageBucket: "ztm-react-738a7.appspot.com",
  messagingSenderId: "321415472107",
  appId: "1:321415472107:web:2ece9d760654b91b5bafae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)