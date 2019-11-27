import {MapControl, withLeaflet} from "react-leaflet";
import {GeoSearchControl, OpenStreetMapProvider} from "leaflet-geosearch";


export class GeoSearch extends MapControl {
    createLeafletElement() {
        const provider = new OpenStreetMapProvider();
        return new GeoSearchControl({
            provider: provider,
            style: "bar",
            autoClose: true,
            keepResult: true,
            animateZoom: true,
            searchLabel: "Enter address"
        });
    }
}

export default withLeaflet(GeoSearch);