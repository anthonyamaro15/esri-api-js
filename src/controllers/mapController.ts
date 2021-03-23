import { RefObject } from "react";
import { loadModules } from 'esri-loader';

class MapController {
    #map?: __esri.Map;
    #mapview?: __esri.MapView;
    #featureLayer?: __esri.FeatureLayer;

    initialMap = async (domRef: RefObject<HTMLDivElement>) => {
        if(!domRef.current) {
            return
        }

        const [Map, MapView, FeatureLayer] = await loadModules(['esri/Map', 'esri/views/MapView', 'esri/layers/FeatureLayer'])

        this.#map = new Map({
            basemap: 'gray-vector'
        });

        this.#mapview = new MapView({
            container: domRef.current,
            map: this.#map,
            center: [-100.33, 25.69],
            zoom: 4
        });

        this.#featureLayer =  new FeatureLayer({
            url: 'https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Chicago_Crime_Tracts/FeatureServer/0'
        });

        // add layer when mapview is loaded
        this.#mapview?.when(() => {
            if(!this.#featureLayer) return;
            this.#map?.add(this.#featureLayer);
        });
    }
}

const mapController = new MapController();

export default mapController;
