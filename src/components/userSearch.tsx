import React, {useState, useEffect} from "react";
import {Navbar} from "./Navbar";

export const UserSearch: React.FC = () => {
    const [user, setUser] = useState("");
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        fetch('/views.all_users')
            .then(response => {
                return response.json()
            }).then(data => {
                setAllUsers(data);
            })
    }, []);

    const allUsersFiltered= allUsers.filter((actualUser:any)=>{
        return actualUser.username.include(user);
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
            <Navbar user={user} onChangeUser={(e: any) => {
                setUser(e)
            }}/>
            <h2>Usuarios</h2>
            <div>
                {allUsersFiltered}
            </div>

        </div>

    );
};