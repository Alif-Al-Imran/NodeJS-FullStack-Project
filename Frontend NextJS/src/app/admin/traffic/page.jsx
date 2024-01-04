import styles from './page.module.css'
import Traffic from './traffic'


export default function () {
    return (
        <div className={styles.t1}>
            <br></br><br></br><hr className={styles.hr}></hr><br></br><br></br>

            <span className={styles.t2}>
               <Traffic/>
            </span>

            <br></br><hr className={styles.hr}></hr><br></br><br></br>
        </div>

    );
}