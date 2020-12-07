import React, {useEffect, useState, useReducer, createContext, useContext} from 'react'
import Reducer  from './Reducer';
const Context = createContext();

const API_URL = "https://jobs.github.com/positions.json?";
const PROXI_URL = "https://cors-anywhere.herokuapp.com/";
 
function GlobalContext({children}) {
    const {state, dispatch } = Reducer(PROXI_URL, API_URL);

   let  { location, jobs } = state;

    function handleCheckbox(e) {
         if (e.target.checked) {
             dispatch({type:"SET_LOCATION_VALUE", location: `location=${e.target.id}`})
         } else {
            dispatch({type:"SET_LOCATION_VALUE", location: "" })
         }
    }
 
  async function fetchJobsByLocation() {
    const response = await fetch(PROXI_URL + API_URL + location);
    const data = await response.json();
    console.log(data)
     dispatch({type: "SET_JOBS", jobsData: data})
  }
 
  useEffect(() => {
    fetchJobsByLocation()
  }, [location])
 
    return (
        <Context.Provider value={{state, dispatch, handleCheckbox}}>
            {children}
        </Context.Provider>
    )
}

export {Context, GlobalContext};