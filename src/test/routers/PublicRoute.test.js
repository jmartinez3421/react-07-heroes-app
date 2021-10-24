import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router';
import { PublicRoute } from '../../routers/PublicRoute';

describe('Pruebas sobre el componente <PublicRoute />', () => {
    test('Debe mostrar el componente si no está autenticado', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PublicRoute 
                    isAuthenticated={false}
                    component={() => <span>holaaaaa</span>}
                />
            </MemoryRouter>
        );

        expect(wrapper.find('span').exists()).toBe(true);
    });

    test('No debe mostrar el componente si el usuario está autenticado', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PublicRoute 
                    isAuthenticated={true}
                    component={() => <span>holaaaaa</span>}
                />
            </MemoryRouter>
        );
        
        expect(wrapper.html()).toBe('');
    });
    
})