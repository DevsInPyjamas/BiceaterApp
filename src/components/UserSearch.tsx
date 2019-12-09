import React, {useState, useEffect} from "react";
import {useParams} from "react-router";
import {retrieveUsers} from "../utils/RequestMaker";
import {User} from "../@types/Biceater";

interface UserSearchParams{
    user:string;
}

export const UserSearch: React.FC = () => {

    const {user} = useParams<UserSearchParams>();

    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        if (!allUsers){
            retrieveUsers(user)
                .then((data:any) => {
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
            <h2>Usuarios</h2>
            <div>
                {allUsersFiltered}
            </div>

        </div>

    );
};