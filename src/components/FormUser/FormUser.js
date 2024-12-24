'use client';

import { useState } from 'react';
import styles from './FromUser.module.css';

export default function FormUser() {
  const [formData, setFormData] = useState({
    salaryRange: '',
    professionalLevel: '',
    fullName: '',
    profession: '',
    specialization: '',
    documentNumber: '',
    city: '',
    willRelocate: false,
    email: '',
    phone: '',
    linkedin: '',
    valueProposition: '',
    workHappiness: '',
    professionalTalent: '',
    projectsImplemented: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleToggle = () => {
    setFormData(prev => ({ ...prev, willRelocate: !prev.willRelocate }));
  };

  return (
    <form className={styles.form}>
      <div className={styles.grid}>
        <div className={styles.formGroup}>
          <label>Rango salarial desde:</label>
          <select name="salaryRange" value={formData.salaryRange} onChange={handleChange}>
            <option value="">Selecciona</option>
            <option value="1">$1.000.000 - $2.000.000</option>
            <option value="2">$2.000.000 - $3.000.000</option>
            <option value="3">$3.000.000+</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label>¿Cuál es tu nivel profesional?</label>
          <select name="professionalLevel" value={formData.professionalLevel} onChange={handleChange}>
            <option value="">Selecciona</option>
            <option value="junior">Junior</option>
            <option value="semi-senior">Semi-Senior</option>
            <option value="senior">Senior</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label>Nombre completo</label>
          <input 
            type="text"
            name="fullName"
            placeholder="Escribe aquí..."
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Profesión</label>
          <input
            type="text"
            name="profession"
            placeholder="Escribe aquí..."
            value={formData.profession}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Especialización</label>
          <input
            type="text"
            name="specialization"
            placeholder="Escribe aquí..."
            value={formData.specialization}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Número de documento</label>
          <input
            type="text"
            name="documentNumber"
            placeholder="Escribe aquí..."
            value={formData.documentNumber}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Ciudad donde buscas empleo</label>
          <select name="city" value={formData.city} onChange={handleChange}>
            <option value="">Selecciona</option>
            <option value="bogota">Bogotá</option>
            <option value="medellin">Medellín</option>
            <option value="cali">Cali</option>
          </select>
        </div>

        <div className={styles.switchGroup}>
          <label>¿Estás dispuesto a trasladarte?</label>
          <button 
            type="button"
            className={`${styles.switch} ${formData.willRelocate ? styles.active : ''}`}
            onClick={handleToggle}
          >
            <span className={styles.slider}></span>
          </button>
        </div>
      </div>

      <div className={styles.grid}>
        <div className={styles.formGroup}>
          <label>Correo electrónico</label>
          <input
            type="email"
            name="email"
            placeholder="Escribe aquí..."
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Número de celular</label>
          <input
            type="tel"
            name="phone"
            placeholder="Escribe aquí..."
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label>LinkedIn</label>
          <input
            type="url"
            name="linkedin"
            placeholder="Escribe aquí..."
            value={formData.linkedin}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={styles.textareaGroup}>
        <label>¿Qué valor agregado le ofreces a una empresa que te contrata? ¿Qué te diferencia de otras personas?</label>
        <textarea
          name="valueProposition"
          placeholder="Escribe aquí..."
          value={formData.valueProposition}
          onChange={handleChange}
        />
      </div>

      <div className={styles.grid}>
        <div className={styles.formGroup}>
          <label>Qué te hace feliz a nivel laboral</label>
          <input
            type="text"
            name="workHappiness"
            placeholder="Escribe aquí..."
            value={formData.workHappiness}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Cuál es tu talento profesional</label>
          <input
            type="text"
            name="professionalTalent"
            placeholder="Escribe aquí..."
            value={formData.professionalTalent}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={styles.textareaGroup}>
        <label>Qué ideas, proyectos o actividades has implementado que quieras contar. / Si no tienes experiencia ¿qué ideas tienes para implementar?</label>
        <textarea
          name="projectsImplemented"
          placeholder="Escribe aquí..."
          value={formData.projectsImplemented}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}