import React, {useState, useCallback} from 'react';
import { datosAbiertos } from '../utils/RequestMaker';
import {Navbar} from "./Navbar";
import {MapComponent} from "./MapComponent";


export const Parada : React.FC = () => {

    const range = (start: number, end: number) => {
        return (new Array(end - start + 1)).fill(undefined).map((_, i) => i + start);
    }

    const [parada, setParada] = useState({});

    const callback = useCallback(() => {
        datosAbiertos().then((res: any) => {
            console.log(res);
            setParada(res);
        })
    }, []);

    return (
    <div className="container">
    <Navbar/>
      <div className="row" style={{marginTop: "10px"}}>
                <div className="col-6">
                  <div className="card">
                    <div className="card-body">
                      Estacion XXX
                    </div>
                  </div>
                </div>

                <div className="col-3">
                   <div className="card">
                       <div className="card-body">
                           <select className="form-control" style={{marginRight: "10px"}}>
                             {range(1, 10).map((el) => <option value={el} key={el}>{el}</option>)}
                            </select>

                </div>
                    </div>
                     </div>
                     <div className="col-3">
                                        <div className="card">
                                            <div className="card-body">
                                                 <button type="button" className="btn btn-primary"  style= {{float: "left"}}>Valora  !</button>

                                     </div>
                                         </div>
                                          </div>

      </div>
      <div className="row" style={{marginTop: "20px",marginBottom: "20px"}}>

        <div className="col" style={{justifyContent: "center"}}> <MapComponent/> </div>

      </div>
      <div className="row" style={{marginBottom: "20px"}}>
              <div className="col-2">

              </div>
              <div className="col-8">
                <div className="card">
                                   <div  className="card-body">
                                     <h5 className="card-title">Comentario</h5>
                                     <form onClick={(event: any) => {event.preventDefault()}}>
                                                    <div>
                                                    <textarea name="comments" id="comments" style={{width: "686px",resize: "both",height: "136px", marginBottom: "10px"}}>
                                                    Hey... say something!
                                                    </textarea>
                                                    </div>
                                                    <button type="button" className="btn btn-primary">Comenta!</button>
                                                    </form>
                                   </div>
                                 </div>
              </div>
              <div className="col-2">

              </div>
            </div>
    </div>

    );
};




