

import { createContext, useContext, useReducer } from "react";

//Creamos el contexto para poder pasar las variables de un componente a otro
export const StateContext = createContext();

// Vamos a proveer la herramienta para pasar los datos de un componente a otro
export const StateProvider = ({ reducer, initialState, children }) =>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>

);

//va a permitir consumir desde cualquier componente los cambios de estado
export const useStateValue = () => useContext(StateContext);