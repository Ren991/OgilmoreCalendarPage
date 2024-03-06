import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Opciones() {
    return (
        <div className="opcionesGeneralDiv">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Explora nuevas fronteras con nuestros cursos de inglés
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Avanza a tu propio ritmo con nuestras clases personalizadas
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}