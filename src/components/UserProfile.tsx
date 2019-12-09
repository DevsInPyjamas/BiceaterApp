import React, {useCallback, useEffect, useState} from 'react';
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
    const [editing, setEditing] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [bio, setBio] = useState<string>('');
    const [gender, setGender] = useState<string>('');
    const [birthDate, setBirthDate] = useState<Date>();

    useEffect(() => {
        if(user === undefined){
            retrieveUserInfo(userId).then((result: User) => {
                setUser(result);
                setName(result.name);
                setSurname(result.surname);
                setUsername(result.username);
                setBio(result.bio);
                setBirthDate(result.dateOfBirth);
            })
        }
    }, [user]);

    const updateProfileCallback = useCallback((event: unknown) => {
        setEditing(false);
    }, []);

    const nameChangeHandler = useCallback((event: any) => {
        setName(event.target.value);
    }, []);

    const surnameChangeHandler = useCallback((event: any) => {
        setSurname(event.target.value);
    }, []);

    const usernameChangeHandler = useCallback((event: any) => {
        setUsername(event.target.value);
    }, []);

    const dateOfBirthChangeHandler = useCallback((event: any) => {
        setBirthDate(event.target.value);
    }, []);

    const genderChangeHandler = useCallback((event: any) => {
        setSurname(event.target.value);
    }, []);

    const bioChangeHandler = useCallback((event: any) => {
        setBio(event.target.value);
    }, []);

    return (
        <div className='container'>
            <h3>Panel de Usuario</h3>
            <button className='btn btn-outline-primary' onClick={(event: unknown) => setEditing(true)}>Editar perfil</button>
            {user &&
                <div className='col'>
                    <div className='row justify-content-center p-2'>
                        <img className='ml-2' src={user.imagePath} alt="Usted no ha subido ninguna imagen"/>
                    </div>
                    <div className='row justify-content-center p-2'>
                        Nombre: <input className='ml-2' onChange={nameChangeHandler} readOnly={!editing} value={name} />
                    </div>
                    <div className='row justify-content-center p-2'>
                        Apellidos: <input className='ml-2' onChange={usernameChangeHandler} readOnly={!editing} value={user.surname} />
                    </div>
                    <div className='row justify-content-center p-2'>
                        Username: <input className='ml-2' onChange={usernameChangeHandler} readOnly={!editing} value={user.username} />
                    </div>
                    <div className='row justify-content-center p-2'>
                        Fecha Nacimiento:
                        <input readOnly={!editing} onChange={dateOfBirthChangeHandler} type='date' className='ml-2' value={(birthDate) ? birthDate.getDate() : ''} />
                    </div>
                    <div className='row justify-content-center p-2'>
                        Genero: <input className='ml-2' onChange={genderChangeHandler} readOnly={!editing} value={user.genre} />
                    </div>
                    <div className='row justify-content-center p-2'>
                        Biografia: <textarea className='ml-2' readOnly={!editing} onChange={bioChangeHandler} value={user.bio} />
                    </div>
                    {editing &&
                    <button className='btn btn-outline-primary fixed-right' onClick={updateProfileCallback}>Enviar</button>}
                </div>
            }
        </div>
    );
};
