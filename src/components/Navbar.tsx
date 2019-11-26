import React, {useState} from 'react';
import {Redirect } from 'react-router';

export const Navbar : React.FC = () => {

    const [user, setUser] = useState("");

    const onSubmit = () => {
        return ( <Redirect  to="/userSearch" />);
    };

    return (
        <nav className="navbar navbar-dark bg-dark">
            <span className="navbar-brand mb-0 h1">Biceater</span>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="text" placeholder="Usuario" aria-label="Search" value={user}  onChange={e => setUser(e.target.value)}  />
                <button className="btn btn-light" type="submit" onClick={onSubmit}> Buscar </button>
            </form>
        </nav>
    );
};