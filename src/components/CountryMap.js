import React from 'react';
import { Map, TileLayer } from "react-leaflet";


const CountryMap = ({lat, lon}) => {
    const DEFAULT_VIEWPORT = {
        center: [lat, lon],
        zoom: 11
      }
    return (<div className="h-100">
            <Map viewport={DEFAULT_VIEWPORT} className="h-100">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
            </Map>
    </div>);
}

export default CountryMap;