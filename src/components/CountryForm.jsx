import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FORM_MOD } from './AppConst';
import { useLocation } from "react-router-dom";

class CountryForm extends React.Component {

    countryDefault = {
        id: "", 
        shortLabel: "",
        longLabel: "",
        listLabel: "",
        inhabitant: "",
        codeIso2: "",
        codeIso3: "",
        latitude: 0,
        longitude: 0,
        observation: "",
    };

    
    state = {
        ...(this.props.country?this.props.country:this.countryDefault),
        validated: false,
        mod: this.props.history.location.state.mod
    };

    handleSubmit = (event) => {
        const form = event.currentTarget;

        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity() === false) {
            this.setState({validated: true});
        }
        else {
            this.props.addCountry(this.state)
            return this.props.history.push('/countries');
            /* this.setState( {...this.countryDefault, validate: false } )
            console.log(this.state); */
        }
    };

    render () {
        console.log(this.props);

        console.log(this.props.history.location.state.mod);

        return (
            <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit} disabled={true} >
                <Form.Row>
                    <Col lg={9} md={12}>
                        <Form.Group controlId="shortLabel">
                            <Form.Label>ShortLabel</Form.Label>
                            <Form.Control
                                value={this.state.shortLabel}
                                readOnly= { this.props.formMode === FORM_MOD.REQUEST }
                                type="text" 
                                placeholder="France" 
                                required
                                minLength="3"
                                maxLength="50"
                                aria-describedby="ShortLabelHelpBlock" 
                                onChange={ (event)=>{this.setState({shortLabel: event.target.value})} }
                            />
                        </Form.Group>
                        <Form.Group controlId="inhabitant">
                            <Form.Label>Inhabitant</Form.Label>
                            <Form.Control 
                                value={this.state.inhabitant}
                                readOnly= { this.props.formMode === FORM_MOD.REQUEST?true:false }
                                type="text"
                                maxLength="255"
                                placeholder="Français, -e"
                                onChange={ (event) => {this.setState({inhabitant: event.target.value})}} />
                        </Form.Group>

                        <Form.Group controlId="longLabel">
                            <Form.Label>LongLabel</Form.Label>
                            <Form.Control 
                                value={this.state.longLabel}
                                readOnly= { this.props.formMode === FORM_MOD.REQUEST?true:false }                    
                                type="text" 
                                maxLength="255"
                                placeholder="la République française" 
                                onChange={ (event) => {this.setState({longLabel: event.target.value})} } />
                        </Form.Group>
                        <Form.Group controlId="listLabel">
                            <Form.Label>ListLabel</Form.Label>
                            <Form.Control 
                                value={this.state.listLabel}
                                readOnly= { this.props.formMode === FORM_MOD.REQUEST?true:false }
                                type="text" 
                                placeholder="France" 
                                required
                                minLength="3"
                                maxLength="50"
                                aria-describedby="ListLabelHelpBlock" 
                                onChange={ (event)=>{this.setState({listLabel: event.target.value})} }
                            />
                        </Form.Group>
                    </Col>
 
                    <Col lg={{span: 2, offset: 1}} md={2}>
                        <Form.Group controlId="codeIso2">
                            <Form.Label>ISO2</Form.Label>
                            <Form.Control 
                                value={this.state.codeIso2}
                                readOnly= { this.props.formMode === FORM_MOD.REQUEST?true:false }                        
                                type="text"
                                pattern="[a-zA-Z]{2,}"
                                placeholder="fr"
                                maxLength="2"                            
                                onChange={ (event) => {this.setState({codeIso2: event.target.value})}} />
                        </Form.Group>
                        <Form.Group controlId="codeIso3">
                            <Form.Label>ISO3</Form.Label>
                            <Form.Control 
                                value={this.state.codeIso3}
                                readOnly= { this.props.formMode === FORM_MOD.REQUEST?true:false }                        
                                type="text"
                                pattern="[a-zA-Z]{3,}"
                                placeholder="fra"
                                maxLength="3"
                                onChange={ (event) => {this.setState({codeIso3: event.target.value})}} />
                        </Form.Group>
                        <Form.Group controlId="latitude">
                            <Form.Label>Latitude</Form.Label>
                            <Form.Control 
                                value={this.state.latitude}
                                readOnly= { this.props.formMode === FORM_MOD.REQUEST?true:false }                        
                                type="number"
                                min="-180"
                                max="+180"
                                step="0.000001"
                                placeholder="46.227638"
                                onChange={ (event) => {this.setState({latitude: event.target.value})}} />
                        </Form.Group>
                        <Form.Group controlId="longitude">
                            <Form.Label>Longitude</Form.Label>
                            <Form.Control 
                                value={this.state.longitude}
                                readOnly= { this.props.formMode === FORM_MOD.REQUEST?true:false }                        
                                type="number"
                                min="-180"
                                max="+180"
                                step="0.000001"
                                placeholder="2.213749"
                                onChange={ (event) => {this.setState({longitude: event.target.value})}} />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Group controlId="observation">
                    <Form.Label>Observation</Form.Label>
                    <Form.Control 
                        value={this.state.observation}
                        readOnly= { this.props.formMode === FORM_MOD.REQUEST?true:false }                    
                        as="textarea"
                        rows="4"
                        maxLength="3000"
                        onChange={ (event) => {this.setState({observation: event.target.value})}} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={ this.props.formMode === FORM_MOD.REQUEST?true:false }>
                    Submit
                </Button>
            </Form>
        );
    };
}

export default CountryForm;
