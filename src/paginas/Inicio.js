import React from 'react';
import { Helmet } from 'react-helmet';

function Inicio() {
  return (
    <div>
      <Helmet>
        <title>Inicio | Mi Sitio Web</title>
      </Helmet>
      <h1>Bienvenido a Nuestro Sitio Web</h1>
      <p>
        Somos una empresa dedicada a brindar las mejores soluciones digitales para nuestros clientes.
        En nuestro sitio encontrarás información útil, servicios de calidad y una comunidad que valora la innovación.
      </p>
      <p>
        Navega por nuestras secciones para conocernos mejor y no dudes en ponerte en contacto si tienes alguna duda o consulta.
      </p>
    </div>
  );
}

export default Inicio;
