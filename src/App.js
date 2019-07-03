import React, {useState, useEffect, Fragment} from 'react';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import Informacion from './components/Informacion';
import Error from './components/Error';
import axios from 'axios';

function App(){

  // Utilizar useState con 3 states
  const [artista, agregarArtista] = useState('');
  const [letra, agregarLetra] = useState([]);
  const [ error, guardarError ] = useState(false);
  const [info, agregarInfo] = useState({});

  // Metodo para consultar la Api de letras de canciones
  const consultarAPILetra = async busqueda => {
    const {artista, cancion} = busqueda;

    try {
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      // Consultar a la api
      const resultado = await axios(url); 
      console.log(resultado.status);   
      // Agregar el artista 
      agregarArtista(artista);
      //Almacenar letra en el State
      agregarLetra(resultado.data.lyrics);
      guardarError(false)
    } catch (error) {
      if(error){
        guardarError(true)
        return;
      }
    }
  }

  

  useEffect(
  () => {

    // Metodo para consultar la API de informacion
  const consultarAPIInfo = async () =>{
    if(artista){
      const url = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
      const resultado = await axios(url);
      agregarInfo(resultado.data.artists[0]);
    }
  }

    consultarAPIInfo();
  }, [artista])

  
  let componente;
  if(error){
    componente = <Error mensaje='Verificar correctamente los campos escritos' />
  } else {
    componente =
        <div className="row">
          <div className="col-md-6">
              <Informacion 
              info={info}
              />
        </div>
          <div className="col-md-6">
              <Cancion 
              letra={letra}
              />
          </div>
      </div>
  }

  return (
    <Fragment>
      <Formulario 
      consultarAPILetra={consultarAPILetra}
      />
      <div className="container mt-5">
          {componente}
      </div>
    </Fragment>
  )
}

export default App;