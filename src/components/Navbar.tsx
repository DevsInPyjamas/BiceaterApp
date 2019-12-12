import React, {useState} from 'react';
import {WeatherComponent} from "./WeatherComponent";
import {Link} from "react-router-dom";
import {logout} from "../utils/RequestMaker";
import {useHistory} from "react-router";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons'

export const Navbar : React.FC = () => {

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
        <nav className="navbar navbar-expand navbar-light navbar-back mb-5">
            <Link to="/"><span className="navbar-brand mb-0 h1">Biceater</span></Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                </ul>
                <div className="col-md-4">
                    <WeatherComponent/>
                </div>
                <form className="form-inline" onSubmit={(event: any) => event.preventDefault()}>
                    <input className="form-control mr-sm-2" type="search" placeholder="Usuario"
                           aria-label="Search" value={user} onChange={updateUserInput}/>
                    <button className="btn btn-info my-2 my-sm-0" type="submit"  onClick={handleClick}><
                        FontAwesomeIcon icon={faSearch}/>
                    </button>
                </form>
                <div className="divider-vertical"/>
                <Link to="#" className="btn btn-info my-2 my-sm-0" role="button">
                    <FontAwesomeIcon icon={faUser}/>
                </Link>
                <div className="divider-vertical"/>
                <button onClick={doLogout} className='btn btn-info my-2 my-sm-0'>
                    <FontAwesomeIcon icon={faSignOutAlt}/>
                </button>
            </div>
        </nav>
    );
};