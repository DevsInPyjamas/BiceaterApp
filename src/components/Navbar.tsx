import React from 'react';
import {WeatherComponent} from "./WeatherComponent";
import {Link} from "react-router-dom";
import {logout} from "../utils/RequestMaker";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {
    IconLookup,
    IconDefinition,
    findIconDefinition
} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

library.add(fas);

const searchLookup: IconLookup = { prefix: 'fas', iconName: 'search'};
const searchIconDefinition: IconDefinition = findIconDefinition(searchLookup);

const signOutLookup: IconLookup = { prefix: 'fas', iconName: 'sign-out'};
const signOutIconDefinition: IconDefinition = findIconDefinition(signOutLookup);

const profileLookup: IconLookup = { prefix: 'fas', iconName: 'user'};
const profileIconDefinition: IconDefinition = findIconDefinition(profileLookup);

export const Navbar : React.FC = () => {

    const doLogout = () => {
        logout().then(() => {
            window.location.assign('/login');
        });
    };

    return (
        <nav className="navbar navbar-expand navbar-light navbar-back">
            <Link to="/"><span className="navbar-brand mb-0 h1">Biceater</span></Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                </ul>
                <div className="col-md-4">
                    <WeatherComponent/>
                </div>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Usuario" aria-label="Search"/>
                    <button className="btn btn-info" type="submit">
                        <FontAwesomeIcon icon={searchIconDefinition}/>
                    </button>
                </form>
                <div className="divider-vertical"/>
                <Link to="#" className="btn btn-info my-2 my-sm-0" role="button">
                    <FontAwesomeIcon icon={profileIconDefinition}/>
                </Link>
                <div className="divider-vertical"/>
                <button onClick={doLogout} className='btn btn-info my-2 my-sm-0'>
                    <FontAwesomeIcon icon={signOutIconDefinition}/>
                </button>
            </div>
        </nav>
    );
};