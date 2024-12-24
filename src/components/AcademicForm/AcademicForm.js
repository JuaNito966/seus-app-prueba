'use client';

import { useState } from 'react';
import styles from './AcademicForm.module.css';
import Image from 'next/image';
import Container from '../Container/Container';

export default function AcademicForm() {
    const [academicEntries, setAcademicEntries] = useState([{
        title: '',
        institution: '',
        startDate: '',
        endDate: '',
        id: Date.now()
    }]);

    const addEntry = () => {
        setAcademicEntries(prev => [...prev, {
            title: '',
            institution: '',
            startDate: '',
            endDate: '',
            id: Date.now()
        }]);
    };

    const removeEntry = (id) => {
        setAcademicEntries(prev => prev.filter(entry => entry.id !== id));
    };

    const handleChange = (id, field, value) => {
        setAcademicEntries(prev =>
            prev.map(entry =>
                entry.id === id ? { ...entry, [field]: value } : entry
            )
        );
    };

    return (
        <Container backgroundColor={'#C6CBD2'}>
        <div className={styles.container}>
            <h2>Formación académica</h2>

            {academicEntries.map((entry) => (
                <div key={entry.id} className={styles.entryContainer}>

                    <div className={styles.InfoGroup}>
                        <div className={styles.formGroup}>
                            <label>Título obtenido</label>
                            <input
                                type="text"
                                value={entry.title}
                                onChange={(e) => handleChange(entry.id, 'title', e.target.value)}
                                placeholder="Diseño de medios interactivos"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label>Institución</label>
                            <input
                                type="text"
                                value={entry.institution}
                                onChange={(e) => handleChange(entry.id, 'institution', e.target.value)}
                                placeholder="Universidad Icesi"
                            />
                        </div>
                    </div>


                    <div className={styles.dateGroup}>
                        <div className={styles.formGroup}>
                            <label>Fecha de inicio</label>
                            <input
                                type="date"
                                value={entry.startDate}
                                onChange={(e) => handleChange(entry.id, 'startDate', e.target.value)}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label>Fecha de terminación</label>
                            <input
                                type="date"
                                value={entry.endDate}
                                onChange={(e) => handleChange(entry.id, 'endDate', e.target.value)}
                            />
                        </div>


                    </div>

                    <button
                        className={styles.deleteButton}
                        onClick={() => removeEntry(entry.id)}
                        type="button"
                    >
                        <Image
                            src="/trash.svg"
                            alt="Logo Seus"
                            width={24}
                            height={24}
                        />
                    </button>
                </div>
            ))}

            <div className={styles.buttonGroup}>
                <button className={styles.saveButton} type="button">
                    <Image
                        src="/save.svg"
                        alt="Logo Seus"
                        width={24}
                        height={24}
                    />
                    Guardar
                </button>
                <button className={styles.addButton} onClick={addEntry} type="button">✚ Añadir</button>
            </div>
        </div>
        </Container>
    );
}