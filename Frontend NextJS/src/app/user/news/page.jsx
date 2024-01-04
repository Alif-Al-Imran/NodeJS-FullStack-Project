'use client'
import styles from './page.module.css'

export default function Media() {
    async function onClick(event){
        event.preventDefault();
        alert("Successfully subscribed to newsletter!");
    }
    return (
        <div className={styles.body}>
            <div className={styles.t1}>
                <p className={styles.t2}>Never miss an update!</p><br></br>
                <p className={styles.t3}>Subscribe to keep your fingers on the tech pulse.</p><br></br>
                <input type="text" placeholder='  Enter your Email' className={styles.t4}/><br></br><br></br>
                <button onClick={onClick} className={styles.button}>Subscribe</button><br></br><br></br>
            </div>
        </div>

    );
}