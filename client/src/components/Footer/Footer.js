import React from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../assets/logo_marca.png'; // Importa tu imagen de logo aquí

function Footer() {
    return (
      <footer className="bg-light py-5">
        <Container>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div>
              <img
                src={logo}
                height="40"
                className="d-inline-block align-top  mr-3"
                alt="Logo"
              />
              La cultural inglesa Argentina
            </div>
            <div className="d-flex justify-content-end flex-wrap">
              <a href="#home" className="text-dark mx-md-4 mx-2 text-decoration-none">Home</a>
              <a href="#study" className="text-dark mx-md-4 mx-2 text-decoration-none">Study online</a>
              <a href="#campus" className="text-dark mx-md-4 mx-2 text-decoration-none">Campus virtual</a>
              <a href="#contact" className="text-dark mx-md-4 mx-2 text-decoration-none">Contacto</a>
            </div>
          </div>
        </Container>
      </footer>
    );
  }

export default Footer;
