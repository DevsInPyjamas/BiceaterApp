import React, {useState} from 'react';
import {WeatherComponent} from "./WeatherComponent";
import {Link} from "react-router-dom";
import {logout} from "../utils/RequestMaker";
import {useHistory} from "react-router";

interface userProps {

}

export const Navbar : React.FC<userProps> = (props) => {

    const history = useHistory();
    const [user,setUser] = useState<string>("");

    const doLogout = () => {
        logout().then(() => {
            window.location.assign('/login');
        });
    };

    function updateUserInput(event:any) {
        setUser(event.target.value);
    }

    function handleClick(event: any) {
        history.push(`/search/${user}`);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/"><span className="navbar-brand mb-0 h1">Biceater</span></Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                </ul>
                <div className="col-md-4">
                    <WeatherComponent/>
                </div>
                <form className="form-inline" onSubmit={(event: any) => event.preventDefault()}>
                    <input className="form-control mr-sm-2" type="search" placeholder="Usuario" aria-label="Search" value={user} onChange={updateUserInput}/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit"  onClick={handleClick}>Buscar</button>
                </form>
                <div className="divider-vertical"/>
                <Link to="#" className="btn btn-primary" role="button">Editar Perfil</Link>
                <div className="divider-vertical"/>
                <button onClick={doLogout} className='btn btn-primary'>Cerrar Sesion</button>
            </div>
        </nav>
    );
};