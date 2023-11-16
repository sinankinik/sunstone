import Image from 'next/image'
import styles from './page.module.css'
import ProfileHeader from '@/components/profileHeader/ProfileHeader'
import Body from '@/components/body/Body'


export default function Page() {
  return (
    <div className={styles.container}>
      <ProfileHeader />
      <Body />
    </div>
  )
}
