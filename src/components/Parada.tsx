import React, {useState, useEffect, useCallback} from 'react';
import { MapComponent } from "./MapComponent";
import { RouteComponentProps } from "react-router";
import { createSequence } from "../utils/NumberUtilities";
import {retrieveStation, sendComment} from "../utils/RequestMaker";
import {BikeHireDockingStation, ReducedBieHiringStation} from "../@types/Biceater";

interface RouteParameters {
    stationId: string;
}

type StationProps = RouteComponentProps<RouteParameters>

export const Parada : React.FC<StationProps> = (props: StationProps) => {

    const stationId = parseInt(props.match.params.stationId);

    const [station, setStation] = useState<BikeHireDockingStation>();
    const [simpleStation, setSimpleStation] = useState<ReducedBieHiringStation[]>();
    const [comment, setComment] = useState<string>('');

    useEffect(() => {
        if(station === undefined) {
            retrieveStation(stationId).then((result: BikeHireDockingStation) => {
                setStation(result);
                setSimpleStation([{
                    [`${stationId}`]:
                    [
                        {
                            type:  result.location.value.type,
                            coordinates: [+result.location.value.coordinates[0], +result.location.value.coordinates[1]]
                        },
                        result.address.value
                    ]
                }]);
            }).catch((err: any) => {
                console.log('Fuck');
            });
        }
    }, [station, stationId]);

    const commentHandler = useCallback((event: any) => {
        setComment(event.target.value);
    }, [comment]);

    const sendCommentHandler = useCallback((event:any)=>{
        sendComment(comment, stationId).then();
    }, [comment]);

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

                    <div className="col" style={{justifyContent: "center"}}>
                        {simpleStation && <MapComponent allStations={simpleStation} zoom={17}/>}
                    </div>

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
                                            }} onChange={commentHandler} value={comment} placeholder='Comenta lo que quieras.'/>
                                    </div>
                                    <button type="button" className="btn btn-primary" onClick={sendCommentHandler}>Comenta!</button>
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




