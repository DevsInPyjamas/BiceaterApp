import React, {useEffect, useState} from 'react';
import {MapComponent} from "./MapComponent";
import {ReducedBieHiringStation} from "../@types/Biceater";
import {calculateBestRoute, retrieveAllStations} from "../utils/RequestMaker";
import {useHistory} from "react-router";

export const Welcome : React.FC = () => {

    const history = useHistory();
    const [stations, setStations] = useState<ReducedBieHiringStation[]>();
    const [route, setRoute] = useState<[number, number]>();
    const [direction, setDirection] = useState<string>();
    const [id, setId] = useState<number>();
    const [availableBikeNumber, setAvailableBikeNumber] = useState<number>();
    const [freeSlotNumber, setFreeSlotNumber] = useState<number>();
    const [totalSlotNumber, setTotalSlotNumber] = useState<number>();
    useEffect(() => {
        retrieveAllStations().then((result: ReducedBieHiringStation[]) => {
            setStations(result);
        })
    }, []);

    function searchStation(event: any){
        if(!route) {
            calculateBestRoute([36.72116082659559, -4.464346934397554]).then((res : {direction: string,
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

    function redirectStation(event: any){
        history.push(`/searchStation`);
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
                            <button type="button" style= {{justifyContent: "center"}} className="btn btn-info" onClick={redirectStation}>
                                Buscar Parada
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row container d-flex justify-content-center" style={{marginTop: "20px",marginBottom: "20px"}}>
                <div className="col" style={{justifyContent: "center"}}>
                    {stations &&
                    <MapComponent
                        position={[36.72116082659559, -4.464346934397554]}
                        routing={route}
                        allStations={stations}
                        zoom={15}
                        direction={direction}
                        idStation={id}
                        availableBikeNumber={availableBikeNumber}
                        freeSlotNumber={freeSlotNumber}
                        totalSlotNumber={totalSlotNumber}
                    />
                    }
                </div>
            </div>
        </div>
    );
};