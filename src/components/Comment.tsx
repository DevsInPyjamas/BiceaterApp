import React, {useState} from 'react';
import {User} from "../@types/Biceater";
import {Link, useParams} from "react-router-dom";
import {RouteComponentProps, useHistory} from "react-router";

interface CommentProps {
    authorId: User;
    text: string;
    date: Date;
}


export const Comment: React.FC<CommentProps> = (props) => {


    let history = useHistory();

    function handleClick(event: any) {

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
                    <Link to="/CommentAComment" className="stretched-link" onClick={handleClick}/>
                </div>
                <div className="col-2">

                </div>
            </div>
        );

};