import React from 'react';
import styles from "./Profile.module.css";
import Image from 'next/image';


const Profile = ({profileData}) => {
    return (
        <div className={styles.profileSection}>

        <div className={styles.ImageSection}>
          <Image
            className={styles.profileImage}
            src="/default-user.svg"
            alt="Logo Seus"
            width={280}
            height={360}
          />
        </div>

        <div className={styles.contentUserInfo}>

        <div className={styles.welcomeSection}>
          <h2 className={styles.welcomeTitle}>Bienvenido</h2>
          <h1 className={styles.userName}>
            {profileData.name}
          </h1>
        </div>

        <div className={styles.infoSection}>
            <div className={styles.infoItem}>
              <label>Email:</label>
              <p>{profileData.email}</p>
            </div>
            <div className={styles.infoItem}>
              <label>Documento:</label>
              <p>{profileData.document}</p>
            </div>
            <div className={styles.infoItem}>
              <label>Password:</label>
              <p>{profileData.password}</p>
            </div>
        </div>

        <button className={styles.changePasswordButton}>
          Cambiar contraseña
        </button>
      </div>
    </div>
    );
};

export default Profile;