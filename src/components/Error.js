import React from 'react';

const Error = () => {
    return ( 
        <div class="alert alert-dark" role="alert">
            <h4 class="alert-heading">Información:</h4>
            <p> <i>Nota: </i> Escribir bien los campos si el problema persiste se debe a que la música que estás buscando no se encuentra registrada en la API <a href="https://bit.ly/2NwheXQ" className="alert-link">Mas Informacion Sobre la Api</a> </p>
            <hr />
        </div>

     );
}
 
export default Error;