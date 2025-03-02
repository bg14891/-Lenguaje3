import React from 'react';
/*import './Testimonio.css';*/ // Si necesitas estilos específicos para esta sección

const Testimonio = () => {
  return (
    <section className="testimonio">
      <h2>Lo que dicen nuestros clientes</h2>
      <div className="testimonio">
        <p>"Excelente servicio, muy recomendado."</p>
        <p>- Cliente Satisfecho</p>
      </div>
      <div className="testimonio">
        <p>"Me encanta la facilidad de uso."</p>
        <p>- Otro Cliente Satisfecho</p>
      </div>
    </section>
  );
};

export default Testimonio;