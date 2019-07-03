import React, {useState} from 'react';


function Formulario({consultarAPILetra}){
    
    const [busqueda, agregarBusqueda] = useState({
        artista: '',
        cancion: ''
    })

    // Funcion para actualizar el State de los inputs
    const aztualizarState = e => {
        agregarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
        
    }

    // Cuando hacemos submit al form
    const enviarInfomacion = e => {
        e.preventDefault();
        consultarAPILetra(busqueda);
    }

    return (
        <div className="bg-info">
          <div className="container">
              <div className="row">
                  <form onSubmit={enviarInfomacion}
                    className="col card text-white bg-transparent  mb-5 pt-5 pb-2">
                      <fieldset>
                          <legend className="text-center">Buscador Letras Canciones</legend>
                          <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Artista</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="artista" 
                                        onChange={aztualizarState}
                                        placeholder="Nombre Artista" 
                                        required
                                    />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Canción</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="cancion"
                                        onChange={aztualizarState} 
                                        placeholder="Nombre Canción" 
                                        required
                                    />
                                </div>
                              </div>
                          </div>
                          <button type="submit" className="btn btn-primary float-right">Buscar</button>
                      </fieldset>
                  </form>
              </div>
          </div>
      </div>
    )
}

export default Formulario;