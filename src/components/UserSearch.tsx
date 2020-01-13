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
    //const [isLoaded, setIsLoaded] = useState<boolean>(false);type array javascript


    useEffect(() => {

            retrieveUsers(user).then((data: User[]) => {
                setAllUsers(data);
            });


    }, [user]);


    const accesProfile = (event: any) => {
        history.replace(`/users/${event.target.value}` );
    };

    let a = Object.values(allUsers);



    return (
        <div className="container">
            <h2>Usuarios</h2>
            <div>
                {a.map((users) => {

                    return  <div className="card">
                        <h5 className="card-header">{users.username}</h5>
                        <div className="card-body">
                            <button className="btn btn-light" value={users.id} type="submit" onClick={accesProfile}> Acceder Perfil</button>
                        </div>
                    </div>
                })}
            </div>

        </div>

    );
};

