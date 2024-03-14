//Pagina para que elijan si quieren info de cursos o de clases indiv
import React from 'react';
import students from "../../assets/students.jpg"
import right from "../../assets/right.gif"
import  "./middlePage.css"
import { Link } from 'react-router-dom';

function MiddlePage() {

  return (
    <div className="middle-page" style={{backgroundColor: '#1A2F44'}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="red-bar d-flex justify-content-between align-items-center py-3" style={{height:"50px",backgroundColor: '#D91E1E', borderRadius: '5px',marginTop:"25px"}}>
              <div className="text-white" style={{flexGrow: 1, padding: '10px'}}>Accedé a nuestro campus virtual y realiza la nivelación</div>
              <button className="btn btn-primary" style={{backgroundColor: '#1A2F44',marginRight:"10px",height:"auto",minHeight:"auto"}}>Ver ahora</button>
            </div>
            <h2 className="text-white mt-4">Comunícate en inglés</h2>
            <h1 className="text-uppercase text-white">100% ONLINE</h1>
            <h3 className="font-weight-bold text-white">¡Inscríbete YA!</h3>
            <Link to="/InscripcionesHome" >
              <button className="button-35" role="button" style={{width:"250px"}} >Inscripciones !!</button>

            </Link>
            
            
            <hr style={{borderColor: 'white'}} />
            <div className="box-container mt-4" style={{ margin: '0 auto', background: 'rgb(142,142,149)',
                background: 'linear-gradient(90deg, rgba(142,142,149,1) 0%, rgba(255,255,255,1) 59%, rgba(237,237,237,1) 100%)',borderRadius:"0.5rem"}}>
              <h2 className="text-center">Perdé el miedo de hablar en inglés</h2>
              <div className="row mt-4">
                <div className="col-md-6">
                  <img src={students} alt="Imagen" className="img-fluid" />
                </div>
                <div className="col-md-6">
                  <p>Disfruta de un portal incluido en tu curso con éxamenes certificados sin costo adicional
                    . Además, contás con clases grupales e individuales para reforzar tus conocimientos, aprender
                    nuevas formas de comunicarte en inglés y de practicar tu speaking 
                    con otros compañeros y profesores
                  </p>
                  <ul>
                    <li>
                        <p>Clases online en vivo.</p>
                    </li>
                    <li>
                        <p>Aula virtual disponible las 24hs.</p>
                    </li>
                    <li>
                        <p>Tutorías de consulta.</p>
                    </li>
                  </ul>
                  <div style={{display:"flex"}}>
                    <h1>First class</h1>
                    <img src={right} alt="Gif " height={50}/>
                    <h1>Free trial</h1>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddlePage;