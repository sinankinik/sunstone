import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const Sidebar = () => {

  return (
    <div className={styles.container}>
      <div className={styles.sideBarNavigation}>
        <ul>
          <div className={styles.listContainer}>
            <Image
              src="/assets/images/Group 1.png"
              width={20}
              height={20}
              alt="Logo"
              className={styles.icons}
            />
            <li className={styles.text}>Home</li>
          </div>
          <div className={styles.listContainer}>
            <Image
              src="/assets/images/Group 2.png"
              width={20}
              height={20}
              alt="Logo"
              className={styles.icons}
            />
            <li className={styles.text}>API Docs</li>
          </div>
          <div className={styles.listContainer}>
            <Image
              src="/assets/images/Group 3.png"
              width={20}
              height={20}
              alt="Logo"
              className={styles.icons}
            />
            <li className={styles.text}>Applications</li>
          </div>
          <div className={styles.listContainer}>
            <Image
              src="/assets/images/Group 4.png"
              width={20}
              height={20}
              alt="Logo"
              className={styles.icons}
            />
            <li className={styles.text}>Blogs</li>
          </div>
          <div className={styles.listContainer}>
            <Image
              src="/assets/images/Group 5.png"
              width={20}
              height={20}
              alt="Logo"
              className={styles.icons}
            />
            <li className={styles.text}>Hackathon</li>
          </div>
        </ul>
      </div>
      <div className={styles.upgradeBanner}>
        <Image
          src="/assets/images/icon.png"
          width={50}
          height={50}
          alt="Logo"
          className={styles.bannerIcon}
        />
        <h2 className={styles.bannerHeader}>Upgrade to Sunstone Pro member</h2>
        <h2 className={styles.bannerText}>Get full access to all course for 1 month.</h2>
        <div className={styles.btn}>Upgrade to Pro</div>
      </div>
    </div>
  )
}

export default Sidebar