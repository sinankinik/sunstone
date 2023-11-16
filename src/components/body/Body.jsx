import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const Body = () => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <h2 className={styles.getStarted}>Get Started</h2>
          <h2 className={styles.bodyH2}>What’s Sunstone? </h2>
          <p className={styles.bodyP}>Our Services We offer a diverse range of services to meet the unique needs of our clients. We provide comprehensive solutions that drive success. Explore our services to find out how we can help you achieve your goals.</p>
          <h2 className={styles.bodyH2}>How can I build production-ready apps on Sunstone?</h2>
          <p className={styles.bodyP}>Our Services We offer a diverse range of services to meet the unique needs of our clients. We provide comprehensive solutions that drive success. Explore our services to find out how we can help you achieve your goals.</p>
          <h2 className={styles.bodyH2}>Why should I use Sunstone?</h2>
          <p className={styles.bodyP}>Our Services We offer a diverse range of services to meet the unique needs of our clients. We provide comprehensive solutions that drive success. Explore our services to find out how we can help you achieve your goals.</p>
        </div>
        <div>
          <Image
            src="/assets/images/get_started 1.png"
            width={304}
            height={271}
            alt="Logo"
            className={styles.bodyImage}
          />
        </div>
      </div>
      <div className={styles.z}>
        <div className={styles.popupContainer}>
          <div className={styles.popupFirstContainer}>
            <div>
              <Image
                src="/assets/images/image18.png"
                width={33.9}
                height={33.84}
                alt="Logo"
                className={styles.avatar}
              />
            </div>
            <div className={styles.popupFirstTextContainer }>
              <h2 className={styles.popupH2}>Alexander Gerrard</h2>
              <h3 className={styles.popupEmail}>alexander@email.com</h3>
            </div>
          </div>
          <div className={styles.popupSecondContainer}>
            <div className={styles.popupSecondTextContainer }>
              <h3 className={styles.popupH3}>Profile</h3>
              <h3 className={styles.popupH3}>Settings</h3>
            </div>
          </div>
          <div className={styles.popupSecondContainer}>
            <div className={styles.popupSecondTextContainer }>
              <h3 className={styles.popupH3}>Sign Out</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Body