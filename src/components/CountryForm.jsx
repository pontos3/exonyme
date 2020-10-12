import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class CountryForm extends React.Component {

    countryDefault = {
        id: "", 
        usualName: "",
        officialName: "",
        listName: "",
        inhabitant: "",
        iso2: "",
        iso3: "",
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
            <Form id={"country_form"} noValidate validated={this.state.validated} onSubmit={this.handleSubmit} autoComplete={"off"} >
                <Form.Row>
                    <Col lg={9} md={12}>
                        <Form.Group controlId="usualName">
                            <Form.Label>usualName</Form.Label>
                            <Form.Control
                                value={this.state.usualName}
                                readOnly= { !this.state.isInEditMod }
                                type="text" 
                                placeholder="France" 
                                required={true}
                                minLength="3"
                                maxLength="50"
                                aria-describedby="usualNameHelpBlock" 
                                onChange={ (event)=> {this.handleChange(event,"usualName")} }
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

                        <Form.Group controlId="officialName">
                            <Form.Label>officialName</Form.Label>
                            <Form.Control 
                                value={this.state.officialName}
                                readOnly= { !this.state.isInEditMod }
                                type="text" 
                                maxLength="255"
                                placeholder="la République française" 
                                onChange={ (event)=> {this.handleChange(event,"officialName")} } />
                        </Form.Group>
                        <Form.Group controlId="listName">
                            <Form.Label>listName</Form.Label>
                            <Form.Control 
                                value={this.state.listName}
                                readOnly= { !this.state.isInEditMod }
                                type="text" 
                                placeholder="France" 
                                required
                                minLength="3"
                                maxLength="50"
                                aria-describedby="listNameHelpBlock" 
                                onChange={ (event)=> {this.handleChange(event,"listName")} }
                            />
                        </Form.Group>
                    </Col>
 
                    <Col lg={{span: 2, offset: 1}} md={2}>
                        <Form.Group controlId="iso2">
                            <Form.Label>ISO2</Form.Label>
                            <Form.Control 
                                value={this.state.iso2}
                                readOnly= { !this.state.isInEditMod }
                                type="text"
                                pattern="[a-z]{2,}"
                                placeholder="fr"
                                maxLength="2"                            
                                onChange={ (event)=> {this.handleChange(event,"iso2")} } />
                        </Form.Group>
                        <Form.Group controlId="iso3">
                            <Form.Label>ISO3</Form.Label>
                            <Form.Control 
                                value={this.state.iso3}
                                readOnly= { !this.state.isInEditMod }
                                type="text"
                                pattern="[a-zA-Z]{3,}"
                                placeholder="fra"
                                maxLength="3"
                                onChange={ (event)=> {this.handleChange(event,"iso3")} } />
                        </Form.Group>
                        <Form.Group controlId="latitude">
                            <Form.Label>latitude</Form.Label>
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
                            <Form.Label>longitude</Form.Label>
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
                            <Form.Label>observation</Form.Label>
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
