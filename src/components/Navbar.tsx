import React from 'react';

export const Navbar : React.FC = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <span className="navbar-brand mb-0 h1">Biceater</span>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Usuario" aria-label="Search"/>
                <button className="btn btn-light" type="submit">Buscar</button>
            </form>
        </nav>
    );
};