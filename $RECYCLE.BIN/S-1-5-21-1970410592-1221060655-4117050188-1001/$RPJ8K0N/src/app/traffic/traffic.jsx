'use client'
import { useState, useEffect } from 'react'

export default function Total() {
    const [alldata, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:3100/traffic/getall')
            .then((res) => res.json())
            .then((alldata) => {
                setData(alldata)
                setLoading(false)
            })
    }, [])
    if (isLoading) return <p>Loading...</p>
    if (!alldata) return <p>No profile data</p>

    let x = 0;
    let y = 0;
    let q = 0;
    {
        alldata.map((data) => (
            x = x + data.page_views
        ))
    }
    {
        alldata.map((data) => (
            y = y + data.time_on_page
        ))
    }
    {
        alldata.map((data) => (
            q = q + data.sessions
        ))
    }

    return (
        <table width={600}>
            <tr>
                <th>Total Unique Page Views</th>
                <th>Average Time On Page</th>
                <th>Sessions</th>
            </tr>
                <tr>
                    <td>{x}</td>
                    <td>{y}</td>
                    <td>{q}</td>
                </tr>
        </table>
    );
}