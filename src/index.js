import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
        <App store={store}/>
    </BrowserRouter>, document.getElementById('root'));


serviceWorker.unregister();
