import styles from './page.module.css'
import Salesstat from './salesstat'
import Total from './total'
import Mrev from './mrev'
import Yrev from './yrev'


export default function () {
    return (
        <div className={styles.t1}>
            <span className={styles.t2}>
                <Total />
            </span>
            <br></br><br></br><hr className={styles.hr}></hr><br></br><br></br>

            <span className={styles.t3}>
                <h4 className={styles.t4}>Monthly Revenue</h4><br></br>
               <Mrev/>
            </span>

            <span className={styles.t3}>
                <h4 className={styles.t4}>Yearly Revenue</h4><br></br>
                <Yrev/>
            </span>
            <br></br><hr className={styles.hr}></hr><br></br><br></br>

            <span className={styles.t2}>
                <Salesstat />
            </span>
        </div>

    );
}