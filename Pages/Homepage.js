import React from 'react';
import Header from './Header';
import Jobs from './Jobs';
import SearchByLocationComponent from '../Components/SearchByLocationComponent';
import Search from './Search';
 

export default function HomepageComponent() {
    return (
        <section className="page_section homepage_section">
            <Header />
            <Search />
            <SearchByLocationComponent />
            <Jobs/>
        </section>
    )
}
