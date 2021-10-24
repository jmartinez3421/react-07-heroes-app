import {heroes} from '../data/heroes';

export const getHeroByName = (name = '') => {
    // if(name === undefined){
    //     return '';
    // }else{
    //     return heroes.find( hero => hero.superhero.toLocaleLowerCase() === name.toLocaleLowerCase() );
    // }

    if(name === ''){
        return [];
    }
    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes( name.toLocaleLowerCase() ));
}