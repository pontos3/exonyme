import React from 'react';
import { connect } from 'react-redux'
import CountryPage from './CountryPage';
import CountryList from './CountryList';
import AppHeader from './AppHeader';
import Contact from './Contact';
import About from './About';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CountryForm from './CountryForm'

import "./App.css";

const Footer = ({version}) => (<footer>version: {version}</footer>);

const AppStyle = {
    paddingTop: '60px'
}

class App extends React.Component {

    render(){
        return (
            <div style={AppStyle}>
                <Router>
                    <AppHeader title={"test"}/>

                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/countries" render={ () => ( <CountryList countries={this.props.countries}/> ) } />
                    <Route
                        path="/countries/:id" 
                        render={ ({history, match}) => ( <CountryPage 
                                history={history}
                                match={match}
                                addCountry={this.props.addCountry}
                                country={this.props.countries[match.params.id]}
                            /> 
                             )
                    } />
                    <Route
                        path="/countries/test" 
                        render={ ({history, match}) => ( <CountryForm 
                                history={history}
                                match={match}
                                addCountry={this.props.addCountry}
                                country={this.props.countries[match.params.id]}
                            /> 
                             )
                    } />
                    <Footer/>
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


const addCountryActionCreator = (country =>  {
    return {
        type: 'ADD_COUNTRY', 
        payload: country
    }
})

const mapStateToProps = (state) => {
    return {
        countries: state.countries
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        addCountry: (country) => {
            dispatch(addCountryActionCreator(country));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
