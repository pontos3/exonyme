import React from 'react';
import CountryForm from './CountryForm'
import CountryList from './CountryList'
import CountryMap from './CountryMap'
import CountryTimeLine from './CountryTimeLine'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class CountryPage extends React.Component {
    render() {
        return (
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
        );
    }
}

export default CountryPage;