import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import "bootstrap-icons/font/bootstrap-icons.css";

// define the reducer function
// initial state and action
// return : new State
const counterReducer = (state = 0, action) => {
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

// create a new store
const store = createStore(counterReducer);

// subscribe method is called whenever we dispatch an action
store.subscribe(() => {
    const storeNow = store.getState();
    console.log(storeNow);
})

store.dispatch({ type: 'INCR' });
store.dispatch({ type: 'INCR' });
store.dispatch({ type: 'DECR' });
store.dispatch({ type: 'INCR' });
store.dispatch({ type: 'INCR' });
store.dispatch({ type: 'ZERO' });

ReactDOM.createRoot(document.getElementById('root')).render(<App />);