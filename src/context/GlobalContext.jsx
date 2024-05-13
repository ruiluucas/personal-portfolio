import { createContext, useReducer } from "react";

export const GlobalContext = createContext()

const initialState = {
    activeHandDetection: false,
  }
  
const reducer = (state, action) => {
    switch (action.type) {
        case 'ACTIVE_HAND_DETECTION':
            return { ...state, activeHandDetection: true }
        case 'DESATIVE_HAND_DETECTION':
            return { ...state, activeHandDetection: false }
        default:
            return state;
    }
  }

export default function GlobalContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <GlobalContext.Provider value={{ state , dispatch }}>
            { children }
        </GlobalContext.Provider>
    )
}
