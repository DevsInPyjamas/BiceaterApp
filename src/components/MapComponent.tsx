import React, {useState} from 'react';
import {Map, Marker, Popup, TileLayer} from "react-leaflet";
import "../styles/index.css"

export const MapComponent : React.FC = () => {
    const position: [number, number] = [36.71580426431715, -4.455611828876954];
    return (
      <>
          I'm trying the routing components from react.
          <Map center={position} zoom={13} id="mapid">
              <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              />
              <Marker position={position}>
                  <Popup>Comprar Papatas fritas</Popup>
              </Marker>
          </Map>
      </>
  )
};