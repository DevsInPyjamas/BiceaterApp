import React, {useState} from 'react';
import {Map, Marker, Popup, TileLayer} from "react-leaflet";
import Routing from "./RoutingMachine";
import "../styles/index.css"
import {Navbar} from "./Navbar";
import {WeatherComponent} from "./WeatherComponent";
import GeoSearch from "./GeoSearch";

export const MapComponent : React.FC = () => {
    const position: [number, number] = [36.719213043469765, -4.455949667115419];
    const position2: [number, number] = [36.72116082659559, -4.464346934397554];
    const [isMapInit, setIsMapInit] = useState<boolean>(false);
    const [map, setMap] = useState<any>();
    const saveMap = (map: any) => {
        setIsMapInit(true);
        setMap(map);
    };
    return (
      <>
          <Navbar/>
          I'm trying the routing components from react.
          <Map center={position} zoom={13} id="mapid" ref={saveMap}>
              <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              />
              <GeoSearch map={map} />
              <Marker position={position}>
                  <Popup>Resi del Alejandro</Popup>
              </Marker>
              <Marker position={position2}>
                  <Popup>Resi del Parejo</Popup>
              </Marker>
              {isMapInit && <Routing map={map} fromCoordinates={position} toCoordinates={position2}/>}
          </Map>
      </>
  )
};