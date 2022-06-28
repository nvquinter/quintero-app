import { createContext } from "react";

export const contexto = createContext()
const Provider = contexto.Provider

const MiProvider = ({children}) =>{



    return(
        <Provider value={{}}>
            {children}
        </Provider>
    )
}

export default MiProvider;
