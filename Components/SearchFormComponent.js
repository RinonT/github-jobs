import React, { useContext } from 'react'
import { Context } from '../GlobalContext'

export default function SearchFormComponent() {
    const {dispatch} = useContext(Context);
 
    function searchJobs(e) {
        e.preventDefault();
        const descriptionSearchInput = e.target.description;
        dispatch({type: "SET_DESCRIPTION", description: descriptionSearchInput.value})
        descriptionSearchInput.value = "";
    }

    return (
        <form className="search_form" onSubmit={searchJobs}>
            <input type="text" name="description" placeholder="Title, companies, expertise or benefits" />
            <button>Search</button>
        </form>
    )
}
