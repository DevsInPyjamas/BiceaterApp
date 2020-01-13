import React, {useCallback, useEffect, useState} from 'react';
import {
    retrieveComment,
    retrieveResponsesToComment,
    sendResponseComment,
} from "../utils/RequestMaker";
import {Comment} from '../@types/Biceater';
import { RouteComponentProps } from "react-router";
import { Comment as CommentComponent } from './Comment';

interface RouteParameters {
    comment_id: string;
    stationId:string;
}

// @ts-ignore
type CommentResponsesProps = RouteComponentProps<RouteParameters>

export const CommentResponses: React.FC<CommentResponsesProps> = (props: CommentResponsesProps) => {
    const comment_id = parseInt(props.match.params.comment_id);
    const stationId = parseInt(props.match.params.stationId);


    const [comment, setComment] = useState<string>('');
    const [originalComment, setOriginalComment] = useState<Comment>();
    const [responses, setResponses] = useState<Comment[]>([]);
    const [needsRefresh, setNeedsRefresh] = useState(true);

    useEffect(() => {


        retrieveComment(comment_id).then((data: any) => {
                setOriginalComment(data[0]);

        });

        retrieveResponsesToComment(comment_id).then((result: any[]) => {
            setResponses(result);
        });

        setNeedsRefresh(false);


    }, [comment_id,needsRefresh]);

    const commentHandler = useCallback((event: any) => {
        setComment(event.target.value);
    }, []);

    const sendCommentHandler = useCallback((event: unknown)=>{
        sendResponseComment(comment, comment_id,stationId).then();
        setNeedsRefresh(true);
        setComment('');
    }, [comment_id, comment,stationId]);

    let originalCommentDate;
    if(originalComment && originalComment.date){
        originalCommentDate=new Date(originalComment.date);
    }
    return (

        <div className="row" style={{marginBottom: "20px"}}>
            <div className="col-2">

            </div>
        <div className="col-8 position-static">
                <div className="card">
                    <h5 className="card-header">{originalComment && originalComment.author.username}</h5>
                    <div className="card-body">
                        <p className="card-text">{originalComment && originalComment.text}</p>
                        <div className="row">
                            <p className="card-text"><small style={{position: 'absolute', right: 25}} className="text-muted">  {originalCommentDate && `${originalCommentDate.getDate()}/${originalCommentDate.getMonth()+1}/${originalCommentDate.getFullYear()}`}</small></p>
                        </div>

                    </div>
                </div>

                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Responder</h5>
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

                        <div> <h3  style ={{textAlign: "center"}}>   Respuestas </h3> </div>


                        {responses && responses.map((comment) => {
                            return <CommentComponent key={comment.comment_id} author={comment.author} text={comment.text}
                                                     date={comment.date as any as string} stationId={stationId}/>
                        })}

                </div>
        </div>
            <div className="col-2">

            </div>
        </div>
    );

};