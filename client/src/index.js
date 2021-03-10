// PACKAGES
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// MODULES
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './store/initial-state.json';
import storeFactory from './store';
import defaultLanguage from './containers/IntlProvider/defaults';
import userController from './controllers/userController';
// STYLES
import './index.css';

// Recover the login state if the session cookie still exists
let loginState = userController.recover(state);
// Set default application language using browser's language
loginState.applicationLanguage = defaultLanguage;

var store = storeFactory(loginState);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
