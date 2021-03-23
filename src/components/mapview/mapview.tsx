import React, { useEffect, useRef } from 'react';
import mapController from '../../controllers/mapController';

const MapView = () => {
    const mapViewEl = useRef(null);

    useEffect(() => {
        mapController.initialMap(mapViewEl);
    },[]);

    return (
        <div className="mapview-container">
            <div className="mapview" ref={mapViewEl}></div>
        </div>
    )
}

export default MapView;
