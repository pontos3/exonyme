import React from 'react';
import { FORM_MOD } from './AppConst'
import CountryForm from './CountryForm'
//import CountryList from './CountryList'
import CountryMap from './CountryMap'
//import CountryTimeLine from './CountryTimeLine'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'


class CountryPage extends React.Component {

    handleReloadCountry = (event) => {
        // axios.get('http://localhost:8081/countries').then((response)=>{
        //     if(response.status === 200) {
        //         console.log(response.data);
        //     }
        //     else {
        //         console.log(response.status);
        //     }
        // }).catch((error)=>{console.log(error)});

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
          }).then((response)=>{
                console.log(response);
          }).catch((error)=>{
              console.log(error);
          })
    }

    constructor(props) {
        super(props);
        
        this.handleReloadCountry();
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col lg={10}>
                        <Row>
                            <Col>
                                <CountryForm 
                                        country={this.props.country}
                                        formMode={FORM_MOD.UPDATE} 
                                        addCountry={this.props.addCountry} 
                                        editCountry={this.props.editCountry} 
                                        match={this.props.match} 
                                        history={this.props.history} >
                                </CountryForm>
                            </Col>
                            <Col lg={3} >
                                <CountryMap 
                                    lat={this.props.country && this.props.country.latitude?this.props.country.latitude:0} 
                                    lon={this.props.country && this.props.country.longitude?this.props.country.longitude:0}>
                                </CountryMap>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div style={ {border: "solid 1px black", marginBottom: "20px", marginTop: "20px"} }></div>
            {/* <Row>
                    <CountryList countries={this.props.countries} >
                    </CountryList>
            </Row> */}
            </Container>
/*            
            <Container fluid >
                <Row>
                    <Col lg={10}>
                        <Row>
                            <Col>
                                <CountryForm>
                                </CountryForm>
                            </Col>
                            <Col lg={3} >
                                <CountryMap lat={47.2173} lon={-1.5534}>
                                </CountryMap>
                            </Col>
                        </Row>
                        <div style={ {border: "solid 1px black", marginBottom: "20px", marginTop: "20px"} }></div>
                        <Row>
                            <CountryList>
                            </CountryList>
                        </Row>
                    </Col>
                    <Col lg={2} >
                        <CountryTimeLine>
                        </CountryTimeLine>
                    </Col>
                </Row>
            </Container>
*/            
        );
    }
}

export default CountryPage;