import { createContext, useReducer } from "react";

export const GlobalContext = createContext()

const initialState = {
    notebookZoomIn: false
}
  
const reducer = (state, action) => {
    switch (action.type) {
        case 'ACTIVE_ZOOM_IN':
            return { notebookZoomIn: true }
        case 'DESACTIVE_ZOOM_IN':
            return { notebookZoomIn: false }        
        default:
            return state
    }
  }

export default function GlobalContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    return (
        <GlobalContext.Provider value={{ state , dispatch }}>
            { children }
        </GlobalContext.Provider>
    )
}
