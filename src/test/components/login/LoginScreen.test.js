import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from "react-router";

import { AuthContext } from "../../../auth/AuthContext";
import { LoginScreen } from "../../../components/login/LoginScreen";
import { types } from '../../../types/types';

describe('Pruebas sobre el componente <LoginScreen />', () => {

    const history = {
        replace: jest.fn()
    }

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }
    
    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <LoginScreen history={history}/>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    test('Debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('button').exists()).toBe(true);
    });

    test('Debe de realizar el dispatch y la navegacion', () => {
        const handleClick = wrapper.find('button').prop('onClick');

        handleClick();
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'Jordi'
            }
        });
        expect(history.replace).toHaveBeenCalled();

        localStorage.setItem('lastPath', '/search');
        handleClick();
        expect(history.replace).toHaveBeenCalledWith('/search')
    });
    
    
})
