import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter, Router } from 'react-router';
import { AuthContext } from '../../../auth/AuthContext';
import { Navbar } from '../../../components/ui/Navbar';
import { types } from '../../../types/types';
import { contextValue } from '../../fixtures/contextValue';


describe('Pruebas sobre el componente <NavBar />', () => {

    const historyMock = {
        push: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn(),
        replace: jest.fn()
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Router history={historyMock}>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>    
    );

        afterEach(() => {
            jest.clearAllMocks();
        })

    test('Debe mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('span#username').text().trim()).toBe(contextValue.user.name);
    });
    
    test('Debe de llamar el logout y usar history al pulsar el botón', () => {
        wrapper.find('button').prop('onClick')();

        expect(contextValue.dispatch).toHaveBeenCalledWith({type: types.logout});
        expect(historyMock.replace).toHaveBeenCalledWith('/login');
    })
    
})
