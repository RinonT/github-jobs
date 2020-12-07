import React, {useEffect, useState, useReducer, createContext, useContext} from 'react'
import Reducer  from './Reducer';
const Context = createContext();

function GlobalContext({children}) {
    const {state, dispatch } = Reducer();

    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}

export {Context, GlobalContext};