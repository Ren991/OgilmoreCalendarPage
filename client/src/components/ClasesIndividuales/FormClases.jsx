import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./FormClase.scss";

function FormClases() {
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => { // Se captura el dia que seleccionó el usuario en el localstorage
    const dateFromLocalStorage = localStorage.getItem("selectedDate");
    setSelectedDate(dateFromLocalStorage);
  }, []);

  console.log(selectedDate);
  return (
    <div className="Form">
      <h2>¡Envianos tu inscripción para empezar clases virtuales!</h2>
      <Form>
        <div className="Nombre">
          <Form.Group className="NombreEtiqueta" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="name" placeholder="Carolina" />
          </Form.Group>
          <Form.Group className="NombreEtiqueta">
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="surname" placeholder="Perez" />
          </Form.Group>
        </div>

        <Form.Group className="totalDiv">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="ejemplo@ejemplo.com" />
          <Form.Text className="text-muted">
            No compartiremos tu email con nadie.
          </Form.Text>
        </Form.Group>

        <Form.Group className="totalDiv">
          <Form.Label>Celular</Form.Label>
          <Form.Control type="celphone" placeholder="1122334455" />
          <Form.Text className="text-muted">
            No compartiremos tu celular con nadie.
          </Form.Text>
        </Form.Group>

        <Form.Group className="totalDiv">
          <Form.Label>Edad</Form.Label>
          <Form.Select aria-label="Edad">
            <option>Selecciona una edad correspondiente</option>
            <option value="1">De 5 a 12</option>
            <option value="2">De 13 a 17</option>
            <option value="3">Más de 18</option>
          </Form.Select>
        </Form.Group>

        <div className="Nombre">
          <Form.Group className="NombreEtiqueta">
            <Form.Label>Nivel de Inglés</Form.Label>
            <Form.Select aria-label="Nivel">
              <option>Selecciona tu nivel de inglés</option>
              <option value="1">1</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="NombreEtiqueta">
            <Form.Label>Horario</Form.Label>
            <Form.Select aria-label="Horario">
              <option>Selecciona un horario</option>
              <option value="1">Jueves 10:30hrs</option>
            </Form.Select>
          </Form.Group>
        </div>

        <Form.Group className="totalDiv">
          <Form.Label>¿Ya realizaste nuestra nivelación?</Form.Label>
          <Form.Check 
            type="checkbox"
            id={`default-checkbox`}
            label="Si"
          />
          <Form.Check 
            type="checkbox"
            id={`default-checkbox`}
            label="No"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
}

export default FormClases;
