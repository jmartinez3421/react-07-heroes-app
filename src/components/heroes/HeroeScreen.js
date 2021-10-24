import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroesById } from '../../selectors/getHeroeById';

import './heroeScreen.css';

export const HeroeScreen = ({history}) => {

    const {heroeId} = useParams();

    const hero = useMemo(() => getHeroesById(heroeId), [ heroeId ]);

    // const hero = getHeroesById(heroeId);

    if (!hero) {
        return <Redirect to='/' />;
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;
    
    const handleReturn = () => {
        
        if(history.length <= 2){
            if(publisher === 'DC Comics'){
                history.push('/dc');
            }else{
                history.push('/');
            }
        }else{
            history.goBack();
        }
        
    }

    return (
        <div className='row mt-5'>
            <div className='col-4'>
                <img 
                    src={ `../assets/heroes/${heroeId}.jpg` }
                    alt={superhero}
                    className='img-thumbnail animate__animated animate__fadeInTopLeft' 
                    id='heroIMG'
                />
            </div>

            <div className='col-8'>
                <h3>{superhero}</h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'><b> Alter ego: </b>  {alter_ego}</li>
                    <li className='list-group-item'><b> Publisher: </b>  {publisher}</li>
                    <li className='list-group-item'><b> First appearance: </b>  {first_appearance}</li>
                </ul>

                <h5 className='mt-2'>Characters:</h5>
                <p className='text-muted ms-3'>{characters}</p>

                <button 
                    className='btn btn-primary mt-5'
                    onClick={handleReturn}
                >
                    Return
                </button>
            </div>
        </div>
    )
}
