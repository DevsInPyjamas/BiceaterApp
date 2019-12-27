import React from 'react';
import {User} from "../@types/Biceater";
import { useHistory } from "react-router";

interface CommentProps {
    author: User;
    text: string;
    date: string;
    commentId?: number;
}


export const Comment: React.FC<CommentProps> = (props) => {

    const date = new Date(props.date);
    const history = useHistory();

    function handleClick(event: any) {
        history.push(event.target.value);
    }

        return (
            <div className="row" style={{marginBottom: "20px"}}>
                <div className="col-2">

                </div>
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

                </div>
                <div className="col-2">

                </div>
            </div>
        );

};