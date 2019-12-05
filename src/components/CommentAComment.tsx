import React, {useCallback, useState} from 'react';
import {sendComment} from "../utils/RequestMaker";
import {RouteComponentProps} from "react-router";
import {User} from "../@types/Biceater";


export const CommentAComment: React.FC = (props) => {


    const [comment, setComment] = useState<string>('');


    const commentHandler = useCallback((event: any) => {
        setComment(event.target.value);
    }, []);

    const sendCommentHandler = useCallback((event: unknown)=>{
        sendComment(comment, stationId).then();
    }, [stationId, comment]);

    return (
        <div className="row" style={{marginBottom: "20px"}}>
            <div className="col-2">

            </div>
            <div className="col-8 position-static">
                <div className="card">
                    <h5 className="card-header">{}</h5>
                    <div className="card-body">
                        <p className="card-text"> {}</p>
                        <div className="row">
                            <footer className="col">
                                {}
                            </footer>

                        </div>

                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Contesta</h5>
                            <form onClick={(event: any) => {
                                event.preventDefault()
                            }}>
                                <div>
                                            <textarea name="comments" id="comments"
                                                      onChange={commentHandler} value={comment} placeholder='Comenta lo que quieras.'/>
                                </div>
                                <button type="button" className="btn btn-primary" onClick={sendCommentHandler}>Comenta!</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            <div className="col-2">

            </div>
        </div>
    );

};