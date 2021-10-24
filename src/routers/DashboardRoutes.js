import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { Navbar } from '../components/ui/Navbar'
import {HeroeScreen} from '../components/heroes/HeroeScreen';
import {DcScreen} from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className='container mt-2'>
                <Switch>
                    <Route exact path='/07-heroes-app/marvel' component={MarvelScreen} />
                    <Route exact path='/07-heroes-app/hero/:heroeId' component={HeroeScreen} />
                    <Route exact path='/07-heroes-app/dc' component={DcScreen} />
                    <Route exact path='/07-heroes-app/search' component={SearchScreen} />

                    <Redirect to='/07-heroes-app/marvel' />
                </Switch>
            </div>
        </>
    )
}
