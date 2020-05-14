import React from 'react';
import Table from 'react-bootstrap/Table';
//import Col from 'react-bootstrap/Col';
//import Pagination from 'react-bootstrap/Pagination';
import { Link } from 'react-router-dom';
import CountryItem from './CountryItem';
import { useTranslation } from 'react-i18next';

const CountryList = (props) => {
    const { t } = useTranslation();
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th><Link to={{ pathname: `/countries/-1`, state: { mod: 'EDIT' } }} className='btn btn-primary float-left float-right' > + </Link> </th>
                    <th>{t('country.list.id')}</th>
                    <th>{t('country.list.shortLabel')}</th>
                    <th>{t('country.list.longLabel')}</th>
                    <th>{t('country.list.listLabel')}</th>
                    <th>{t('country.list.iso2')}</th>
                    <th>{t('country.list.iso3')}</th>
                    <th>{t('country.list.longitude')}</th>
                    <th>{t('country.list.latitude')}</th>
                    <th>{t('country.list.observation')}</th>
                </tr>
            </thead>
            <tbody>
                { 
                    props.countries.map((country) => { return (<CountryItem country={country} key={country.id} deleteCountry={props.deleteCountry} />); } ) 
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