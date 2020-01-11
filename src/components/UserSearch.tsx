import React, {useState, useEffect} from "react";
import {RouteComponentProps, useHistory} from "react-router";
import {retrieveUsers} from "../utils/RequestMaker";
import {User} from "../@types/Biceater";

interface UserSearchParams {
    user: string;
}

type UserSearchProps = RouteComponentProps<UserSearchParams>

export const UserSearch: React.FC<UserSearchProps> = (props: UserSearchProps) => {

    const user = props.match.params.user;
    const history = useHistory();

    const [allUsers, setAllUsers] = useState<User[]>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        if(!isLoaded) {
            retrieveUsers(user)
            .then((data:any) => {
                setAllUsers(data);
            });
            setIsLoaded(true);
        }
    }, [allUsers, user, isLoaded]);

    const accesProfile = (event: any) => {
        history.replace(`/users/${event.target.value}` );
    };

    return (
        <div className="container">
            <h2>Usuarios</h2>
            <div>
                {allUsers && allUsers.map((users) =>{
                    console.log(allUsers);
                    return(
                        <div className="card">
                            <h5 className="card-header">{users.username}</h5>
                            <div className="card-body">
                                <button className="btn btn-info" value={users.id} type="submit" onClick={accesProfile}> Acceder Perfil</button>
                            </div>
                        </div>
                    );
                }) }
            </div>

        </div>

    );
};

