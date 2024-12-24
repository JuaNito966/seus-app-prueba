'use client';

import { useState } from 'react';
import styles from './ExperienceForm.module.css';
import Image from 'next/image';
import Container from '../Container/Container';

export default function ExperienceForm() {
    const [workEntries, setWorkEntries] = useState([{
        position: '',
        company: '',
        startDate: '',
        endDate: '',
        achievements: '',
        currentlyWorking: false,
        id: Date.now()
    }]);

    const addEntry = () => {
        setWorkEntries(prev => [...prev, {
            position: '',
            company: '',
            startDate: '',
            endDate: '',
            achievements: '',
            currentlyWorking: false,
            id: Date.now()
        }]);
    };

    const handleChange = (id, field, value) => {
        setWorkEntries(prev =>
            prev.map(entry =>
                entry.id === id ? { ...entry, [field]: value } : entry
            )
        );
    };

    const removeEntry = (id) => {
        setWorkEntries(prev => prev.filter(entry => entry.id !== id));
    };

    return (
        <Container backgroundColor={'#023D6A'} >
            <div className={styles.container}>
                <h2 className={styles.title}>Experiencia laboral</h2>

                {workEntries.map((entry) => (
                    <div key={entry.id} className={styles.entryContainer}>
                        <div className={styles.formGroup}>
                            <label>Cargo</label>
                            <input
                                type="text"
                                value={entry.position}
                                onChange={(e) => handleChange(entry.id, 'position', e.target.value)}
                                placeholder="Ingresa el cargo"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label>Empresa</label>
                            <input
                                type="text"
                                value={entry.company}
                                onChange={(e) => handleChange(entry.id, 'company', e.target.value)}
                                placeholder="Ingresa la empresa"
                            />
                        </div>

                        <div className={styles.dateContainer}>
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
                                    disabled={entry.currentlyWorking}
                                />
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

                        <div className={styles.formGroup}>
                            <label>Menciona 3 principales logros</label>
                            <textarea
                                value={entry.achievements}
                                onChange={(e) => handleChange(entry.id, 'achievements', e.target.value)}
                                placeholder="Describe tus principales logros"
                            />
                        </div>

                        <div className={styles.switchContainer}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={entry.currentlyWorking}
                                    onChange={(e) => handleChange(entry.id, 'currentlyWorking', e.target.checked)}
                                />
                                Trabajo aquí actualmente
                            </label>
                        </div>
                    </div>
                ))}

                <div className={styles.buttonGroup}>
                    <button className={styles.saveButton} type="button">Guardar</button>
                    <button className={styles.addButton} onClick={addEntry} type="button">✚ Añadir</button>
                </div>
            </div>
        </Container>

    );
}