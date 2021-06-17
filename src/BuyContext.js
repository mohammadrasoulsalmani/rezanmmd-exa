import React , { useState , createContext } from 'react'

export const LoadContext = createContext();


function BuyContext(props) {
    const [load , setLoad] = useState(false)
    const [buy , setBuy] = useState(false)
    return (
        <LoadContext.Provider value={ { load , setLoad , buy , setBuy } } >
            {props.children}
        </LoadContext.Provider>
    )
}

export default BuyContext
