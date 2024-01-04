'use client'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

export default function Rate() {
    const router = useRouter()
    async function onSubmit(event) {
        event.preventDefault()

        const formData = new FormData(event.target)
        const rawData = JSON.stringify(Object.fromEntries(formData));
        const response = await fetch('http://localhost:3100/ratings/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: rawData,
        })


        // Handle response if necessary
        const data = await response.json();
        if(response.ok)
        {
            alert("Success!")
            router.push('/');
        }
        else
        {
            alert(response.status)
        }
        
        
        // ...
    }

    return (
        <div className={styles.body}>
        <form onSubmit={onSubmit} >
            <label>Rating: </label>
            <input type="radio" id="rating" name="rating" value="1" required/>
            <label for="rating" className={styles.space}>1</label>
            <input type="radio" id="rating" name="rating" value="2" required/>
            <label for="rating" className={styles.space}>2</label>
            <input type="radio" id="rating" name="rating" value="3" required/>
            <label for="rating" className={styles.space}>3</label>
            <input type="radio" id="rating" name="rating" value="4" required/>
            <label for="rating" className={styles.space}>4</label>
            <input type="radio" id="rating" name="rating" value="5" required/>
            <label for="rating" className={styles.space}>5</label><br></br>
            <input type="number" name="u_id" placeholder='User ID' required/><br></br>
            <input type="text" name="u_name" placeholder='User Name' required/><br></br>
            <input type="text" name="review" placeholder='Enter Review' required/><br></br>
            <input type="number" name="t_id" placeholder='Template ID' required/><br></br>
            <br></br><br></br>
            <button type="submit">Submit</button>
        </form>
        </div>
    )
}