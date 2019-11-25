import React, {useState} from 'react';
import {Map, Marker, Popup, TileLayer} from "react-leaflet";
import L from "leaflet";
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import "../styles/index.css"
import GeoSearch from "./GeoSearch";
import {ReducedBieHiringStation} from "../@types/Biceater";

interface MapProps {
    position?: [number, number];
    allStations: ReducedBieHiringStation[];
    zoom: number;
}

export const MapComponent : React.FC<MapProps> = ({position, allStations, zoom}: MapProps) => {
    const [isMapInit, setIsMapInit] = useState<boolean>(false);
    const [map, setMap] = useState<any>();
    const saveMap = (map: any) => {
        setIsMapInit(true);
        setMap(map);
    };

    const evaluateMapCenter = () => {
        if(position) {
            return position;
        } else {
            const key = Object.keys(allStations[0])[0];
            return allStations[0][key][0].coordinates;
        }
    };

    const mapCenter = evaluateMapCenter();

    // {isMapInit && <Routing map={map} fromCoordinates={position} toCoordinates={position2}/>}
    return (
      <>
          <Map center={mapCenter} zoom={zoom} id="mapid" ref={saveMap}>
              <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              />
              <GeoSearch map={map} />
              {position && <Marker position={position} icon={L.icon({
                  iconUrl: require('../assets/location-icon.png'),
                  iconRetinaUrl: require('../assets/location-icon.png'),
                  shadowUrl: iconShadow,
                  iconAnchor: [20, 40],
                  popupAnchor: [0, -35],
                  iconSize: [40, 40],
                  shadowSize: [29, 40],
                  shadowAnchor: [7, 40],
              })}>
                  <Popup>Usuario</Popup>
              </Marker>}
              {allStations.map((station) => {
                  const key = Object.keys(station)[0];
                  return <Marker key={key} position={station[key][0].coordinates}>
                      <Popup>Estacion de {station[key][1].streetAddress}</Popup>
                  </Marker>
              })}
          </Map>
      </>
  )
};