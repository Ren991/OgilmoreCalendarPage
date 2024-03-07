import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import individual from '../../assets/individual.png';
import group from '../../assets/group.png';
import './Opciones.scss';

export default function Opciones() {
    return (
        <div className="opcionesGeneralDiv">
            <div className="titleDiv"><h2>¡Inscribite y Dominá el Inglés!</h2></div>
            <div className="cardsDiv">
            <Card className="cardDiv" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={individual} />
                <Card.Body>
                    <Card.Title>Cursos Grupales</Card.Title>
                    <Card.Text>
                        Explora nuevas fronteras con nuestros cursos de inglés
                    </Card.Text>
                    <Button variant="primary" href="/Cursos">Inscribirme</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={group} />
                <Card.Body>
                    <Card.Title>Clases Personalizadas</Card.Title>
                    <Card.Text>
                        Avanza a tu propio ritmo con nuestras clases personalizadas.
                    </Card.Text>
                    <Button variant="primary" href="/ClasesPersonalizadas">Inscribirme</Button>
                </Card.Body>
            </Card>
            </div>
        </div>
    )
}