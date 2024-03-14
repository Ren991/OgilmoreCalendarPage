import React from "react";
import CardCursos from './CardCursos';
import CursoNotFound from './CursoNotFound'
import FormCurso from "./FormCurso";
import './Cursos.scss';

export default function Cursos(/* {allCursos} */){/* <div>
            {allCursos.length ? <>{allCursos?.map((curso) => {
            if (curso.status === 'active') {
              return <CardCursos
                id={curso.id}
                key={curso.id}
                name={curso.name}
                image={curso.image}
              />
            } else { return <></> }
          })}</> : <CursoNotFound />}
        </div> */
    return (
        
        <div className="Form">
            <h2>¡Envianos tu inscripción para empezar clases grupales!</h2>
        <FormCurso/>
        </div>
    )
}