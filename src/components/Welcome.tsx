import React, {useEffect, useState} from 'react';

export const Welcome : React.FC = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-8"> Tiempo</div>

                <div className="col-6 col-md-4">.
                    <button className='btn btn-outline-info'>
                        Editar Perfil
                    </button>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-2"> </div>
                <div className="col-sm-8">Mapa Aqui</div>
                <div className="col-sm-2"> </div>
            </div>

            <div className="row">
                <div className="col-sm-2"> <button className='btn btn-outline-info'>
                    Parada más cercana
                </button> </div>
                <div className="col-sm-8"> </div>
                <div className="col-sm-2"> <button className='btn btn-outline-info'>
                    Buscar parada
                </button> </div>
            </div>
        </div>
    );
};
