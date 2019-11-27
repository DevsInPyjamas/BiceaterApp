import React from 'react';
import {Link} from "react-router-dom";

export const Navbar : React.FC<any> = (props) => {

    const {user,onChangeUser} = props;


    const onSubmit = () => {
        return ( <Link  to="/userSearch" />);
    };

    return (
        <nav className="navbar navbar-dark bg-dark">
            <span className="navbar-brand mb-0 h1">Biceater</span>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="text" placeholder="Usuario" aria-label="Search" value={user}  onChange={onChangeUser}  />
                <button className="btn btn-light" type="submit" onClick={onSubmit}> Buscar </button>
            </form>
        </nav>
    );
};