'use client'
import { useState, useEffect } from 'react'
import styles from './page.module.css'

export default function Total() {
    const [alldata, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:3100/ratings/getall')
            .then((res) => res.json())
            .then((alldata) => {
                setData(alldata)
                setLoading(false)
            })
    }, [])
    if (isLoading) return <p>Loading...</p>
    if (!alldata) return <p>No profile data</p>

    let x = 0;
    let count = 0;
    let avg = 0;
    {
        alldata.map((data) => {
            if (data.rating != null) {
                x = x + data.rating;
                count = count + 1;
            }

        })
    }
    avg = x / count;

    return (
        <div>
            <div className={styles.t1}>
            <h2>Template</h2><br></br>
            <p>Rating: {avg}</p><br></br>
            <p>Total reviews: {count}</p><br></br>
            </div>
            <hr></hr>
            <table width={600}>
                {
                    alldata.map((data) => (
                       <tr>
                        <p>Rating: {data.rating}</p><br></br>
                        <p>Review: {data.review}</p><br></br>
                        <p>Given by: {data.u_name}</p>
                        <hr></hr>
                       </tr>

                    ))
                }
            </table>
        </div>
    );
}