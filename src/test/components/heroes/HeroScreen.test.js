import { mount } from "enzyme"
import { MemoryRouter, Route } from "react-router"
import { HeroeScreen } from "../../../components/heroes/HeroeScreen"

describe('Pruebas sobre el componente <HeroScreen />', () => {

    const history = {
        length: 10,
        goBack: jest.fn(),
        push: jest.fn()
    }

    
    test('Debe de mostrar el componente redirect si no hay argumentos en el url', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroeScreen history={history} />
            </MemoryRouter>
        )
        expect(wrapper.find('Redirect').exists()).toBe(true);
    });

    test('Debe de mostrar el componente redirect si el heroe que aparece en el url no existe', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/spider-woman']}>
                <HeroeScreen history={history} />
            </MemoryRouter>
        )
        expect(wrapper.text()).toBe('');
    });
    
    test('Debe mostrar un hero si el parametro existe ', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-captain']}>
                <Route path='/hero/:heroeId' component={ HeroeScreen } />
            </MemoryRouter>
        );

        expect(wrapper.find('img#heroIMG').exists()).toBe(true);
    });

    test('Debe de regresar a Marvel si se pulsa el boton con un history length menor a 2 y el publisher del hero es Marvel', () => {
        const history = {
            length: 1,
            goBack: jest.fn(),
            push: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-captain']}>
                <Route path='/hero/:heroeId' component={ () => <HeroeScreen history={history} /> } />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        expect(history.push).toHaveBeenCalledWith('/');
        expect(history.goBack).not.toHaveBeenCalled();
    });
    
    test('Debe de regresar a DC si se pulsa el boton con un history length menor a 2 y el publisher del hero es DC', () => {
        const history = {
            length: 1,
            goBack: jest.fn(),
            push: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/dc-batman']}>
                <Route path='/hero/:heroeId' component={ () => <HeroeScreen history={history} /> } />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        expect(history.push).toHaveBeenCalledWith('/dc');
        expect(history.goBack).not.toHaveBeenCalled();
    });

    test('Si el length del history es mayor a 2 y se presiona el botón debe volver a la página usando useBack()', () => {
        const history = {
            length: 3,
            goBack: jest.fn(),
            push: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/dc-batman']}>
                <Route path='/hero/:heroeId' component={ () => <HeroeScreen history={history} /> } />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        expect(history.push).not.toHaveBeenCalled();
        expect(history.goBack).toHaveBeenCalled();
    });
})
