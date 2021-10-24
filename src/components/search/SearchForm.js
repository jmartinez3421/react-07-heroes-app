import React from 'react';
import { useSimpleForm } from '../../hooks/useSimpleForm'

export const SearchForm = ({history}) => {

    const [hero, handleInputChange] = useSimpleForm({name: ''})

    const handleSubmit = (e) => {
        e.preventDefault();
        
        history.push(`?q=${hero.name}`);
    };

    return (
        <>
            <h4>Search your Hero</h4>
            <hr />

            <form onSubmit={handleSubmit}>

                <input
                    type='text'
                    placeholder='Search a hero'
                    className='form-control'
                    value={hero.name}
                    name='name'
                    onChange={e => handleInputChange(e)}
                    autoComplete='off'
                />

                <div className="d-grid gap-2 mt-1">
                    <button
                        className="btn btn-outline-success"
                        type="submit"
                        onSubmit={handleSubmit}
                    >
                        Search
                    </button>
                </div>

            </form>
        </>
    )
}
