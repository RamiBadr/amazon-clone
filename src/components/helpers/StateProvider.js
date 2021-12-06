import { createContext, useContext, useReducer } from 'react'


// This is a data layer
export const StateContext = createContext({})

export const StateProvider = ({reducer, initState, children}) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initState)}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateValue = () => useContext(StateContext);
