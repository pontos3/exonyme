import React , { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';
//import jsonDataCountry from './data/countryListTest.json';
import './i18n';

import 'bootstrap/dist/css/bootstrap.min.css';

//const countriesData = JSON.parse(JSON.stringify(jsonDataCountry));

const countriesReducer = (state = [], action)=>{
    switch (action.type) {
        case 'LIST_COUNTRIES':
            const initialState = [...action.payload];
            return initialState;
        case 'ADD_COUNTRY':
            action.payload.id = new Date().getTime();
            const newState = [...state, action.payload];
            return newState;
        case 'EDIT_COUNTRY':
            return state.map(country => {
                if (country.id !== action.payload.id ) {
                    return country;
                }
                return action.payload;
            })
        case 'DELETE_COUNTRY':
            return state.filter(country => country.id !== action.payload);
        default: 
            return state ;
    }

};

const store = createStore(
    combineReducers({countries: countriesReducer}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

window.store = store;

ReactDOM.render(
    <Provider store={store}> 
        <Suspense fallback={null}>
            <App version="1.0.0" /> 
        </Suspense>
    </Provider>, document.getElementById('root'));