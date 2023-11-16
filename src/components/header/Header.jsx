
import styles from './page.module.css'
import Image from 'next/image';

export default function Header() {
    return (
        <header>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <Image
                        src="/assets/images/logo.png"
                        width={42.63}
                        height={42}
                        alt="Logo"
                        className={styles.logo}
                    />
                    <div className={styles.logoName}>Sunstone</div>
                </div>
                <div className={styles.login}>
                    <div className={styles.loginContainer}>
                        <Image
                            src="/assets/images/point.png"
                            width={20}
                            height={20}
                            alt="Logo"
                        />
                        <Image
                            src="/assets/icons/Line 5.svg"
                            width={20}
                            height={20}
                            alt="Logo"
                        />
                        <Image
                            src="/assets/images/image18.png"
                            width={33.9}
                            height={33.84}
                            alt="Logo"
                            className={styles.avatar}
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}