import React, { useContext, useState } from 'react';
import ReactPaginate from 'react-paginate';
import JobsComponents from '../Components/JobsComponents';
import { Context } from '../GlobalContext';

export default function Jobs() {
    const { state, dispatch, perPage, pageCount, offset, setOffset } = useContext(Context);
    const jobsArr = state.jobs;
    const { loading } = state;  
    const loadingElement = loading ? <h2>Loading...</h2> : <h2>No result found</h2>;
    const jobsElements = jobsArr.length == 0 ?
        loadingElement
        :
        jobsArr.slice(offset, offset + perPage).map(job => {
            return (
                <JobsComponents key={job.id} {...job} />
            )
        })

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        console.log("selectedPage");
        setOffset(selectedPage + 1)
    };



    return (
        <div>
            {jobsElements}
            
            <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"} />
        </div >
    )
}
