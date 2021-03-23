import { RefObject } from "react";
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';

class MapController {
    #map?: Map;
    #mapview?: MapView;

    initialMap = async (domRef: RefObject<HTMLDivElement>) => {
        if(!domRef.current) {
            return
        }

        this.#map = new Map({
            basemap: 'gray-vector'
        });

        this.#mapview = new MapView({
            container: domRef.current,
            map: this.#map,
            center: [-100.33, 25.69],
            zoom: 5
        })
    }
}

const mapController = new MapController();

export default mapController;
