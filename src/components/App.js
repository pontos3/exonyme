import React from 'react';
import CountryPage from './CountryPage';
import AppHeader from './AppHeader';

import "./App.css";

const Footer = ({version}) => (<footer>version: {version}</footer>);

const AppStyle = {
    paddingTop: '60px'
}

class App extends React.Component {


    state = {
        countries : []
    };

    addCountry = (country) => {
        country.id = new Date().getTime();

        this.setState({countries: [...this.state.countries, country]});
    }

    render(){
        const countries = this.state.countries;
        return (
            <div style={AppStyle}>
                <CountryPage 
                    addCountry={this.addCountry}
                    countries={countries}
                >
                </CountryPage>
            </div>
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

export default App;