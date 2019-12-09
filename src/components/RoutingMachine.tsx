import { MapLayer, MapLayerProps } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import { withLeaflet } from "react-leaflet";
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

interface RoutingProps extends MapLayerProps{
    map: any,
    direction: string,
    fromCoordinates: [number, number],
    toCoordinates: [number, number]
}

export class Routing extends MapLayer<RoutingProps> {
    createLeafletElement() {
        const { map, fromCoordinates, toCoordinates, direction } = this.props;
        const waypoints = [
            L.latLng(fromCoordinates[0], fromCoordinates[1]),
            L.latLng(toCoordinates[0], toCoordinates[1]),
        ];
        let leafletElement = L.Routing.control({
            waypoints: waypoints,
            lineOptions: {
                styles: [
                    {
                        color: "blue",
                        opacity: 0.6,
                        weight: 4
                    }
                ]
            },
            show: false,
            routeWhileDragging: false,
            showAlternatives: false,
            collapsible: true,
            plan: L.Routing.plan(waypoints, {
                createMarker: function(waypointIndex, waypoint) {
                    const icon = L.icon({
                        iconUrl: require('../assets/location-icon.png'),
                        iconRetinaUrl: require('../assets/location-icon.png'),
                        shadowUrl: iconShadow,
                        iconAnchor: [20, 40],
                        popupAnchor: [0, -35],
                        iconSize: [40, 40],
                        shadowSize: [29, 40],
                        shadowAnchor: [7, 40],
                    });
                    const message: string = (waypointIndex === 0) ? 'Usuario' : direction;
                    const marker = (waypointIndex === 0) ? L.marker(waypoint.latLng, {icon: icon}) : L.marker(waypoint.latLng);
                    return marker.bindPopup(message);
                },
            }),
            router: new L.Routing.OSRMv1({
                serviceUrl: process.env.REACT_APP_OSRM_SERVER_HOST,
                routingOptions:{

                }
            })
        }).addTo(map.leafletElement);
        return leafletElement.getPlan();
    }
}
export default withLeaflet(Routing);