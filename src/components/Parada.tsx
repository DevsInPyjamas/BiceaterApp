import React, { useState, useEffect } from 'react';
import { MapComponent } from "./MapComponent";
import { RouteComponentProps } from "react-router";
import { createSequence } from "../utils/NumberUtilities";
import {retrieveStation} from "../utils/RequestMaker";
import { BikeHireDockingStation } from "../@types/Biceater";

interface RouteParameters {
    stationId: string;
}

type StationProps = RouteComponentProps<RouteParameters>

export const Parada : React.FC<StationProps> = (props: StationProps) => {

    const stationId = parseInt(props.match.params.stationId);

    console.log(stationId);

    const [station, setStation] = useState<BikeHireDockingStation>();

    useEffect(() => {
        if(station === undefined) {
            retrieveStation(stationId).then((result: BikeHireDockingStation) => {
                setStation(result);
                console.log(station);
            }).catch((err: any) => {
                console.log('Fuck');
            });
        }
    }, [station, stationId]);

    return (
        <div className="container">
            {station &&
            <div>
                <div className="row" style={{marginTop: "10px"}}>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                Estacion {station.id} en {station.address.value.streetAddress}
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <select className="form-control" style={{marginRight: "10px"}}>
                                    {createSequence(1, 10).map((el) => <option value={el} key={el}>{el}</option>)}
                                </select>

                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <button type="button" className="btn btn-primary" style={{float: "left"}}>Valora !
                                </button>

                            </div>
                        </div>
                    </div>

                </div>
                <div className="row" style={{marginTop: "20px", marginBottom: "20px"}}>

                    <div className="col" style={{justifyContent: "center"}}><MapComponent/></div>

                </div>
                <div className="row" style={{marginBottom: "20px"}}>
                    <div className="col-2">

                    </div>
                    <div className="col-8">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Comentario</h5>
                                <form onClick={(event: any) => {
                                    event.preventDefault()
                                }}>
                                    <div>
                                            <textarea name="comments" id="comments" style={{
                                                width: "686px",
                                                resize: "both",
                                                height: "136px",
                                                marginBottom: "10px"
                                            }}>
                                            Hey... say something!
                                            </textarea>
                                    </div>
                                    <button type="button" className="btn btn-primary">Comenta!</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">

                    </div>
                </div>
            </div>
            }
        </div>

    );
};




