import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "bootstrap-icons/font/bootstrap-icons.css";

// data
const notes = [
    {
        id: 1,
        content: 'Working with Lists',
        important: true
    },
    {
        id: 2,
        content: 'Usage of keys',
        important: false
    },
    {
        id: 3,
        content: 'Conditional Rendering',
        important: true
    },
    {
        id: 4,
        content: 'Handling Events',
        important: true
    },
    {
        id: 5,
        content: 'Props Vs State',
        important: false
    }
];

// create a variable called counter and initialize the value to 1
let counter = 1;

let refresh = () => {
    ReactDOM.createRoot(document.getElementById('root')).render(<App counter={ counter } />);
}

refresh();
counter += 1;
refresh();
counter += 1;
refresh();

// setInterval(() => {
//     refresh();
//     counter += 1;
// }, 1000);