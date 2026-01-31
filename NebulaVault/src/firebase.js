import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyD3qZNjDRgtizOa1d6QX5nFxdafswuievw",
    authDomain: "nebulavault-9b71c.firebaseapp.com",
    databaseURL: "https://nebulavault-9b71c-default-rtdb.firebaseio.com/",
    projectId: "nebulavault-9b71c",
    storageBucket: "nebulavault-9b71c.firebasestorage.app",
    messagingSenderId: "978144743167",
    appId: "1:978144743167:web:1b74df1138b8b07a8006ca",
    measurementId: "G-MWLS5L0M20"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
