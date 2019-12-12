import React, {useState, useEffect, useCallback} from 'react';
import { MapComponent } from "./MapComponent";
import { RouteComponentProps } from "react-router";
import { createSequence } from "../utils/NumberUtilities";
import {retrieveStation, sendComment, retrieveAllCommentsFromStation} from "../utils/RequestMaker";
import {BikeHireDockingStation, ReducedBieHiringStation, Comment as Comentario} from "../@types/Biceater";
import {Comment} from  "./Comment";

interface RouteParameters {
    stationId: string;
}

type StationProps = RouteComponentProps<RouteParameters>

export const Parada : React.FC<StationProps> = (props: StationProps) => {

    const stationId = parseInt(props.match.params.stationId);

    const [station, setStation] = useState<BikeHireDockingStation>();
    const [simpleStation, setSimpleStation] = useState<ReducedBieHiringStation[]>();
    const [comment, setComment] = useState<string>('');
    const [allComments, setAllComments] = useState<Comentario[]>([]);

    useEffect(() => {
        if(!station) {
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
            }).catch((err: unknown) => {
                console.log('Fuck');
            });
            retrieveAllCommentsFromStation(stationId,10,0)
                .then((data: any)=> {
                    if(data.comments){
                        setAllComments(data.comments);
                        console.log(data);
                    }
            });
        }

    }, [station, stationId, allComments]);

    const commentHandler = useCallback((event: any) => {
        setComment(event.target.value);
    }, []);

    const sendCommentHandler = useCallback((event: unknown)=>{
        sendComment(comment, stationId).then();
        retrieveAllCommentsFromStation(stationId,10,0)
            .then((data: any)=> {
                if(data.comments){
                    setAllComments(data.comments);
                    console.log(data); 
                }
            });
    }, [stationId, comment]);

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
                                <button type="button" className="btn btn-info" style={{float: "left"}}>Valora !
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
                                            <textarea name="comments" id="comments"
                                            onChange={commentHandler} value={comment} placeholder='Comenta lo que quieras.'/>
                                    </div>
                                    <button type="button" className="btn btn-info" onClick={sendCommentHandler}>Comenta!</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">

                    </div>
                </div>

                {allComments && allComments.map((comment) => {
                    return <Comment author={comment.author} text={comment.text} date={comment.date as any as string}
                                    comment_id={comment.comment_id}/>
                })}


            </div>
            }
        </div>

    );
};




