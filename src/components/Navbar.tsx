import React from 'react';

export const Navbar : React.FC = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">Biceater</span>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Usuario" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
            </form>
        </nav>
    );
};