import React, {useEffect, useState} from 'react';
import { RouteComponentProps } from "react-router";
import {User} from "../@types/Biceater"
import {retrieveUserInfo} from "../utils/RequestMaker";


interface RouteParameters {
    userId: string
}

type UserProps = RouteComponentProps<RouteParameters>

export const UserProfile: React.FC<UserProps> = (props: UserProps) => {
    const userId = parseInt(props.match.params.userId);

    const [user, setUser] = useState<User>();

    useEffect(() => {
        if(user === undefined){
            retrieveUserInfo(userId).then((result: User) => {
                setUser(result);
            })
        }
    }, [user]);

    return (
        <div className='container'>
            {user &&
                <div>
                    <input readOnly value={user.name} />
                    <input readOnly value={user.surname} />
                    <input readOnly value={user.username} />
                    <input readOnly value={user.dateOfBirth.getDate()} />
                    <input readOnly value={user.bio} />
                    <input readOnly value={user.genre} />
                    <img src={user.imagePath} alt="Image Not Found"/>

                </div>
            }
        </div>
    );
};
