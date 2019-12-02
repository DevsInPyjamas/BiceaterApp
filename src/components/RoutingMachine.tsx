import {MapLayer, MapLayerProps} from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "lrm-google";
import { withLeaflet } from "react-leaflet";

interface RoutingProps extends MapLayerProps{
    map: any,
    fromCoordinates: [number, number],
    toCoordinates: [number, number]
}


export class Routing extends MapLayer<RoutingProps> {
    createLeafletElement() {
        const { map, fromCoordinates, toCoordinates } = this.props;
        let leafletElement = L.Routing.control({
            waypoints: [
                L.latLng(fromCoordinates[0], fromCoordinates[1]),
                L.latLng(toCoordinates[0], toCoordinates[1]),
            ],
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
            router: new L.Routing.OSRMv1({
                serviceUrl: 'http://10.10.5.156:5000/route/v1'
            })
        }).addTo(map.leafletElement);
        return leafletElement.getPlan();
    }
}
export default withLeaflet(Routing);