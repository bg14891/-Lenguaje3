import React from 'react';
import './Home.css';
import Testimonio from './Testimonio';

function Home() {
  return (
    <div className="Home">
      <header className="encabezado">
        <h1>Bienvenido a Nuestra LandingPage</h1>
        <p>Un lugar donde encontrarás soluciones increíbles.</p>
        <button className="cta-button">¡Comienza ahora!</button>
      </header>
          
      <section className="tarjetas">  
        <div className="tarjeta">
          <h3>Característica 1</h3>
          <p>Descripción de la característica 1.</p>
        </div>
        <div className="tarjeta">
          <h3>Característica 2</h3>
          <p>Descripción de la característica 2.</p>
        </div>
        <div className="tarjeta">
          <h3>Característica 3</h3>
          <p>Descripción de la característica 3.</p>
        </div>
      </section>

      <Testimonio/>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Mi Empresa. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;