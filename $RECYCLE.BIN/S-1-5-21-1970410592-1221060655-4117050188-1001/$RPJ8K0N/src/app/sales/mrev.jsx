'use client'
import { useState, useEffect } from 'react'

export default function Mrev() {
    const [alldata, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:3100/revenue/getall')
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
            <th>Month</th>
            <th>Revenue</th>
            </tr>
            {alldata.map((data) => (
                <tr>
                   <td>{data.month}</td>
                   <td>${data.m_revenue}</td>
                </tr>

            ))}
        </table>
    );
}