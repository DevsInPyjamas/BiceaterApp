import L from 'leaflet'
import { MapControl } from "react-leaflet";
import { withLeaflet } from "react-leaflet";


export class LocationControl extends MapControl{
    createLeafletElement() {
        return L.control.locate();
    }
}

export default withLeaflet(LocationControl);