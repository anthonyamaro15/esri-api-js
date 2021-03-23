import React, { useEffect, useRef } from 'react';
import mapController from '../../controllers/mapController';
import ControlPanel from './control-panel';

const MapView = () => {
    const mapViewEl = useRef(null);

    useEffect(() => {
        mapController.initialMap(mapViewEl);
    },[]);

    return (
        <div className="mapview-container">
            <div className="mapview" ref={mapViewEl} />
            <ControlPanel />
        </div>
    )
}

export default MapView;
