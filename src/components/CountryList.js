import React from 'react';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';

const CountryList = (props) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
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
                    props.countries.map((country) => {
                         return (
                            <tr key={country.id} >
                                <td>{country.id}</td>
                                <td>{country.shortLabel}</td>
                                <td>{country.longLabel}</td>
                                <td>{country.listLabel}</td>
                                <td>{country.codeIso2}</td>
                                <td>{country.codeIso3}</td>
                                <td>{country.longitude}</td>
                                <td>{country.latitude}</td>
                                <td>{country.observation}</td>
                            </tr>
                        ); 
                    }) 
                }
            </tbody>
        </Table>
     );

     //        props.countries.map((country) => {
     //   return country.shortLabel + 'tutu' 

/*    return (


        <Col lg={12}>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </Table>
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