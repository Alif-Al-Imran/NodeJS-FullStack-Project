
import styles from './page.module.css'

export default function Alogin() {
    
    return (
        <div className={styles.body}>
            <div className={styles.t1}>
            <h1>Log In</h1><br></br>
                <input type="text" placeholder='Username' required/><br></br>
                <input type='password' placeholder='Password' required/><br></br>
                <a href='/admin'><button>Log In</button></a>
            </div>
        </div>

    );
}