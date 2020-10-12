import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const CountryItem = (props)=>{

    const country = props.country;

    return(
        <tr key={country.id} >
            <td>
                <Link to={{ pathname: `/countries/${country.id}`, state: { mod: 'READ' } }} className='btn btn-outline-success m-1' > Read</Link> 
                {/*<Link to={{ pathname: `/countries/${country.id}`, state: { mod: 'DELETE' } }} className='btn btn-outline-danger m-1' > X </Link> */}
                <Button variant="outline-danger" onClick={()=>{ props.deleteCountry(country.id) }}> X </Button>
            </td>
            <td>{country.id}</td>
            <td>{country.usualName}</td>
            <td>{country.officialName}</td>
            <td>{country.listName}</td>
            <td>{country.iso2}</td>
            <td>{country.iso3}</td>
            <td>{country.longitude}</td>
            <td>{country.latitude}</td>
            <td>{country.observation}</td>
        </tr>
    )
}

export default CountryItem