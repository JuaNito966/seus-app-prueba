import React from 'react';
import styles from './ComplementForm.module.css';

const ComplementForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.headerRow}>
          <h3 className={styles.title}>Datos complementarios</h3>
          <span className={styles.optional}>Opcional</span>
        </div>
        <textarea 
          className={styles.textarea}
          placeholder="Añade información complementaria útil para reclutadores"
        />
      </div>

      <div className={styles.section}>
        <h3 className={styles.title}>Elige las 5 competencias que más te caracterizan</h3>
        <select className={styles.select}>
          <option value="">Selecciona</option>
          <option value="">Lectura y escritura</option>
          <option value="">Comunicación</option>
          <option value="">Autonomia</option>
          <option value="">Expresión</option>
          <option value="">Liderazgo</option>
          <option value="">Trabajo en equipo</option>
        </select>
      </div>

      <button className={styles.button}>
        <span className={styles.iconMail}>✉</span>
        Guardar información
      </button>
    </div>
  );
};

export default ComplementForm;