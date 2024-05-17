import { createContext, useEffect, useReducer, useState } from "react";
import { useLocation } from 'wouter'
import delayChange from "../assets/delayChange";
import pages from "../assets/pages";

export const GlobalContext = createContext()

const initialState = {
    activeHandDetection: false,
    delayChangeLocation: false,
  }
  
const reducer = (state, action) => {
    switch (action.type) {
        case 'ACTIVE_HAND_DETECTION':
            return { ...state, activeHandDetection: true }
        case 'DESATIVE_HAND_DETECTION':
            return { ...state, activeHandDetection: false }
        case 'HANDLE_DELAY_CHANGE_LOCATION':
            return { ...state, delayChangeLocation: !state.delayChangeLocation }
        default:
            return state;
    }
  }

export default function GlobalContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [beforeLocation, setBeforeLocation] = useState(0)
    const [location, setLocation] = useLocation()

    addEventListener('keyup', (key) => {
        if(key.code === "ArrowRight") {
            setBeforeLocation(beforeLocation + 1)
        }
        if(key.code === "ArrowLeft") {
            setBeforeLocation(beforeLocation - 1)
        }
    })

    useEffect(() => {
        if(state.delayChangeLocation) {
            if (Object.keys(delayChange).includes(location)) {
                setTimeout(() => {
                    setLocation(pages[beforeLocation])
                    dispatch({ type: 'HANDLE_DELAY_CHANGE_LOCATION' })
                }, delayChange[location])
            } else {
                setLocation(pages[beforeLocation])
            }
        }
    }, [state.delayChangeLocation])

    useEffect(() => {
        dispatch({ type: 'HANDLE_DELAY_CHANGE_LOCATION' })
    }, [beforeLocation])

    return (
        <GlobalContext.Provider value={{ state , dispatch }}>
            { children }
        </GlobalContext.Provider>
    )
}
