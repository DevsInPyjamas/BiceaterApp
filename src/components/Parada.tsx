import React, {useState, useCallback} from 'react';
import { datosAbiertos } from '../utils/RequestMaker'


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
    <div className="container" style={{marginTop: "10px"}}>
      <div className="row">
                <div className="col-3">
                  <div className="card">
                    <div className="card-body">
                      Estacion XXX
                    </div>
                  </div>
                </div>
                <div className="col-6">

                </div>
                <div className="col-3">
                    <div className="card">
                       <div className="card-body">
                           <select>
                             {range(1, 10).map((el) => <option value={el} key={el}>{el}</option>)}
                            </select>
                             <button>Valorar</button>
                      </div>
                 </div>
                </div>
      </div>
      <div className="row">

        <div className="col"> Mpaa aqio </div>

      </div>
      <div className="row">
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
                                                    <input type="submit" value="Nuevo Comentario" />
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




