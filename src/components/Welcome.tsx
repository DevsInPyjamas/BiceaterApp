import React from 'react';
import {Navbar} from "./Navbar";
import {MapComponent} from "./MapComponent";

export const Welcome: React.FC = () => {

    return (
        <div className="container">
            <Navbar/>
            <div className="row" style={{marginTop: "10px"}}>
                <div className="col-8">
                    <div className="card">
                        <div className="card-body">
                            Apitiempo
                        </div>
                    </div>
                </div>

                <div className="col-4">

                    <button type="button" className="btn btn-primary" style={{float: "right"}}>Editar Perfil</button>

                </div>
            </div>
            <div className="row" style={{marginTop: "20px", marginBottom: "20px"}}>

                <div className="col" style={{justifyContent: "center"}}><MapComponent/></div>

            </div>
            <div className="row" style={{marginBottom: "20px"}}>
                <div className="col-6">

                    <div className="card">
                        <div className="card-body">
                            <button type="button" style={{justifyContent: "center"}} className="btn btn-primary">Parada
                                mas cercana
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-6">

                    <div className="card">
                        <div className="card-body">
                            <button type="button" style={{justifyContent: "center"}} className="btn btn-primary">Buscar
                                Parada
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};
