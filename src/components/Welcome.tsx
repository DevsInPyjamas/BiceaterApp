import React, {useCallback, useEffect, useState} from 'react';
import {MapComponent} from "./MapComponent";
import {ReducedBieHiringStation} from "../@types/Biceater";
import {calculateBestRoute, retrieveAllStations} from "../utils/RequestMaker";

export const Welcome : React.FC = () => {

    const [stations, setStations] = useState<ReducedBieHiringStation[]>();

    useEffect(() => {
        retrieveAllStations().then((result: ReducedBieHiringStation[]) => {
            setStations(result);
        })
    }, []);

    return (
        <div className="container">
            <div className="row" style={{marginTop: "10px"}}>
                <div className="col-4">
                    <button type="button" className="btn btn-primary"  style= {{float: "right"}}>Editar Perfil</button>
                </div>
            </div>
            <div className="row" style={{marginTop: "20px",marginBottom: "20px"}}>
                <div className="col" style={{justifyContent: "center"}}>
                    {stations && <MapComponent
                        position={[36.72116082659559, -4.464346934397554]}
                        allStations={stations}
                        zoom={13}/>}
                </div>
            </div>
            <div className="row" style={{marginBottom: "20px"}}>
                <div className="col-6">
                    <div className="card">
                        <div className="card-body">
                            <button type="button" style= {{justifyContent: "center"}} className="btn btn-primary">Parada mas cercana</button>
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
