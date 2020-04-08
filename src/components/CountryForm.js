import React from 'react';
import Form from 'react-bootstrap/Form'

const CountryForm = () => {
    return (
        <Form>
        <Form.Group controlId="shortLabel">
            <Form.Label>ShortLabel</Form.Label>
            <Form.Control type="text" placeholder="France" />
        </Form.Group>
        <Form.Group controlId="longLabel">
            <Form.Label>LongLabel</Form.Label>
            <Form.Control type="text" placeholder="la République française" />
        </Form.Group>
        <Form.Group controlId="inhabitant">
            <Form.Label>Inhabitant</Form.Label>
            <Form.Control type="text" placeholder="Français, -e"/>
        </Form.Group>
        <Form.Group controlId="observation">
            <Form.Label>Observation</Form.Label>
            <Form.Control as="textarea" rows="3" />
        </Form.Group>
        </Form>
    );
}

export default CountryForm;
