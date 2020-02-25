import * as L from "leaflet";
import pghBelts from "../assets/data/pghbelts.json";

let map;

let dark, light, aerial;

let CURRENT_BASEMAP;


const createMap = () => {
    map = L.map("map", {
        zoomControl: false
    }).setView([40.440624, -79.995888], 10);
    _createBaseMapLayers();
    _createBeltLayer();
    map.addLayer(dark);
    CURRENT_BASEMAP = { type: "dark", layer: dark };
};

const getMap = () => {
    return map;
};

const _createBaseMapLayers = () => {
    dark = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
    });
    light = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
    });
    aerial = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: '&copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });
};

const _createBeltLayer = () => {
    let layer = L.geoJSON(pghBelts, {
        style: function (feature) {
            return {
                color: feature.properties.stroke,
                opacity: feature.properties.strokeOpacity,
                weight: feature.properties.strokeWidth
            };
        }
    });
    layer.addTo(map);
};

const getCurrentBaseMap = () => {
    return CURRENT_BASEMAP.type;
};

const switchBaseMap = (aKey) => {
    map.removeLayer(CURRENT_BASEMAP.layer);
    if (aKey === "light") {
        CURRENT_BASEMAP = { type: aKey, layer: light };
        map.addLayer(light);
    }
    else if (aKey === "dark") {
        CURRENT_BASEMAP = { type: aKey, layer: dark };
        map.addLayer(dark);
    }
    else if (aKey === "aerial") {
        CURRENT_BASEMAP = { type: aKey, layer: aerial };
        map.addLayer(aerial);
    }
};

const zoomIn = () => {
    map.zoomIn();
}
const zoomOut = () => {
    map.zoomOut();
}

const zoomTo = (aPoint) => {
    map.flyTo([aPoint.center[1], aPoint.center[0]], 18);
}

export default {
    createMap,
    getMap,
    getCurrentBaseMap,
    switchBaseMap,
    zoomIn,
    zoomOut,
    zoomTo
};