import { RefObject } from "react";
import { loadModules } from 'esri-loader';
import { renderer } from '../utils/rerenderProps';
import { popUpTemplate } from "../utils/popUpTemplates";


class MapController {
    #map?: __esri.Map;
    #mapview?: __esri.MapView;
    #featureLayer?: __esri.FeatureLayer;
    #popupTemplate?: __esri.PopupTemplate;
    #crimeLayerView?: any;

    initialMap = async (domRef: RefObject<HTMLDivElement>) => {
        if(!domRef.current) {
            return
        }

        const [Map, MapView, FeatureLayer, PopupTemplate, Expand] = await loadModules(['esri/Map', 'esri/views/MapView', 'esri/layers/FeatureLayer', 'esri/PopupTemplate', 'esri/widgets/Expand'])

        this.#map = new Map({
            basemap: 'gray-vector'
        });

        this.#mapview = new MapView({
            container: domRef.current,
            map: this.#map,
            center: [-87.66453728281347, 41.840392306471315],
            zoom: 10
        });

        this.#popupTemplate = new PopupTemplate(popUpTemplate);

        this.#featureLayer =  new FeatureLayer({
            url: 'https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Chicago_Crime_Tracts/FeatureServer/0',
            outFields: ['*'],
            renderer,
            popupTemplate: this.#popupTemplate
        });

        // add layer when mapview is loaded
        this.#mapview?.when(() => {
            if(!this.#featureLayer) return;
            this.#map?.add(this.#featureLayer);


            const crimeNodes = document.querySelectorAll(".crime-item");
            const crimesElement = document.getElementById('crimes-filter');
            if(!crimesElement) return;

            // weird that I need to pass crimeLayerView by reference for it to work
            crimesElement.addEventListener('click', (e) => this.filterByCrimeAmount(e, this.#crimeLayerView));

            this.#mapview?.whenLayerView(this.#featureLayer).then((layerView) => {
                this.#crimeLayerView = layerView;

                crimesElement.style.visibility = 'visible';
                const crimesExpand = new Expand({
                    view: this.#mapview,
                    content: crimesElement,
                    expandIconClass: 'esri-icon-filter',
                    group: 'top-left'
                });

                crimesExpand.watch('expanded', () => {
                    if(!crimesExpand.expanded) {
                        this.#crimeLayerView.filter = null;
                    }
                })

                this.#mapview?.ui.add(crimesExpand, 'top-left');
            })
        });
    }

    // casting types as any for the moment
    filterByCrimeAmount(event: any, layerView: any) {
        const selectedCrimeAmount = event.target.getAttribute("data-crime");
  
        switch (selectedCrimeAmount) {
          case "100":
            layerView.filter = {
              where: "CrimeCnt >= '" + selectedCrimeAmount + "'"
            };
            break;
          case "50-99":
            layerView.filter = {
              where: "(CrimeCnt >= 50)" + 'AND' + "(CrimeCnt <= 99)"
            };
            break;
          case "49":
            layerView.filter = {
              where: "CrimeCnt <= '" + selectedCrimeAmount + "'"
            };
        }
      }
}

const mapController = new MapController();

export default mapController;
