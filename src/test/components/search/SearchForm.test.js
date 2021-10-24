import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter, Route } from 'react-router';

import {SearchForm} from '../../../components/search/SearchForm';


describe('Pruebas sobre el componente <SearchForm />', () => {
    const history = {
        push: jest.fn()
    }

    test('Debe de mostrarse correctamente con los valores por defecto', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route path='/search' component={() => <SearchForm history={history} />}/>  
            </MemoryRouter>
        );

        expect(wrapper.find('input').prop('value')).toBe('');
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de llamar el push del history', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route path='/search' component={() => <SearchForm history={history} />}/>  
            </MemoryRouter>
        );

        wrapper.find('input').simulate('change',{
            target: {
                name: 'name',
                value: 'batman'
            }
        })

        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        })

        expect(history.push).toHaveBeenCalledWith('?q=batman');
    })
    
    
})
