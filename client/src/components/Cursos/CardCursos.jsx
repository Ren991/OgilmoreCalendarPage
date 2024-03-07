import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Cursos({id, name, key, image}) {

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
{/*                  <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        {descripcionCurso}
                    </Card.Text> */}
                    <Button href="#">Completá el formulario</Button>
                </Card.Body>
            </Card>
        </div>
    );
}