import { shallow } from 'enzyme';
import React from 'react';
import HeroesApp from '../HeroesApp';

describe('Pruebas sobre el componente <HeroesApp />', () => {
    test('Debe mostrar el componente correctamente', () => {
        const wrapper = shallow(<HeroesApp />);

        expect(wrapper).toMatchSnapshot();
    })
    
})