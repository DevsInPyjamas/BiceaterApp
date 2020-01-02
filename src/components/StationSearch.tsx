import React, {useState} from "react";
import {useHistory} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

export const StationSearch : React.FC = () => {

    const history = useHistory();
    const [station,setStation] = useState<string>("");

    function updateStationInput(event:any) {
        setStation(event.target.value);
    }

    function handleClick(event:any){
        history.push(`/resultStation/${station}`)
    }

    return(
        <div className={"container"}>
            <p>Introduzca la calle de la parada deseada para acceder a ella directamente.</p>
            <br/>
            <div className="col-md-4">
                <form className="form-inline" onSubmit={(event: any) => event.preventDefault()}>
                    <input className="form-control mr-sm-2" type="search" placeholder="Calle estación"
                           aria-label="Search" value={station} onChange={updateStationInput}/>
                    <button className="btn btn-info my-2 my-sm-0" type="submit"  onClick={handleClick}><
                        FontAwesomeIcon icon={faSearch}/>
                    </button>
                </form>
            </div>
        </div>
    )
}