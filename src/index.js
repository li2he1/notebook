import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCPqzS8DMMRO_0wQqCrrvhns1o1IRKhypA",
  authDomain: "notebook-565fe.firebaseapp.com",
  projectId: "notebook-565fe",
  storageBucket: "notebook-565fe.appspot.com",
  messagingSenderId: "518222418998",
  appId: "1:518222418998:web:24b7704698b25c603c3497",
  measurementId: "G-3DJHB5QXYH"
};
// Initialize Firebase
firebase.default.initializeApp(firebaseConfig);

ReactDOM.render(
    <App />,
  document.getElementById('notebook-container')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
