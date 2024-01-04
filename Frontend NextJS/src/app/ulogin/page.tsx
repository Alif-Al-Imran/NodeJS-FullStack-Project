'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css'

export default function Ulogin() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('Not logged in');

    
    return (
        <div className={styles.body}>
            <div className={styles.t1}>
                <h1>Log In</h1><br></br>
                <form method="POST" action="/login">
                <input type="text" name="username" placeholder='Username' onChange={e => setUsername(e.target.value)} required/><br></br>
                <input type='password' name="password" placeholder='Password' onChange={e => setPassword(e.target.value)} required/><br></br>
                <Link href={{pathname: '/user', query:{username: username, password: password,},}}><button>Log In</button></Link>
                </form>
            </div>
        </div>

    );
}