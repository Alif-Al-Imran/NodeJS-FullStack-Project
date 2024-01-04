'use client'
import { useState, useEffect } from 'react'

export default function Yrev() {
    const [alldata, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:3100/revenue/Dec23')
            .then((res) => res.json())
            .then((alldata) => {
                setData(alldata)
                setLoading(false)
            })
    }, [])
    if (isLoading) return <p>Loading...</p>
    if (!alldata) return <p>No profile data</p>

    return (
        <table width={300}>
            <tr>
            <th>Year</th>
            <th>Revenue</th>
            </tr>
                <tr>
                   <td>2023</td>
                   <td>${alldata.y_revenue}</td>
                </tr>
        </table>
    );
}