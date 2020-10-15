import React , { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import './i18n';

import 'bootstrap/dist/css/bootstrap.min.css';

// const countriesReducer = (state = [], action)=>{
//     switch (action.type) {
//         case 'LIST_COUNTRIES':
//             const initialState = [...action.payload];
//             return initialState;
//         case 'ADD_COUNTRY':
//             action.payload.id = new Date().getTime();
//             const newState = [...state, action.payload];
//             return newState;
//         case 'EDIT_COUNTRY':
//             return state.map(country => {
//                 if (country.id !== action.payload.id ) {
//                     return country;
//                 }
//                 return action.payload;
//             })
//         case 'DELETE_COUNTRY':
//             return state.filter(country => country.id !== action.payload);
//         default: 
//             return state ;
//     }

// };

// const store = createStore(
//     combineReducers({countries: countriesReducer}),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     );


const countriesReducer = (state = {countries: [], page: {}}, action)=>{

    switch (action.type) {
        case 'LIST_COUNTRIES':
            const initialState = {countries: [...action.payload.countries], page: {...action.payload.page}};
            return initialState;
        case 'ADD_COUNTRY':
            action.payload.id = new Date().getTime();
            const newState = {countries: [...state.countries, action.payload], page: {...state.page}};
            return newState;
        case 'EDIT_COUNTRY':
            return { 
                countries: state.map(country => {
                    if (country.id !== action.payload.id ) {
                        return country;
                    }
                    return action.payload;
                }),
                page: {...state.page}
            }
        case 'DELETE_COUNTRY':
            return { countries: state.filter(country => country.id !== action.payload), page: {...state.page} };
        default: 
            return state ;
    }

};

const store = createStore(
    combineReducers({paginateCountries: countriesReducer}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

window.store = store;

ReactDOM.render(
    <Provider store={store}> 
        <Suspense fallback={null}>
            <App version="1.0.0" /> 
        </Suspense>
    </Provider>, document.getElementById('root'));