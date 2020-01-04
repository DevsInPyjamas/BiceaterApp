import React, {useState} from 'react';
import {Map, Marker, Popup, TileLayer} from "react-leaflet";
import * as L from "leaflet";
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import "../styles/index.css"
import GeoSearch from "./GeoSearch";
import {ReducedBieHiringStation} from "../@types/Biceater";
import {useHistory} from "react-router";
import Routing from "./RoutingMachine";
import LocationControl from "./LocationControl";

interface MapProps {
    position?: [number, number];
    routing?: [number, number];
    direction?: string;
    allStations: ReducedBieHiringStation[];
    zoom: number;
    idStation?: number;
    availableBikeNumber?: number;
    freeSlotNumber?: number;
    totalSlotNumber?: number;
}

export const MapComponent : React.FC<MapProps> = ({position, routing,
                                                      direction, allStations,
                                                      zoom, idStation, availableBikeNumber,
                                                      freeSlotNumber, totalSlotNumber}: MapProps) => {
    const [isMapInit, setIsMapInit] = useState<boolean>(false);
    const [map, setMap] = useState<L.Map>();
    const [coordinates, setCoordinates] = useState<[number, number] | undefined>(position);
    const saveMap = (map: any) => {
        setIsMapInit(true);
        setMap(map);
    };

    let history = useHistory();

    function handleClick(event: any) {
        history.push(`/station/${event.target.value}`);
    }

    const evaluateMapCenter = () => {
        if(position) {
            return position;
        } else {
            const key = Object.keys(allStations[0])[0];
            return allStations[0][key][0].coordinates;
        }
    };

    const onLocationFound = (location: any) => {
        setCoordinates([location.latlng.lat, location.latlng.lng]);
        console.log(location.latlng);
    };

    const mapCenter = evaluateMapCenter();

    return (
      <>
          <div className="container d-flex justify-content-center">
              <Map center={mapCenter} zoom={zoom} id="mapid" maxZoom={19} minZoom={13} ref={saveMap} onLocationFound={onLocationFound}>
                  <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                  />
                  <GeoSearch />
                  <LocationControl/>
                  {coordinates && <Marker position={coordinates} icon={L.icon({
                      iconUrl: require('../assets/location-icon.png'),
                      iconRetinaUrl: require('../assets/location-icon.png'),
                      shadowUrl: iconShadow,
                      iconAnchor: [20, 40],
                      popupAnchor: [0, -35],
                      iconSize: [40, 40],
                      shadowSize: [29, 40],
                      shadowAnchor: [7, 40],
                  })}>
                      <Popup>Tu posici&oacute;n</Popup>
                  </Marker>}
                  {allStations.map((station) => {
                      const key = Object.keys(station)[0];
                      return <Marker key={key} position={station[key][0].coordinates}>
                          <Popup>
                              <button value={key} onClick={handleClick} className="btn btn-outline-dark">
                                    Estaci&oacute;n de {station[key][1].streetAddress}
                              </button>
                          </Popup>
                      </Marker>
                  })}
                  {isMapInit && coordinates && routing && direction &&
                        <Routing map={map} fromCoordinates={coordinates} toCoordinates={routing} direction={direction}/>
                  }
              </Map>
          </div>
          {routing &&
          <div className="row" style={{marginTop: "20px"}}>
              <div className="col-6" style={{paddingLeft: "20px"}}>
                  <div className="card">
                      <div className="card-body">
                          <h4>
                              Informaci&oacute;n de la parada
                          </h4>
                          <div style={{marginTop: "10px"}}>
                              Direcci&oacute;n: {direction}
                          </div>
                          <div style={{marginTop: "10px"}}>
                              N&uacute;mero total de espacios: {totalSlotNumber}
                          </div>
                          <div style={{marginTop: "10px"}}>
                              N&uacute;mero de bicicletas disponibles: {availableBikeNumber}
                          </div>
                          <div style={{marginTop: "10px"}}>
                              N&uacute;mero de espacios libres: {freeSlotNumber}
                          </div>
                          <button type="button" style= {{justifyContent: "center", marginTop: "10px"}} className="btn btn-info"
                                  onClick={handleClick} value={idStation}>
                              Visitar parada
                          </button>
                      </div>
                  </div>
              </div>
          </div>
          }
      </>
  )
};