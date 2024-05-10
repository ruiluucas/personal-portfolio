import { Route, Switch, useLocation } from 'wouter'

import Members from '../slides/Members'
import AlanTuring from '../slides/AlanTuring'
import TuringMachine from '../slides/TuringMachine'
import VonNeumann from '../slides/VonNeumann'
import BinaryToLetters from '../slides/BinaryToLetters'
import Programmer from '../slides/Programmer'
import ProsCons from '../slides/ProsCons'
import Market from '../slides/Market'
import Salary from '../slides/Salary'

import ChangePage from "./ChangePage"

export default function SwitchRouter() {
    const [location, setLocation] = useLocation()

    return (
        <>
        <ChangePage location={location} setLocation={setLocation} />
        <Switch location={location}>
            <Route path="/members">
                <section>
                    <Members />
                </section>
            </Route>
            <Route path="/alan-turing">
                <section>
                    <AlanTuring />
                </section>
            </Route>
            <Route path="/turing-machine">
                <section>
                    <TuringMachine />
                </section>
            </Route>
            <Route path="/turing-machine">
                <section>
                    <TuringMachine />
                </section>
            </Route>
            <Route path="/von-neumann">
                <section>
                    <VonNeumann />
                </section>
            </Route>
            <Route path="/binary-to-letters">
                  <section>
                    <BinaryToLetters />
                  </section>
            </Route>
            <Route path="/programmer">
                <section>
                    <Programmer />
                </section>
            </Route>
            <Route path="/pros-cons">
                <section>
                    <ProsCons />
                </section>
            </Route>
            <Route path="/market">
                <section>
                    <Market />
                </section>
            </Route>
            <Route path="/salary">
                <section>
                    <Salary />
                </section>
            </Route>
        </Switch>
        </>
    )
}