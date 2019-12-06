import React from 'react';
import {User} from "../@types/Biceater";
import { useHistory } from "react-router";

interface CommentProps {
    authorId: User;
    text: string;
    date: Date;
    commentId?: number;
}


export const Comment: React.FC<CommentProps> = (props) => {


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
                        <h5 className="card-header">{props.authorId}</h5>
                        <div className="card-body">
                            <p className="card-text"> {props.text}</p>
                            <div className="row">
                                <footer className="col">
                                    {props.date.getTime()}
                                </footer>

                            </div>

                        </div>
                    </div>
                    {props.commentId && <button onClick={handleClick} value={props.commentId}>Respuestas</button>}
                </div>
                <div className="col-2">

                </div>
            </div>
        );

};