import React, {useState} from 'react';
import {Map, Marker, Popup, TileLayer} from "react-leaflet";
import Routing from "./RoutingMachine";
import "../styles/index.css"
import GeoSearch from "./GeoSearch";
import {ReducedBieHiringStation} from "../@types/Biceater";

interface MapProps {
    position?: [number, number];
    allStations: ReducedBieHiringStation[];
}

export const MapComponent : React.FC<MapProps> = ({position, allStations}: MapProps) => {
    const [isMapInit, setIsMapInit] = useState<boolean>(false);
    const [map, setMap] = useState<any>();
    const saveMap = (map: any) => {
        setIsMapInit(true);
        setMap(map);
    };

    // {isMapInit && <Routing map={map} fromCoordinates={position} toCoordinates={position2}/>}
    return (
      <>
          <Map center={position} zoom={13} id="mapid" ref={saveMap}>
              <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              />
              <GeoSearch map={map} />
              {position && <Marker position={position}>
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