import React, {useCallback, useEffect, useState} from 'react';
import {retrieveComment, retrieveResponsesToComment, sendComment} from "../utils/RequestMaker";
import { Comment } from '../@types/Biceater';
import { RouteComponentProps } from "react-router";
import { Comment as CommentComponent } from './Comment';

interface RouteParameters {
    commentId: string;
}

type CommentResponsesProps = RouteComponentProps<RouteParameters>

export const CommentResponses: React.FC<CommentResponsesProps> = (props: CommentResponsesProps) => {
    const commentId = parseInt(props.match.params.commentId);

    const [comment, setComment] = useState<string>('');
    const [originalComment, setOriginalComment] = useState<Comment>();
    const [responses, setResponses] = useState<Comment[]>();

    useEffect(() => {
        if(!originalComment) {
            retrieveComment(commentId)
                .then((result:any) => setOriginalComment(result))
        }
        if(!responses) {
            retrieveResponsesToComment(commentId)
                .then((result: any[]) => setResponses(result));
        }
    }, [commentId, originalComment, responses]);

    const commentHandler = useCallback((event: any) => {
        setComment(event.target.value);
    }, []);

    const sendCommentHandler = useCallback((event: unknown)=>{
        sendComment(comment, commentId).then();
    }, [commentId, comment]);

    return (
        <div className="row" style={{marginBottom: "20px"}}>
            <div className="col-2">

            </div>
            <div className="col-8 position-static">
                <div className="card">
                    <h5 className="card-header">{originalComment && originalComment.author.username}</h5>
                    <div className="card-body">
                        <p className="card-text"> {originalComment && originalComment.text}</p>
                        <div className="row">
                            <footer className="col">
                                {originalComment && originalComment.date.toTimeString()}
                            </footer>

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
                                <button type="button" className="btn btn-primary" onClick={sendCommentHandler}>Comenta!</button>
                            </form>
                        </div>
                    </div>

                    {responses && responses.map((comment) => {
                        return <CommentComponent key={comment.commentId} author={comment.author} text={comment.text}
                        date={comment.date as any as string}/>
                    })}

                </div>
            </div>
            <div className="col-2">

            </div>
        </div>
    );

};