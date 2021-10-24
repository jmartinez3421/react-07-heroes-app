import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroeCard } from './HeroeCard';

export const HeroesList = ({publisher}) => {

    const heroes = useMemo(() => getHeroesByPublisher( publisher ), [publisher])

    // const heroes = getHeroesByPublisher( publisher );

    return (
        <div className='row row-cols-2 row-cols-md-3 g-4 animate__animated animate__fadeIn'>
            {
                heroes.map( hero => (
                        <HeroeCard heroe={hero} key={hero.id}/>
                ))
            }
        </div>
    )
}
