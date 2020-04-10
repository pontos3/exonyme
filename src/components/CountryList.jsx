import React from 'react';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';
import CountryItem from './CountryItem';

const CountryList = (props) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Action</th>
                    <th>countryId</th>
                    <th>shortLabel</th>
                    <th>longLabel</th>
                    <th>listLabel</th>
                    <th>iso2</th>
                    <th>iso3</th>
                    <th>longitude</th>
                    <th>latitue</th>
                    <th>observation</th>
                </tr>
            </thead>
            <tbody>
                { 
                    props.countries.map((country) => { return (<CountryItem country={country} key={country.id} />); } ) 
                }
            </tbody>
        </Table>
     );

/*    return (

            <Pagination size={'sm'} >
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />
            
                <Pagination.Item active>{12}</Pagination.Item>
            
                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        </Col>
  
    ); */
}

export default CountryList;