import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";
import { demoAuthReducer } from "../fixtures/demoAuthReducer";

describe('Pruebas sobre authReducer', () => {
    test('Debe devolver el estado por defecto', () => {
        const reducer = authReducer(demoAuthReducer, {});

        expect(reducer).toEqual(demoAuthReducer);
    });

    test('Debe de autenticar y colocar el nombre de usuario', () => {
        const reducer = authReducer({},{type:types.login, payload:{name:'Pepe'}});

        expect(reducer).toEqual({name:'Pepe', logged:true})
    });
    
    test('Debe quitar el nombre de usuario y establecer logged en false', () => {
        const reducer = authReducer({name:'Pepe', logged:true}, {type:types.logout});

        expect(reducer).toEqual({logged: false});
    })
    
})
