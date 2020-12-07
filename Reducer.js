import React, {useEffect, useState, useReducer, createContext} from 'react'
 
const API_URL = "https://jobs.github.com/positions.json?";
const PROXI_URL = "https://cors-anywhere.herokuapp.com/";
const endPoint = PROXI_URL + API_URL; 

export default function Reducer() {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "SET_JOBS": {
                return {
                    ...state,
                    loading: true,
                    jobs: action.jobsData
                }
            } 
            default:
                 return state
        }
    }, {
        jobs: [],
        loading: false,
    })
    // Fetch the first jobs to display 
    const fetchJobs = async() => {
        const response = await fetch(endPoint);
        const data = await response.json();
         dispatch({type: "SET_JOBS", jobsData: data})
    }

    useEffect(() => {
         fetchJobs();
    }, [])
   
    return {state, dispatch};
}
 
