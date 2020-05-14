import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

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
        isInEditMod: (this.props.history.location.state? this.props.history.location.state.mod === "EDIT": false)
    };

    handleEdit = (event) => {
        //event.preventDefault();
        //event.stopPropagation();
        this.setState({isInEditMod: true});
    }

    handleSubmit = (event) => {
        const form = event.currentTarget;

        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity() === false) {
            this.setState({validated: true});
        }
        else {
            if (this.state.id === "") {
                this.props.addCountry(this.state);
            } else {
                this.props.editCountry(this.state);
            }

            return this.props.history.push('/countries');
        }
    };

    handleChange = (event, fieldName )=> {
        this.setState({[fieldName]: event.target.value});
    }

    render () {
        return (
            <Form id={"country_form"} noValidate validated={this.state.validated} onSubmit={this.handleSubmit} autocomplete={"off"} >
                <Form.Row>
                    <Col lg={9} md={12}>
                        <Form.Group controlId="shortLabel">
                            <Form.Label>ShortLabel</Form.Label>
                            <Form.Control
                                value={this.state.shortLabel}
                                readOnly= { !this.state.isInEditMod }
                                type="text" 
                                placeholder="France" 
                                required
                                minLength="3"
                                maxLength="50"
                                aria-describedby="ShortLabelHelpBlock" 
                                onChange={ (event)=> {this.handleChange(event,"shortLabel")} }
                            />
                        </Form.Group>
                        <Form.Group controlId="inhabitant">
                            <Form.Label>Inhabitant</Form.Label>
                            <Form.Control 
                                value={this.state.inhabitant}
                                readOnly= { !this.state.isInEditMod }
                                type="text"
                                maxLength="255"
                                placeholder="Français, -e"
                                onChange={ (event)=> {this.handleChange(event,"inhabitant")} } />
                        </Form.Group>

                        <Form.Group controlId="longLabel">
                            <Form.Label>LongLabel</Form.Label>
                            <Form.Control 
                                value={this.state.longLabel}
                                readOnly= { !this.state.isInEditMod }
                                type="text" 
                                maxLength="255"
                                placeholder="la République française" 
                                onChange={ (event)=> {this.handleChange(event,"longLabel")} } />
                        </Form.Group>
                        <Form.Group controlId="listLabel">
                            <Form.Label>ListLabel</Form.Label>
                            <Form.Control 
                                value={this.state.listLabel}
                                readOnly= { !this.state.isInEditMod }
                                type="text" 
                                placeholder="France" 
                                required
                                minLength="3"
                                maxLength="50"
                                aria-describedby="ListLabelHelpBlock" 
                                onChange={ (event)=> {this.handleChange(event,"listLabel")} }
                            />
                        </Form.Group>
                    </Col>
 
                    <Col lg={{span: 2, offset: 1}} md={2}>
                        <Form.Group controlId="codeIso2">
                            <Form.Label>ISO2</Form.Label>
                            <Form.Control 
                                value={this.state.codeIso2}
                                readOnly= { !this.state.isInEditMod }
                                type="text"
                                pattern="[a-z]{2,}"
                                placeholder="fr"
                                maxLength="2"                            
                                onChange={ (event)=> {this.handleChange(event,"codeIso2")} } />
                        </Form.Group>
                        <Form.Group controlId="codeIso3">
                            <Form.Label>ISO3</Form.Label>
                            <Form.Control 
                                value={this.state.codeIso3}
                                readOnly= { !this.state.isInEditMod }
                                type="text"
                                pattern="[a-zA-Z]{3,}"
                                placeholder="fra"
                                maxLength="3"
                                onChange={ (event)=> {this.handleChange(event,"codeIso3")} } />
                        </Form.Group>
                        <Form.Group controlId="latitude">
                            <Form.Label>Latitude</Form.Label>
                            <Form.Control 
                                value={this.state.latitude}
                                readOnly= { !this.state.isInEditMod }
                                type="number"
                                min="-180"
                                max="+180"
                                step="0.000001"
                                placeholder="46.227638"
                                onChange={ (event)=> {this.handleChange(event,"latitude")} } />
                        </Form.Group>
                        <Form.Group controlId="longitude">
                            <Form.Label>Longitude</Form.Label>
                            <Form.Control 
                                value={this.state.longitude}
                                readOnly= { !this.state.isInEditMod }
                                type="number"
                                min="-180"
                                max="+180"
                                step="0.000001"
                                placeholder="2.213749"
                                onChange={ (event)=> {this.handleChange(event,"longitude")} } />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row >
                    <Col lg={12}>
                        <Form.Group controlId="observation" >
                            <Form.Label>Observation</Form.Label>
                            <Form.Control 
                                value={this.state.observation}
                                readOnly= { !this.state.isInEditMod }
                                as="textarea"
                                rows="4"
                                maxLength="3000"
                                onChange={ (event)=> {this.handleChange(event,"observation")} } />
                        </Form.Group>
                    </Col>
                </Form.Row>

        {/* { this.state.isInEditMod? */}
                        <Button variant="outline-primary" type="submit">
                            Submit
                        </Button> 

                        <Button variant="outline-secondary" type="button" onClick={this.handleEdit}  hidden={this.state.isInEditMod} disabled={this.state.isInEditMod} >
                            Edit
                        </Button> 
                    {/*}*/}
                    
                    {' '}

                    { this.state.isInEditMod? 
                        <Button variant="outline-secondary" type="button" onClick={() => {this.setState({isInEditMod: false})}} >
                            Cancel
                        </Button>
                        :
                        <Button variant="outline-Primary" type="button" onClick={() => { return this.props.history.push('/countries') }} >
                            Retour
                        </Button>
                    }{' '}
            </Form>
        );
    };
}

export default CountryForm;
