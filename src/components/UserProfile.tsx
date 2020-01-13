import React, {useCallback, useEffect, useState} from 'react';
import { RouteComponentProps } from "react-router";
import {User} from "../@types/Biceater"
import {retrieveUserInfo, sendUpdateUser} from "../utils/RequestMaker";


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
    const [hobbies, setHobbies] = useState<string>('');

    useEffect(() => {
        if(user === undefined){
            retrieveUserInfo(userId).then((result: User[]) => {
                const user = result[0];
                setUser(user);
                setName(user.name);
                setSurname(user.surname);
                setUsername(user.username);
                setBio(user.description);
                setBirthDate(user.DoB);
                setGender(user.genre);
                setHobbies(user.hobbies);
            });
        }
    }, [user, name, surname, username, bio, birthDate, hobbies, userId]);

    const updateProfileCallback = useCallback((event: unknown) => {
        setEditing(false);
        sendUpdateUser(userId, name, surname, username, bio, gender, birthDate, hobbies).then(() => {
            window.location.reload(true)
        }).catch(() => {
            window.alert('No puedes editar usuarios que no sea el tuyo');
        });
    }, [userId, name, surname, username, bio, birthDate, gender, hobbies]);

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

    const hobbiesChangeHandler = useCallback((event:any)=>{
        setHobbies(event.target.value);
    }, []);

    return (
        <div className='container'>
            <h3>Panel de Usuario</h3>
            <button className='btn btn-info' onClick={(event: unknown) => setEditing(true)}>Editar perfil</button>
            {user &&
                <div className='col'>
                    <div className='row justify-content-center p-2'>
                        Nombre: <input className='ml-2' onChange={nameChangeHandler} readOnly={!editing} value={name} />
                    </div>
                    <div className='row justify-content-center p-2'>
                        Apellidos: <input className='ml-2' onChange={surnameChangeHandler} readOnly={!editing} value={surname} />
                    </div>
                    <div className='row justify-content-center p-2'>
                        Username: <input className='ml-2' onChange={usernameChangeHandler} readOnly={!editing} value={username} />
                    </div>
                    <div className='row justify-content-center p-2'>
                        Fecha Nacimiento:
                        <input readOnly={!editing} onChange={dateOfBirthChangeHandler} type='date' className='ml-2' value={(birthDate) ? birthDate.toString() : ''} />
                    </div>
                    <div className='row justify-content-center p-2'>
                        Genero: <input className='ml-2' onChange={genderChangeHandler} readOnly={!editing} value={gender} />
                    </div>
                    <div className='row justify-content-center p-2'>
                        Biografia: <textarea className='ml-2' readOnly={!editing} onChange={bioChangeHandler} value={bio} />
                    </div>
                    <div className='row justify-content-center p-2'>
                        Hobbies: <textarea className='ml-2' readOnly={!editing} onChange={hobbiesChangeHandler} value={hobbies} />
                    </div>
                    {editing &&
                    <button className='btn btn-outline-primary fixed-right' onClick={updateProfileCallback}>Enviar</button>}
                </div>
            }
        </div>
    );
};
