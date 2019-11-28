import React, {useEffect, useState} from 'react';
import {MapComponent} from "./MapComponent";
import {ReducedBieHiringStation} from "../@types/Biceater";
import {calculateBestRoute, retrieveAllStations} from "../utils/RequestMaker";

export const Welcome : React.FC = () => {

    const [stations, setStations] = useState<ReducedBieHiringStation[]>();
    const [route, setRoute] = useState<[number, number]>();
    useEffect(() => {
        retrieveAllStations().then((result: ReducedBieHiringStation[]) => {
            setStations(result);
        })
    }, []);

    function searchStation(event: any){
        calculateBestRoute([36.72116082659559, -4.464346934397554]).then((res : {location: [number, number]}) => {
            setRoute(res.location);
        });
    }

    return (
        <div className="container">
            <div className="row" style={{marginTop: "20px",marginBottom: "20px"}}>
                <div className="col" style={{justifyContent: "center"}}>
                    {stations && <MapComponent
                        position={[36.72116082659559, -4.464346934397554]}
                        routing={route}
                        allStations={stations}
                        zoom={13}/>}
                </div>
            </div>
            <div className="row" style={{marginBottom: "20px"}}>
                <div className="col-6">
                    <div className="card">
                        <div className="card-body">
                            <button type="button" style= {{justifyContent: "center"}} className="btn btn-primary" onClick={searchStation}>Parada mas cercana</button>
                        </div>
                    </div> </div>
                <div className="col-6">
                    <div className="card">
                        <div className="card-body">
                            <button type="button" style= {{justifyContent: "center"}} className="btn btn-primary">Buscar Parada</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
