'use client'
import axiosGlobal from '@/lib/axios'
import axios from 'axios'
import React from 'react'


export default function ComponenteTeste() {

    async function handleFetch() {
        await axios.post('/api/testar')
    }
    return (
        <button onClick={() => handleFetch()}>Criar</button>
    )
}
