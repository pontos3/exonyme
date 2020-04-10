import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, combineReducers} from 'redux'
import { Provider } from 'react-redux'
import jsonDataCountry from './data/countryListTest.json';

import 'bootstrap/dist/css/bootstrap.min.css';

const countriesData = JSON.parse(JSON.stringify(jsonDataCountry));

const countriesReducer = (state = countriesData, action)=>{
    switch (action.type) {
        case 'ADD_COUNTRY':
            console.log('ADD_COUNTRY')
            console.log('action, action');
            action.payload.id = new Date().getTime();
            const newState = [...state, action.payload];
            return newState;
        default: 
            return state ;
    }

};

const store = createStore(
    combineReducers({countries: countriesReducer}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

window.store = store;

ReactDOM.render(<Provider store={store}><App version="1.0.0" /> </Provider>, document.getElementById('root'));