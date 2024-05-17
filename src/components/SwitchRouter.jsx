import { Route, Switch, useLocation } from 'wouter'

import ChangePage from "./ChangePage"
import React, { useState } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import Apresentation from '../pages/Apresentation'
import About from '../pages/About'
import Benefits from '../pages/Benefits'
import Process from '../pages/Process'
import Work from '../pages/Work'

export default function SwitchRouter() {
    const [location, setLocation] = useLocation()
    const { state, dispatch } = React.useContext(GlobalContext)

    return (
        <>
        <ChangePage location={location} context={{ state, dispatch }} setLocation={setLocation} />
        <Switch location={location}>
            <Route path="/">
                <section>
                    <Apresentation context={{ state, dispatch }} />
                </section>
            </Route>
            <Route path="/about">
                <section>
                    <About />
                </section>
            </Route>
            <Route path="/work">
                <section>
                    <Work />
                </section>
            </Route>
            <Route path="/benefits">
                <section>
                    <Benefits />
                </section>
            </Route>
            <Route path="/process">
                <section>
                    <Process />
                </section>
            </Route>
        </Switch>
        </>
    )
}