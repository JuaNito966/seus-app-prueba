import React from 'react';
import styles from "./Footer.module.css";
import Image from 'next/image';


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div
                className={styles.footercontentImage}
                style={{ backgroundImage: "url(/logo-white.svg)" }}
            >
            </div>
            <div className={styles.footercontentInfo}>
                <p>Powered by SolucionSoft.com</p>

                <div className={styles.footercontentInfoLinks}>
                    <Image
                        src="/facebook.svg"
                        alt="Logo Seus"
                        width={25}
                        height={25}
                    /> <Image
                        src="/x.svg"
                        alt="Logo Seus"
                        width={25}
                        height={25}
                    /> <Image
                        src="/instagram.svg"
                        alt="Logo Seus"
                        width={25}
                        height={25}
                    />
                </div>
            </div>
        </footer >
    );
};

export default Footer;