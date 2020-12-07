import React, {useEffect, useState, useReducer, createContext} from 'react'
 
export default function Reducer(proxiUrl, apiUrl) {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "SET_JOBS": {
                return {
                    ...state,
                    loading: true,
                    jobs: action.jobsData
                }
            } 
            case "SET_LOCATION_VALUE": {
                return {
                    ...state, location: action.location,
                }
            }
            default:
                 return state
        }
    }, {
        jobs: [],
        loading: false,
        location: "",
    })
    // Fetch the first jobs to display 
   
    async function fetchJobs() {
        const response = await fetch(proxiUrl + apiUrl);
        const data = await response.json();
        dispatch({type: "SET_JOBS", jobsData: data})
    }

    useEffect(() => {
        fetchJobs();
   }, [])

    return {state, dispatch};
}
 
