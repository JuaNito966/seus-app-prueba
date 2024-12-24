'use client'

import React from 'react';
import styles from "./DetailProfile.module.css";
import Image from 'next/image';
import Container from '../Container/Container';

const areas = [
    { id: 'areas-humanas', name: 'Áreas humanas' },
    { id: 'areas-financieras', name: 'Áreas Financieras' },
    { id: 'areas-comerciales', name: 'Área Comerciales' },
    { id: 'areas-logisticas', name: 'Áreas de Logística' },
    { id: 'generica', name: 'Genérica' }
];

const schedules = [
    { id: 'presencial', name: 'Presencial' },
    { id: 'remoto', name: 'Remoto' },
    { id: 'hibrido', name: 'Híbrido' },
    { id: 'me-hes-indiferente', name: 'Me es indiferente' }
];

const cultures = [
    { id: 'emocionales', name: 'Emocionales' },
    { id: 'conocimiento', name: 'Conocimiento' },
    { id: 'remoto', name: 'Remoto' },
    { id: 'produccion', name: 'Producción' },
    { id: 'intuitiva', name: 'Intuitiva' },
    { id: 'me-hes-indiferente', name: 'Me es indiferente' }
];

const DetailProfile = () => {
    return (
        <Container backgroundColor={'#EDEEF1'} margin={'40px'}>
            <div className={styles.container}>
                <h2 className={styles.title}>Configura esta sección para un perfil más detallado.</h2>

                <section className={styles.section}>
                    <h3>Tipo de formación y empleo que buscas:</h3>
                    <div className={styles.optionsGrid}>
                        {areas.map(area => (
                            <div key={area.id} className={styles.circle}>
                                <button className={styles.iconContainer}>
                                    <Image
                                        src={`/${area.id}.svg`}
                                        alt={`${area.name} icon`}
                                        width={62}
                                        height={61}
                                    />
                                </button>
                                <span className={styles.span}>{area.name}</span>
                            </div>

                        ))}
                    </div>
                </section>

                <section className={styles.section}>
                    <h3>Opciones de jornadas:</h3>
                    <div className={styles.optionsGrid}>
                        {schedules.map(schedule => (
                            <div key={schedule.id} className={styles.circle}>
                                <button className={styles.iconContainer}>
                                    <Image
                                        src={`/${schedule.id}.svg`}
                                        alt={`${schedule.name} icon`}
                                        width={62}
                                        height={61}
                                    />
                                </button>
                                <span className={styles.span}>{schedule.name}</span>
                            </div>

                        ))}
                    </div>
                </section>



                <section className={styles.section}>
                    <h3>Qué tipos de culturas te gustan más:</h3>
                    <div className={styles.optionsGrid}>
                        {cultures.map(culture => (
                            <div key={culture.id} className={styles.circle}>
                                <button className={styles.iconContainer}>
                                    <Image
                                        src={`/${culture.id}.svg`}
                                        alt={`${culture.name} icon`}
                                        width={62}
                                        height={61}
                                    />
                                </button>
                                <span className={styles.span}>{culture.name}</span>
                            </div>

                        ))}
                    </div>
                    <p className={styles.note}>Elegir una cultura específica no te descarta de ningún proceso.</p>
                </section>


            </div>
        </Container>


    );
};

export default DetailProfile;