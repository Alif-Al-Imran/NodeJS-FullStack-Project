'use client'
import React from 'react';
import { useSearchParams } from 'next/navigation';
import jwt from 'jsonwebtoken'

const KEY = 'ftafsdftyasfdatausfgsxcvsd';
let tkn = null;

export default function Session(){
    const searchParams = useSearchParams(); 

    const username = searchParams.get('username');
    const password = searchParams.get('password');

    const res = ({
        token: jwt.sign({
            username,
            admin: username === 'admin' && password === 'admin'
        }, KEY)
    })
    tkn = res.token;
    if(tkn){
        const json = jwt.decode(tkn);
        const data = JSON.stringify(json);
        let x = 'Welcome ' + data;
       return(
        <p>{x}</p>
       );
        
    }
    else{
        let y = 'Error';
        return(
            <p>{y}</p>
        );
    }  

}