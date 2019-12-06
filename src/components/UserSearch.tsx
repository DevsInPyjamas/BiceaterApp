import React, {useState, useEffect} from "react";
import {Navbar} from "./Navbar";
import {retrieveUsers} from "../utils/RequestMaker";
import {User} from "../@types/Biceater";

export const UserSearch: React.FC = () => {

    const [user] = useState("");
    const [allUsers, setAllUsers] = useState();

    useEffect(() => {
        if (!allUsers){
            retrieveUsers(user)
                .then(data => {
                setAllUsers(data);
            })
        }
    }, [allUsers, user]);

    const allUsersFiltered= allUsers.filter((actualUser: User)=>{
        return actualUser.username.includes(user);
    }).map((actualUser:any)=>{
        return(
            <div className="card">
            <h5 className="card-header">{actualUser.username}</h5>
        <div className="card-body">
            <button className="btn btn-light" type="submit"> Acceder Perfil</button>
        </div>
        </div>
        );
    });

    return (
        <div className="container">
            <Navbar text={user}/>
            <h2>Usuarios</h2>
            <div>
                {allUsersFiltered}
            </div>

        </div>

    );
};