import React, { useContext } from 'react';
import JobsComponents from '../Components/JobsComponents';
import { Context } from '../GlobalContext';

export default function Jobs() {
    const { state, dispatch } = useContext(Context);
    const jobsArr = state.jobs;
    const { loading } = state;
    console.log(jobsArr);
    const loadingElement = loading && <h2>Loading...</h2>;
    const jobsElements = jobsArr.length == 0 ?
        loadingElement 
        :
        jobsArr.map(job => {
            return (
                <JobsComponents key={job.id} {...job} />
            )
        }) 
        

    return (
        <div>
             {jobsElements}
        </div>
    )
}
