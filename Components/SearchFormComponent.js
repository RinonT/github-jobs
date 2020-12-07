import React from 'react'

export default function SearchFormComponent() {
    return (
        <form className="search_form">
            <input type="text" placeholder="Title, companies, expertise or benefits" />
            <button>Search</button>
        </form>
    )
}
