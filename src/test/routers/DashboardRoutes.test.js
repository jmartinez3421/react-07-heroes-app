import { mount } from "enzyme";
import React from 'react';
import { MemoryRouter } from "react-router";
import { AuthContext } from "../../auth/AuthContext";
import { DashboardRoutes } from "../../routers/DashboardRoutes";

describe('Pruebas sobre el componente <DashboardRoutes />', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            name: 'jordi',
            logged: true
        }
    }

    test('Debe renderizar el componente <NavBar />', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper.find('span#username').exists()).toBe(true);
        expect(wrapper.find('span#username').text().trim()).toBe(contextValue.user.name.trim());

    })

})
