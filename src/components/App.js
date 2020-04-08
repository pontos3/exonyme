import React from 'react';
import CountryPage from './CountryPage';
import AppHeader from './AppHeader';

import "./App.css";

const Footer = ({version}) => (<footer>version: {version}</footer>);

const AppStyle = {
    paddingTop: '60px'
}

class App extends React.Component {

    render(){
        const {title,version} = this.props;

        return (
            <div style={AppStyle}>
                <AppHeader title={title}></AppHeader>
                <main>
                    <CountryPage></CountryPage>
                </main>
                <Footer version={version}></Footer>
            </div>
        );
    }
} 

export default App;