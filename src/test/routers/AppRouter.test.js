import React from 'react';
import { mount } from "enzyme"
import { AppRouter } from '../../routers/AppRouter';
import { AuthContext } from '../../auth/AuthContext';
import { contextValue } from '../fixtures/contextValue';


describe('Pruebas sobre el componente <AppRouter />', () => {

    test('Debe mostrar el login si no está autenticado', () => {
        contextValue.user.logged = false;
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect(wrapper.find('h1#login').exists()).toBe(true);
    });

    test('Debe de mostrar el componente <MarvelScreen />', () => {

        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'jordi'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect(wrapper.find('HeroesList').exists()).toBe(true);
    })

})