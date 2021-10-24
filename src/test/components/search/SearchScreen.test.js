import { mount } from "enzyme"
import { MemoryRouter, Route } from "react-router"
import { SearchScreen } from "../../../components/search/SearchScreen"

describe('Pruebas sobre el componente <SearchScreen />', () => {
    
    const history =  {
        push: jest.fn()
    }

    test('Debe mostrarse correctamente con los valores por defectp', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route path='/search' component={() => <SearchScreen history={history} />} />
            </MemoryRouter>
        )

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-info').text()).toBe('Search a hero...');
    });
    
    test('Debe de mostrar a batman', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route path='/search' component={() => <SearchScreen history={history} />} />
            </MemoryRouter>
        )

        expect(wrapper.find('h5.card-title').text()).toBe('Batman');
    });

    test('Debe mostrar un error si el heroe no existe', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=adfadfdsfasa']}>
                <Route path='/search' component={() => <SearchScreen history={history} />} />
            </MemoryRouter>
        );

        expect(wrapper.find('.alert-danger').exists()).toBe(true);
    })
    
})
