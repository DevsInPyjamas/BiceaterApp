import {MapLayer, MapLayerProps} from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "lrm-google";
import { withLeaflet } from "react-leaflet";

interface RoutingProps extends MapLayerProps{
    map: any
}


export class Routing extends MapLayer<RoutingProps> {
    createLeafletElement() {
        const { map } = this.props;
        let leafletElement = L.Routing.control({
            waypoints: [
                L.latLng(36.719213043469765, -4.455949667115419),
                L.latLng(36.72116082659559, -4.464346934397554),
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

        }).addTo(map.leafletElement);
        return leafletElement.getPlan();
    }
}
export default withLeaflet(Routing);