import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB362aMCZqKfuavG8wG2FSx4FTyxF_41K8",
  authDomain: "ai-lab-c3252.firebaseapp.com",
  projectId: "ai-lab-c3252",
  storageBucket: "ai-lab-c3252.firebasestorage.app",
  messagingSenderId: "189222196666",
  appId: "G-5EJ8LLG5RN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

