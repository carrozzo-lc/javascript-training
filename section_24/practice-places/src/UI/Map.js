import 'ol/css';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import VectorSource from 'ol/source/Vector';
import {Vector as VectorLayer} from 'ol/layer';
import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import {fromLonLat} from 'ol/proj';

export class Maps {
  constructor(coords) {
    //this.coordinates = coords;
    this.render(coords);
  }

  render(coordinates) {
    document.getElementById('map').innerHTML = ''; // clear the <p> in the <div id="map">

    const marker = new Feature({
      geometry: new Point(fromLonLat([coordinates.lgt, coordinates.lat])),
    });

    const vectorSource = new VectorSource({
      features: [marker],
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    const map = new Map({
      layers: [
        new TileLayer({source: new OSM()}),
        vectorLayer
      ],
      view: new View({
        center: fromLonLat([coordinates.lgt, coordinates.lat]),
        zoom: 16
      }),
      target: 'map'
    });    

  }
}