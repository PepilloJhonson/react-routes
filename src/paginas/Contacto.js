import React from 'react';
import { Helmet } from 'react-helmet';

function Contacto() {
  return (
    <div>
      <Helmet>
        <title>Contacto | Mi Sitio Web</title>
      </Helmet>
      <h1>Contáctanos</h1>
      <p>
        ¿Tienes alguna pregunta o necesitas más información? ¡Estamos aquí para ayudarte!
        No dudes en escribirnos o llamarnos, y un miembro de nuestro equipo se pondrá en contacto contigo lo antes posible.
      </p>
      <h2>Información de Contacto</h2>
      <ul>
        <li><strong>Teléfono:</strong> +1 (555) 123-4567</li>
        <li><strong>Email:</strong> contacto@ejemplo.com</li>
        <li><strong>Dirección:</strong> Calle Falsa 123, Ciudad , País</li>
      </ul>
      <p>
        También puedes seguirnos en nuestras redes sociales para mantenerte al día con las últimas novedades.
      </p>
    </div>
  );
}

export default Contacto;
