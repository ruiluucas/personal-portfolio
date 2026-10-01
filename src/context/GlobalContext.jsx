import { createContext, useReducer } from "react";

export const GlobalContext = createContext()

const initialState = {
    // Abre direto no conteúdo quando a URL traz uma âncora (ex.: /#trabalhos)
    notebookZoomIn:
        typeof window !== "undefined" && Boolean(window.location.hash)
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
