import React from 'react';
import { connect } from 'react-redux'
import CountryPage from './CountryPage';
import CountryList from './CountryList';
import AppHeader from './AppHeader';
import Contact from './Contact';
import About from './About';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import CountryForm from './CountryForm'

import "./App.css";
import axios from 'axios';

const Footer = ({ version }) => (<footer>version: {version}</footer>);

const AppStyle = {
    paddingTop: '60px'
}

class App extends React.Component {

    render() {
        return (
            <div style={AppStyle}>
                <Router>
                    <AppHeader title={"test"} loadCountries={this.props.loadCountries} />

                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route 
                        exact path="/countries" 
                        render={()=>(<CountryList  deleteCountry={this.props.deleteCountry} countries={this.props.countries} 
                            loadCountries={this.props.loadCountries}
                        />) } 
                    />
                    <Route
                        path="/countries/:id"
                        render={({ history, match }) => (<CountryPage
                            history={history}
                            match={match}
                            addCountry={this.props.addCountry}
                            editCountry={this.props.editCountry}
                            country={this.props.countries.find(country => country.id === parseInt(match.params.id, 10)) }
                        />
                        )
                        } />
                    <Footer />
                </Router>
            </div>
            /*
            <div style={AppStyle}>
                <CountryPage 
                    addCountry={this.props.addCountry}
                    countries={countries}
                >
                </CountryPage>
            </div>
            */
            /*
            <div style={AppStyle}>
                <AppHeader title={title}></AppHeader>
                <main>
                    <CountryPage></CountryPage>
                </main>
                <Footer version={version}></Footer>
            </div>
            */
        );
    }
}

const loadCountriesActionCreator = ((countries) => {
    return {
        type: 'LIST_COUNTRIES',
        payload: countries
    }
})

const addCountryActionCreator = (country => {
    return {
        type: 'ADD_COUNTRY',
        payload: country
    }
})

const editCountryActionCreator = (country => {
    return {
        type: 'EDIT_COUNTRY',
        payload: country
    }
})

const deleteCountryActionCreator = (countryId => {
    return {
        type: 'DELETE_COUNTRY',
        payload: countryId
    }
})

const mapStateToProps = (state) => {
    return {
        countries: state.countries
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadCountries: () => {
            return axios('http://localhost:8081/countryhistory/search/findAllAtDate', {
                method: 'GET',
                mode: 'no-cors',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                },
                params: {
                    currentDate:'2020-04-27T00:00:01'
                }
            }).then((response) => {
                console.log(response);
                const countries = response.data._embedded.countryhistory
                dispatch(loadCountriesActionCreator(countries));
            }).catch((error) => {
                console.log(error);
            })
        },
        addCountry: (country) => {
            dispatch(addCountryActionCreator(country));
        },
        editCountry: (country) => {
            dispatch(editCountryActionCreator(country));
        },
        deleteCountry: (countryId) => {
            dispatch(deleteCountryActionCreator(countryId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
