import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import noteReducer from './reducers/noteReducer.jsx';
import filterReducer from './reducers/filterReducer.jsx';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

const reducer = combineReducers({
    notes: noteReducer,
    filter: filterReducer
})

const store = createStore(reducer);

console.log(store.getState());

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
);