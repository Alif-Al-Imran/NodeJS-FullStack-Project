import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
      <a href="/ulogin"><button className={styles.button}>User Login</button></a><> </><a href="/alogin"><button className={styles.button}>Admin Login</button></a>
      </div>
    </main>
  )
}
