import React, {useEffect, useState} from 'react';
import {MapComponent} from "./MapComponent";
import {ReducedBieHiringStation} from "../@types/Biceater";
import {calculateBestRoute, retrieveAllStations} from "../utils/RequestMaker";
import {useHistory} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

export const Welcome : React.FC = () => {

    const history = useHistory();
    const [stations, setStations] = useState<ReducedBieHiringStation[]>();
    const [station,setStation] = useState<string>("");
    const [route, setRoute] = useState<[number, number]>();
    const [direction, setDirection] = useState<string>();
    const [id, setId] = useState<number>();
    const [availableBikeNumber, setAvailableBikeNumber] = useState<number>();
    const [freeSlotNumber, setFreeSlotNumber] = useState<number>();
    const [totalSlotNumber, setTotalSlotNumber] = useState<number>();
    const [coordinates, setCoordinates] = useState<[number, number] | undefined>([36.72116082659559, -4.464346934397554]);

    useEffect(() => {
        retrieveAllStations().then((result: ReducedBieHiringStation[]) => {
            setStations(result);
        })
    }, []);

    function searchStation(event: any){
        if(!route && coordinates) {
            calculateBestRoute(coordinates).then((res : {direction: string,
                location: [number, number], availableBikeNumber: number, freeSlotNumber: number, id: number,
                totalSlotNumber: number}) => {
                setRoute(res.location);
                setDirection(res.direction);
                setId(res.id);
                setAvailableBikeNumber(res.availableBikeNumber);
                setFreeSlotNumber(res.freeSlotNumber);
                setTotalSlotNumber(res.totalSlotNumber);
            });
        }
    }

    function updateStationInput(event:any) {
        setStation(event.target.value);
    }

    function handleClick(event:any){
        history.push(`/resultStation/${station}`)
    }

    return (
        <div className="container">
            <div className="row" style={{marginBottom: "20px"}}>
                <div className="col-6 d-flex justify-content-center align-items-center">
                    <div className="card">
                        <div className="card-body">
                            <button type="button" style= {{justifyContent: "center"}} className="btn btn-info" onClick={searchStation}>
                                Parada mas cercana
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-6 d-flex justify-content-center align-items-center">
                    <div className="card">
                        <div className="card-body">
                            <form className="form-inline" onSubmit={(event: any) => event.preventDefault()}>
                               <input className="form-control mr-sm-2" type="search" placeholder="Calle estación"
                                       aria-label="Search" value={station} onChange={updateStationInput}/>
                                <button className="btn btn-info my-2 my-sm-0" type="submit"  onClick={handleClick}><
                                    FontAwesomeIcon icon={faSearch}/>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row container d-flex justify-content-center" style={{marginTop: "20px",marginBottom: "20px"}}>
                <div className="col" style={{justifyContent: "center"}}>
                    {stations &&
                    <MapComponent
                        position={coordinates}
                        routing={route}
                        allStations={stations}
                        zoom={15}
                        direction={direction}
                        idStation={id}
                        availableBikeNumber={availableBikeNumber}
                        freeSlotNumber={freeSlotNumber}
                        totalSlotNumber={totalSlotNumber}
                        coordinates={coordinates}
                        setCoordinates={setCoordinates}
                    />
                    }
                </div>
            </div>
        </div>
    );
};