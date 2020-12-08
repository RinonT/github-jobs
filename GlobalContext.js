import React, { useEffect, useState, createContext, useContext } from 'react'
import Reducer from './Reducer';
const Context = createContext();

const API_URL = "https://jobs.github.com/positions.json?";
const PROXI_URL = "https://cors-anywhere.herokuapp.com/";

function GlobalContext({ children }) {
  const { state, dispatch, perPage, pageCount, setPageCount, fetchJobs } = Reducer(PROXI_URL, API_URL);
  let {jobs, loading, description, location, fulltime } = state;
  const [offset, setOffset] = useState(0);
  
  // Fetch all jobs
  const allJobsEndpoint = PROXI_URL + API_URL;

  useEffect(() => {
    fetchJobs(allJobsEndpoint);
  }, [offset])

// Get jobs by decription/ fetch for the description
const jobsByDescriptionEdpoint = allJobsEndpoint + `description=${description}`;
  
useEffect(() => {
  fetchJobs(jobsByDescriptionEdpoint);
}, [description])
 
  function handleCheckbox(e) {
    if (e.target.checked) {
      dispatch({ type: "SET_JOBS", jobsData: [], loading: true})
      dispatch({ type: "SET_LOCATION_VALUE", location: `location=${e.target.id}` })
    } else if (!e.target.checked) {
      dispatch({ type: "SET_LOCATION_VALUE", location: "" })
      dispatch({ type: "SET_JOBS", jobsData: [], loading: true})
    }
  }

  console.log(jobs);
  console.log(loading);
  // Third fetch for the seacrh by locations, state, zip and fulltime
  useEffect(() => {
    let locationEndpoint = allJobsEndpoint + `full_time=${fulltime}` + "&" + location;
    // If a description has been searched
    if(description !== "") {
      locationEndpoint = jobsByDescriptionEdpoint + `full_time=${fulltime}` + "&" + location;
    }

     fetchJobs(locationEndpoint)
  }, [location, fulltime])


  return (
    <Context.Provider value={{ state, dispatch, handleCheckbox, pageCount, setPageCount, perPage, offset, setOffset }}>
      {children}
    </Context.Provider>
  )
}

export { Context, GlobalContext };