import React from 'react'
import { HeroesList } from '../heroes/HeroesList'

export const MarvelScreen = () => {
    return (
        <>
            <h1>Marvel Heroes</h1>
            <hr />
            <HeroesList publisher='Marvel Comics' />
        </>
    )
}
