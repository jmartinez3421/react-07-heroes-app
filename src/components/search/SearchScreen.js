import React, { useMemo } from 'react'
import queryString from 'query-string';

import { useLocation } from 'react-router';
import { getHeroByName } from '../../selectors/getHeroeByName';
import { HeroeCard } from '../heroes/HeroeCard';
import { SearchForm } from './SearchForm'

export const SearchScreen = ({history}) => {
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const heroesFiltered = useMemo(() => getHeroByName(q), [q]);

    return (
        <div>
            <div className='row'>

                <div className='col-5'>
                    <SearchForm history={history} />
                </div>

                <div className='col-7'>
                    <h4>Results</h4>
                    <hr />

                    {
                        (q === '') &&
                            <div className='alert alert-info'>
                                Search a hero...
                            </div>
                    }

                    {
                        (q !== '' && heroesFiltered.length === 0) &&
                            <div className='alert alert-danger'>
                                There is no hero with: {q}
                            </div>
                    }

                    {
                    
                        heroesFiltered.map(hero => (
                            <HeroeCard key={hero.id}  heroe={hero} />
                        ))

                    }
                </div>

            </div>
        </div>
    )
}
