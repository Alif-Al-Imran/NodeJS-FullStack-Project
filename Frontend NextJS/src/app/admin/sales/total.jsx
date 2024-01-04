'use client'
import { useState, useEffect } from 'react'

export default function Total() {
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

    let x = 0;
    let y = 0;
    {
        alldata.map((data) => (
            x = x + data.invoices
        ))
    }
    {
        alldata.map((data) => (
            y = y + data.orders
        ))
    }

    return (
        <table width={300}>
            <tr>
                <th>Total Invoices</th>
                <th>Total Orders</th>
            </tr>
                <tr>
                    <td>{x}</td>
                    <td>{y}</td>
                </tr>
        </table>
    );
}