import React from 'react';
import {User} from "../@types/Biceater";
import { useHistory } from "react-router";
import {deleteComment} from "../utils/RequestMaker";

interface CommentProps {
    author: User;
    text: string;
    date: string;
    comment_id?: number;
}


export const Comment: React.FC<CommentProps> = (props) => {

    const date = new Date(props.date);
    const history = useHistory();

    function handleClick(event: any) {
        history.replace(`/comments/${props.comment_id}`);
    }

    const borrar = (event: any) => {
        deleteComment(props.comment_id!).then(() => {
            window.location.reload(true);
        }).catch(() => {
            window.alert('No puedes borrar comentarios que no sean tuyos');
        })
    };

    return (
        <div className="row" style={{marginBottom: "20px"}}>
            <div className="col-2">

                <div className="col-8 position-static">
                    <div className="card">
                        <h5 className="card-header">{props.author.username}</h5>
                        <div className="card-body">
                            <p className="card-text"> {props.text}</p>
                            <div className="row">
                                <button type="button" className="btn btn-info" style={{position: 'absolute', right: 25}} onClick={handleClick} value={props.commentId}>Respuestas</button>
                            </div>
                            <div className="row">
                                <p className="card-text"><small className="text-muted">  -{date.getDay()}/{date.getMonth()}/{date.getFullYear()}</small></p>
                            </div>

                    </div>
                </div>
                <button onClick={borrar} className='btn btn-info'>Borrar</button>
                {props.comment_id && <button className='btn btn-info' onClick={handleClick} value={props.comment_id}>Respuestas</button>}
            </div>
            <div className="col-2">

            </div>
        </div>
    );
};