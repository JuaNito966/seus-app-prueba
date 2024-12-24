'use client'
import React, {useState, useEffect} from 'react';
import Image from 'next/image';


// STYLES
import styles from "./page.module.css";

// COMPONENTS
import Profile from '@/components/Profile/Profile';
import DetailProfile from '@/components/DetailProfile/DetailProfile';
import FormUser from '@/components/FormUser/FormUser';
import AcademicForm from '@/components/AcademicForm/AcademicForm';
import ExperienceForm from '@/components/ExperienceForm/ExperienceForm';
import ComplementForm from '@/components/ComplementForm/ComplementForm';
import Footer from '@/components/Footer/Footer';

export default function Home() {

  const [profileData, setProfileData] = useState({
    name: 'Francisco José Benavides',
    email: 'FRJosé@gmail.com',
    document: 'CC # 1022345789',
    password: '••••••••••••••••••••••••••••'
  });

  useEffect(() => {
    const savedData = localStorage.getItem('profileData');
    if (savedData) {
      setProfileData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('profileData', JSON.stringify(profileData));
  }, [profileData]);

  return (
    <div className={styles.page}>
      <header className={styles.header} style={{backgroundImage: "url(/default-background.jpeg)"}}>    
      <div className={styles.bar}>
        <Image
          src="/logo.svg"
          alt="Logo Seus"
          width={180}
          height={38}
        />
      </div>
      </header>

      <div className={styles.content}>

        <Profile profileData={profileData} />
        <DetailProfile/>
        <FormUser/>
        <AcademicForm/>
        <ExperienceForm/>
        <ComplementForm/>

      </div>

        <Footer/>

    </div>
  );
}

