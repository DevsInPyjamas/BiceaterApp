import * as L from 'leaflet'
import 'leaflet.locatecontrol';
import { MapControl } from "react-leaflet";
import { withLeaflet } from "react-leaflet";

export class LocationControl extends MapControl{
    createLeafletElement() {
        return L.control.locate({
            keepCurrentZoomLevel: true,
            locateOptions: {
                enableHighAccuracy: true
            }
        });
    }
}

export default withLeaflet(LocationControl);