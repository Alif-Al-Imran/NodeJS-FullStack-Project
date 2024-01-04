
import styles from './page.module.css'
import Session from '../component/session'

export default function User() {
    
    return (
        <div className={styles.body}>
            <div className={styles.t1}>
                <table>
                    <tr>
                        <td>Template 1</td>
                        <td><a href='/user/ratings'><button>View Ratings</button></a></td>
                        <td><a href='/user/ratings/rate'><button>Give a rating</button></a></td>
                    </tr>
                </table><br></br>
                <a href='/user/media'><button>Follow us on social media</button></a>
                <a href='/user/news'><button>Newsletter Subscription</button></a>
            </div>
        </div>

    );
}