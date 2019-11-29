import React from 'react';
import {WeatherComponent} from "./WeatherComponent";
import {Link} from "react-router-dom";


export const Navbar : React.FC<any> = (props) => {

    const {user,onChangeUser} = props;


    const onSubmit = () => {
        return ( <Link  to="/userSearch" />);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/"><span className="navbar-brand mb-0 h1">Biceater</span></Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                </ul>
                <div className="col-md-4">
                    <WeatherComponent/>
                </div>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Usuario" aria-label="Search" value={user}  onChange={onChangeUser}/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={onSubmit}>Buscar</button>
                </form>
                <div className="divider-vertical"/>
                <button type="button" className="btn btn-primary"  style= {{float: "right"}}>Editar Perfil</button>
            </div>
        </nav>
    );
};