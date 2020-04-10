import React from 'react'
import { Link } from 'react-router-dom'

const CountryItem = (props)=>{

    const country = props.country;

    return(
        <tr key={country.id} >
            <td>
                <Link to={{ pathname: `/countries/${country.id}`, state: { mod: 'READ' } }} className='btn btn-outline-success m-1' > Read</Link> 
                <Link to={{ pathname: `/countries/${country.id}`, state: { mod: 'EDIT' } }} className='btn btn-outline-primary m-1' > Edit</Link> 
                <Link to={{ pathname: `/countries/${country.id}`, state: { mod: 'DELETE' } }} className='btn btn-outline-danger m-1' > Delete</Link> 
                <Link to={{ pathname: `/countries/`, state: { mod: 'ADD' } }} className='btn btn-outline-primary m-1' > ADD</Link> 
            </td>
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
    )
}

export default CountryItem