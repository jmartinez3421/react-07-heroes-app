import React from 'react'
import { Link } from 'react-router-dom';

const heroImages = require.context('../../assets/heroes', true);

export const HeroeCard = ({heroe}) => {
    const { 
        id,
        superhero,
        alter_ego,
        first_appearance,
        characters
    } = heroe;

    return (
        <div className='col animate__animated fadeIn'>
            <div className="card mb-3" style={{maxWidth: 540}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={ heroImages(`./${id}.jpg`) } className="img-fluid rounded-start" alt={superhero} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            {
                                (characters !== alter_ego)
                                    && <p className='card-text'><small>{characters}</small></p>
                            }
                            <p className='card-text'><small className='text-muted'>{first_appearance}</small></p>

                            <Link to={`./hero/${id}`}>
                                Más...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
        
    )
}
