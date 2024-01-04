import styles from './page.module.css'
import Image from 'next/image'
import facebook from '/public/facebook.png'
import youtube from '/public/youtube.png'
import twitter from '/public/twitter.png'


export default function Media() {
    return (
        <div className={styles.body}>
            <div className={styles.t1}>
                <p>Follow on social media</p><br></br>
                <a href="https://www.facebook.com"><Image src={facebook} width={50} height={50} alt="facebook" /></a>
                <a href="https://www.youtube.com"><Image src={youtube} width={50} height={50} alt="youtube" /></a>
                <a href="https://www.twitter.com"><Image src={twitter} width={50} height={50} alt="twitter" /></a>
            </div>
        </div>

    );
}