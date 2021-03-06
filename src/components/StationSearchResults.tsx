import React, {useEffect, useState} from "react";
import {RouteComponentProps, useHistory} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {BikeHireDockingStation} from "../@types/Biceater";
import {retrieveStationByAddress} from "../utils/RequestMaker";

interface StationSearchParams{
    station: string
}

type StationSearchProps = RouteComponentProps<StationSearchParams>

export const StationSearchResults : React.FC<StationSearchProps> = (props: StationSearchProps) => {

    const station = props.match.params.station;
    const history = useHistory();

    const [allStations, setAllStations] = useState<BikeHireDockingStation[]>([]);
    const [stationSearch,setStationSearch] = useState<string>(station);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [needsReload, setNeedsReload] = useState(true);

    useEffect(() => {
        if(!isLoaded || needsReload){
            retrieveStationByAddress(stationSearch).then((data:any) => {
                setAllStations(data);
            });
            setIsLoaded(true);
        }
        setNeedsReload(false);
    }, [allStations, station, isLoaded, stationSearch, needsReload]);

    function updateStationInput(event:any) {
        setStationSearch(event.target.value);
    }

    function handleClick(){
        setNeedsReload(true);
        // window.location.reload();
    }

    function accessStation(event:any){
        history.replace(`/station/${event.target.value}`);
    }

    return(
        <div className={"container"}>
            <div className="col-md-4">
                <form className="form-inline" onSubmit={(event: any) => event.preventDefault()}>
                    <input className="form-control mr-sm-2" type="search" placeholder="Calle estación"
                           aria-label="Search" value={stationSearch} onChange={updateStationInput}/>
                    <button className="btn btn-info my-2 my-sm-0" type="submit"  onClick={handleClick}><
                        FontAwesomeIcon icon={faSearch}/>
                    </button>
                </form>
            </div>
            <br/>
            <h2>Estaciones</h2>
            <div>
                {allStations && allStations.map((stations) =>{
                    return(
                        <div className="card">
                            <h5 className="card-header">{stations.address.value.streetAddress}</h5>
                            <div className="card-body">
                                <button className="btn btn-info" value={stations.id} type="submit" onClick={accessStation}> Acceder Estacion</button>
                            </div>
                        </div>
                    );
                }) }
            </div>
        </div>
    )
};