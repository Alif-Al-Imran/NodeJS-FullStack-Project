'use client'
import { useState, useEffect } from 'react'

export default function Salesstat() {
    const [salesdata, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:3100/salesstat/getall')
            .then((res) => res.json())
            .then((salesdata) => {
                setData(salesdata)
                setLoading(false)
            })
    }, [])
    if (isLoading) return <p>Loading...</p>
    if (!salesdata) return <p>No profile data</p>


    return (
                <table width={300}>
                        <tr>
                            <th>Template Name</th>
                            <th>Downloads</th>
                        </tr>
                            {salesdata.map((data) => (
                                <tr>
                                    <td>{data.t_name}</td>
                                    <td>{data.sales}</td>
                                </tr>
                                
                                ))}
                </table>
    );
}