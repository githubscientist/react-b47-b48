import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import "bootstrap-icons/font/bootstrap-icons.css";

let initialState = {
    count: 0
}

const counterReducer = (state = initialState.count, action) => {
    switch (action.type) {
        case 'INCR':
            return state + 1;
        case 'DECR':
            return state - 1;
        case 'ZERO':
            return 0;
        default:
            return state;
    }
}

const store = createStore(counterReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
);