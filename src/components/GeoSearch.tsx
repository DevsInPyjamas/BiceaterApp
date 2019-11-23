import {MapControl, MapControlProps, withLeaflet} from "react-leaflet";
import {GeoSearchControl, OpenStreetMapProvider} from "leaflet-geosearch";

interface GeoSearchProps extends MapControlProps{
    map: any
}

export class GeoSearch extends MapControl<GeoSearchProps> {
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