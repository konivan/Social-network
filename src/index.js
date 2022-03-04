import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
  { id: 1, name: "Ivan" },
  { id: 2, name: "Talala" },
  { id: 3, name: "Nikita" },
  { id: 4, name: "Krot" },
  { id: 5, name: "Chocomint" },
  { id: 6, name: "Lender" },
];


let messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How much pp?" },
  { id: 3, message: "Yo" },
  { id: 4, message: "Yo" },
  { id: 5, message: "Yo" },
  { id: 6, message: "Yo" },
];

let posts = [
  { id: 1, message: "Hi, how are you?", likesCount: "0" },
  { id: 2, message: "My first post", likesCount: "23" },
  { id: 3, message: "Blabla", likesCount: "15" },
  { id: 4, message: "Hello!", likesCount: "2" },
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs}  messages={messages} posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

